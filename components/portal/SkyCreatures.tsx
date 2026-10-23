import { useEffect, useRef } from 'react';
import { registerCreatures, getFlowRunning, prefersReducedMotion, Mood } from '../../lib/portal/bus';

/**
 * SKY CREATURES — same boids/physics engine as the prototype; every page now renders the same
 * simple glowing particle (brand blue/violet/gold, no illustrated chrome) — only color, count,
 * and the underlying motion (unchanged step()/make() physics) differ per page: Team → a real
 * boids flock, HackAI → rising embers, Programs → a drifting dot, Events → the same particle
 * on the kite's wind-anchor physics with an outward ping, AI Academy → a drifting dot on the
 * crane's wander physics. AIM → shooting stars + constellations (already reads as a graph —
 * untouched), Innovation Lab → fireflies wiring into a network (already a graph — untouched).
 * They keep to the side margins below the hero and react to the cursor and scroll speed.
 *
 * Pages pick the creature by calling setCritters() from lib/portal/bus — the prototype did this
 * via a `window.setCritters` global; same idea, no global.
 */
export default function SkyCreatures() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const g = cv.getContext('2d');
    if (!g) return;
    const reduce = prefersReducedMotion();
    let flowRunning = getFlowRunning();

    let W = 0, H = 0, mode: Mood | 'planes' = 'team', items: any[] = [], t = 0;
    const mouse = { x: -1e4, y: -1e4 };
    const onPointerMove = (e: PointerEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onPointerLeave = () => { mouse.x = mouse.y = -1e4; };
    let lastY = scrollY, gust = 0, vel = 0;
    const margin = () => (W - 1000) / 2;
    const inMarginX = () => { const m = margin(); if (m < 90) return Math.random() * W; return Math.random() < .5 ? Math.random() * m * .9 : W - Math.random() * m * .9; };
    const heroZone = () => scrollY < H * .4;

    /* ---------- builders ---------- */
    const PLANE_COLS = [['#dfe8ff', '#2f5bff'], ['#e9e3ff', '#8a6ff0'], ['#fff2df', '#ffb36b'], ['#dfe8ff', '#1f3fc7']];
    // planes spawn in loose squadrons (shared starting point + heading) rather than scattered individually
    const makePlane = (i: number, cx: number, cy: number, heading: number) => {
      const a = heading + (Math.random() - .5) * .7, speed = .8 + Math.random() * .7;
      return { x: cx + (Math.random() - .5) * 40, y: cy + (Math.random() - .5) * 40, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed - .4, z: .45 + Math.random() * .85, ph: Math.random() * 6.28, c: PLANE_COLS[i % 4], ax: 0, ay: 0 };
    };
    const LANTERN_COLS = [['#dfe8ff', '#2f5bff'], ['#e9e3ff', '#8a6ff0'], ['#fff2df', '#ffb36b'], ['#dfe8ff', '#1f3fc7']];
    // lanterns/seeds spawn in loose clusters (shared center) instead of scattered individually
    const makeLantern = (i: number, fresh: boolean, cx?: number, cy?: number) => {
      const x = cx !== undefined ? cx + (Math.random() - .5) * 90 : (heroZone() ? Math.random() * W : inMarginX());
      const y = cy !== undefined ? cy + (Math.random() - .5) * 60 : (fresh ? Math.random() * H : H + 40 + Math.random() * 120);
      return { x, y, z: .5 + Math.random() * .8, ph: Math.random() * 6.28, c: LANTERN_COLS[i % 4], vx: 0 };
    };
    const makeSeed = (i: number, fresh: boolean, cx?: number, cy?: number) => {
      const m = margin(), side = Math.random() < .5;
      const x = cx !== undefined ? cx + (Math.random() - .5) * 90 : (fresh ? (heroZone() ? Math.random() * W : inMarginX()) : (m > 90 ? (side ? -20 : W * .5 + Math.random() * 0) : -20));
      const y = cy !== undefined ? cy + (Math.random() - .5) * 70 : (fresh ? Math.random() * H : Math.random() * H);
      return { x, y, z: .5 + Math.random() * .8, ph: Math.random() * 6.28, rot: (Math.random() - .5) * .8, vx: 0, dir: 1, c: PLANE_COLS[i % 4] };
    };
    const CRANE_COLS = [['#eaf0ff', '#2f5bff'], ['#f0ecff', '#8a6ff0'], ['#fff5e8', '#ffb36b'], ['#eaf0ff', '#1f3fc7']];
    const makeCrane = (i: number) => ({ x: Math.random() * W, y: Math.random() * H, a: (Math.random() < .5 ? 0 : Math.PI) + (Math.random() - .5) * .6, z: (i % 9 === 0 ? 1.35 + Math.random() * .35 : .4 + Math.random() * .75), ph: Math.random() * 6.28, c: CRANE_COLS[i % 4], turn: 0 });
    const KITE_COLS = [['#2f5bff', '#1f3fc7'], ['#8a6ff0', '#5b3fd1'], ['#ffb36b', '#d1863f'], ['#2f5bff', '#8a6ff0']];
    const makeKite = (i: number, zone: 'left' | 'right' | 'mid') => {
      const m = margin();
      let ax: number;
      if (zone === 'mid' || m <= 110) ax = Math.random() * W;
      else if (zone === 'left') ax = m * .5 + (Math.random() - .5) * m * .7;
      else ax = W - m * .5 + (Math.random() - .5) * m * .7;
      return { ax, ay: H * (.1 + ((i * 0.37) % 1) * .62), x: 0, y: 0, z: .55 + Math.random() * .6, ph: Math.random() * 6.28, c: KITE_COLS[i % 4], push: 0 };
    };
    const makeFly = () => ({ x: Math.random() * W, y: Math.random() * H, a: Math.random() * 6.28, z: .5 + Math.random() * .7, ph: Math.random() * 6.28 });

    let shooters: any[] = [], consts: any[] = [], nextShoot = 0;
    function buildConstellations() {
      consts = [];
      const m = margin();
      if (m < 110) return;
      const shapes = [[[0, 0], [.4, .25], [.8, .1], [1, .55], [.55, .8], [.2, .65]], [[0, .3], [.3, 0], [.65, .2], [1, 0], [.7, .6]], [[.1, 0], [.5, .2], [.9, .05], [.6, .6], [.2, .9], [.9, 1]]];
      ([[0, .08], [1, .2], [0, .36], [1, .5], [0, .64], [1, .78], [0, .9]] as [number, number][]).forEach(([side, yy], i) => {
        const w = Math.min(m * .6, 200), h = w * .55, x0 = side ? W - m + (m - w) / 2 : (m - w) / 2, y0 = yy * H;
        const pts = shapes[i % 3].map(([u, v]) => ({ x: x0 + u * w, y: y0 + v * h, r: 1.4 + Math.random() * 1.8, tw: Math.random() * 6.28 }));
        consts.push({ pts, on: 0 });
      });
    }

    const flySprite = (() => {
      const c = document.createElement('canvas');
      c.width = c.height = 48;
      const x = c.getContext('2d')!;
      const gr = x.createRadialGradient(24, 24, 0, 24, 24, 24);
      gr.addColorStop(0, 'rgba(255,250,215,1)'); gr.addColorStop(.18, 'rgba(255,224,150,.9)'); gr.addColorStop(.45, 'rgba(255,170,190,.28)'); gr.addColorStop(1, 'rgba(185,166,255,0)');
      x.fillStyle = gr; x.fillRect(0, 0, 48, 48);
      return c;
    })();

    function populate() {
      const big = W >= 1200, mid = W >= 700;
      if (mode === 'team') {
        const n = big ? 92 : mid ? 64 : 38;
        const groupCount = Math.max(3, Math.round(n / 7));
        const groups = Array.from({ length: groupCount }, () => ({ cx: Math.random() * W, cy: Math.random() * H * .8, heading: Math.random() * Math.PI * 2 }));
        items = Array.from({ length: n }, (_, i) => { const g = groups[i % groupCount]; return makePlane(i, g.cx, g.cy, g.heading); });
      }
      else if (mode === 'hackai') {
        const n = big ? 26 : mid ? 18 : 10, groupCount = Math.max(2, Math.round(n / 6));
        const groups = Array.from({ length: groupCount }, () => ({ cx: heroZone() ? Math.random() * W : inMarginX(), cy: Math.random() * H }));
        items = Array.from({ length: n }, (_, i) => { const g = groups[i % groupCount]; return makeLantern(i, true, g.cx, g.cy); });
      }
      else if (mode === 'programs') {
        const n = big ? 26 : mid ? 18 : 10, groupCount = Math.max(2, Math.round(n / 6));
        const groups = Array.from({ length: groupCount }, () => ({ cx: heroZone() ? Math.random() * W : inMarginX(), cy: Math.random() * H }));
        items = Array.from({ length: n }, (_, i) => { const g = groups[i % groupCount]; return makeSeed(i, true, g.cx, g.cy); });
      }
      else if (mode === 'academy') { const n = big ? 40 : mid ? 28 : 14; items = Array.from({ length: n }, (_, i) => makeCrane(i)); }
      else if (mode === 'aim') {
        shooters = []; buildConstellations();
        const n = big ? 34 : mid ? 22 : 12;
        items = Array.from({ length: n }, () => ({ x: inMarginX(), y: Math.random() * H, r: 3 + Math.pow(Math.random(), 2) * 13, ph: Math.random() * 6.28, sp: .6 + Math.random() * 1.4, drift: (Math.random() - .5) * .08 }));
      }
      else if (mode === 'events') {
        const perSide = big ? 4 : mid ? 3 : 2, perMid = big ? 4 : mid ? 3 : 2;
        let k = 0;
        items = [
          ...Array.from({ length: perSide }, () => makeKite(k++, 'left')),
          ...Array.from({ length: perSide }, () => makeKite(k++, 'right')),
          ...Array.from({ length: perMid }, () => makeKite(k++, 'mid')),
        ];
      }
      else if (mode === 'lab') { const n = big ? 54 : mid ? 38 : 20; items = Array.from({ length: n }, makeFly); }
      items.sort((a, b) => a.z - b.z);
    }
    function resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      W = innerWidth; H = innerHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      populate();
    }
    resize();
    addEventListener('resize', resize);
    let swapT: ReturnType<typeof setTimeout> | undefined;
    let first = true;
    function setCritters(name: Mood) {
      clearTimeout(swapT);
      if (first || reduce) { first = false; mode = name; populate(); return; }
      if (name === mode) { cv.style.opacity = '1'; return; }
      cv.style.opacity = '0';
      swapT = setTimeout(() => { mode = name; populate(); cv.style.opacity = '1'; }, 400);
    }
    registerCreatures({ setCritters });

    /* ---------- planes (boids) ---------- */
    function stepPlanes() {
      const colL = margin(), colR = W - colL, margins = colL > 70, heroGone = scrollY > H * .45;
      for (const b of items) {
        let ax = 0, ay = 0, cx = 0, cy = 0, avx = 0, avy = 0, n = 0;
        for (const o of items) { if (o === b) continue; const dx = o.x - b.x, dy = o.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < 16000) { n++; cx += o.x; cy += o.y; avx += o.vx; avy += o.vy; if (d2 < 520 * b.z) { ax -= dx / (d2 + 1) * 14; ay -= dy / (d2 + 1) * 14; } } }
        if (n) { ax += (cx / n - b.x) * .011 + (avx / n - b.vx) * .08; ay += (cy / n - b.y) * .011 + (avy / n - b.vy) * .08; }
        const mx = b.x - mouse.x, my = b.y - mouse.y, md = Math.hypot(mx, my); if (md < 140) { ax += mx / md * .9; ay += my / md * .9; }
        if (margins && heroGone && b.x > colL - 10 && b.x < colR + 10) ax += (b.x < W / 2 ? -1 : 1) * .35;
        if (b.x < 30) ax += .25; if (b.x > W - 30) ax -= .25;
        ay += -.012 - gust * .02;
        b.vx += ax; b.vy += ay; b.ax = ax; b.ay = ay;
        const sp = Math.hypot(b.vx, b.vy), max = 2.6 * b.z + .6, min = .9 * b.z + .3;
        if (sp > max) { b.vx *= max / sp; b.vy *= max / sp; } else if (sp < min) { b.vx *= min / sp; b.vy *= min / sp; }
        b.x += b.vx; b.y += b.vy;
        if (b.y < -30) { b.y = H + 30; if (margins && heroGone) b.x = Math.random() < .5 ? Math.random() * colL : colR + Math.random() * colL; }
        if (b.y > H + 30) b.y = -30;
        b.ph += .16 + sp * .05;
      }
    }
    // a traveling light-particle instead of a paper airplane — just a glowing dot, the same
    // visual language as the node/network motif already used on AIM and Innovation Lab
    function drawPlane(b: any) {
      const s = 7 * b.z;
      g.save(); g.translate(b.x, b.y); g.globalAlpha = .4 + b.z * .55;
      const pulse = .78 + .22 * Math.sin(b.ph * .6);
      const glow = g.createRadialGradient(0, 0, 0, 0, 0, s * 1.6 * pulse);
      glow.addColorStop(0, `${b.c[1]}aa`); glow.addColorStop(1, `${b.c[1]}00`);
      g.fillStyle = glow; g.beginPath(); g.arc(0, 0, s * 1.6 * pulse, 0, 7); g.fill();
      g.fillStyle = 'rgba(255,255,255,.95)'; g.beginPath(); g.arc(0, 0, s * .3, 0, 7); g.fill();
      g.restore();
    }

    /* ---------- lanterns ---------- */
    function stepFloaters() {
      items.forEach((b, i) => {
        const rise = .34 * b.z + Math.max(gust, 0) * .05;
        b.y -= rise; b.ph += .012;
        b.x += Math.sin(t * .6 + b.ph * 3) * .25 * b.z + b.vx; b.vx *= .94;
        const mx = b.x - mouse.x, my = b.y - mouse.y, md = Math.hypot(mx, my); if (md < 150) b.vx += mx / md * .35;
        if (b.y < -90) { const nb = makeLantern(i, false); Object.assign(b, nb, { z: b.z }); }
      });
    }
    // a rising glowing ember instead of a paper lantern — same particle language as the
    // planes, no illustrated chrome, just a warm pulsing light drifting upward
    function drawLantern(b: any) {
      const s = b.z, flick = .85 + Math.sin(t * 9 + b.ph * 5) * .08 + Math.sin(t * 23 + b.ph) * .05;
      g.save(); g.translate(b.x, b.y); g.globalAlpha = .55 + .45 * s;
      const glow = g.createRadialGradient(0, 0, 0, 0, 0, 13 * s * flick);
      glow.addColorStop(0, `${b.c[1]}dd`); glow.addColorStop(.5, `${b.c[1]}55`); glow.addColorStop(1, `${b.c[1]}00`);
      g.fillStyle = glow; g.beginPath(); g.arc(0, 0, 13 * s * flick, 0, 7); g.fill();
      g.fillStyle = `rgba(255,255,255,${.8 * flick})`; g.beginPath(); g.arc(0, 0, 2.6 * s, 0, 7); g.fill();
      g.restore();
    }

    /* ---------- kites (Events, golden afternoon) ---------- */
    function stepKites() { items.forEach((k) => { const d = Math.hypot(k.x - mouse.x, k.y - mouse.y); k.push += ((d < 140 ? (k.x < mouse.x ? -40 : 40) : 0) - k.push) * .05; }); }
    function drawKite(k: any) {
      const s = 20 * k.z, wind = Math.sin(t * .35 + k.ph) * 26 * k.z + Math.min(Math.max(vel, -60), 60) * .4;
      k.x = k.ax + wind + k.push; k.y = k.ay + Math.sin(t * .7 + k.ph * 2) * 10;
      g.save(); g.globalAlpha = .6 + .4 * k.z;
      g.translate(k.x, k.y);
      // a glowing badge with a ping ring — no tail/string, same simple particle language as
      // the planes/lanterns, just with an outward pulse to read as "signal"
      const br = .85 * s;
      const ping = (t * .6 + k.ph) % 1;
      g.strokeStyle = `${k.c[0]}${Math.round(255 * (1 - ping)).toString(16).padStart(2, '0')}`; g.lineWidth = br * .12;
      g.beginPath(); g.arc(0, 0, br * (.5 + ping * .9), 0, 7); g.stroke();
      const blink = .55 + .45 * Math.sin(t * 3 + k.ph * 2);
      const glow = g.createRadialGradient(0, 0, 0, 0, 0, br * .95);
      glow.addColorStop(0, `${k.c[1]}${Math.round(220 * blink).toString(16).padStart(2, '0')}`); glow.addColorStop(1, `${k.c[1]}00`);
      g.fillStyle = glow; g.beginPath(); g.arc(0, 0, br * .95, 0, 7); g.fill();
      g.fillStyle = 'rgba(255,255,255,.9)'; g.beginPath(); g.arc(0, 0, br * .22, 0, 7); g.fill();
      g.restore();
    }

    /* ---------- dandelion puffballs (Programs) ---------- */
    function stepSeeds() {
      const colL = margin(), margins = colL > 90, heroGone = scrollY > H * .4;
      items.forEach((b) => {
        b.ph += .01;
        b.x += (.35 + Math.sin(t * .3 + b.ph) * .25) * b.z + b.vx;
        b.y += Math.sin(t * .7 + b.ph * 2) * .35 - .05 - gust * .03;
        b.rot += .004 + b.z * .004;
        b.vx *= .94;
        const mx = b.x - mouse.x, my = b.y - mouse.y, md = Math.hypot(mx, my); if (md < 140) { b.vx += mx / md * .5; b.y += my / md * .6; }
        if (margins && heroGone && b.x > colL - 10 && b.x < W - colL) b.x = W - colL + 10 + Math.random() * colL * .85;
        if (b.x > W + 30) { b.x = -30; b.y = Math.random() * H; }
        if (b.y < -40) b.y = H + 40; if (b.y > H + 40) b.y = -40;
      });
    }
    // a simple glowing dot instead of a dandelion puff — same particle language as the planes
    function drawTuft(b: any) {
      const s = 7 * b.z;
      g.save(); g.translate(b.x, b.y); g.globalAlpha = .45 + b.z * .5;
      const pulse = .78 + .22 * Math.sin(b.ph * .6);
      const glow = g.createRadialGradient(0, 0, 0, 0, 0, s * 1.6 * pulse);
      glow.addColorStop(0, `${b.c[1]}aa`); glow.addColorStop(1, `${b.c[1]}00`);
      g.fillStyle = glow; g.beginPath(); g.arc(0, 0, s * 1.6 * pulse, 0, 7); g.fill();
      g.fillStyle = 'rgba(255,255,255,.95)'; g.beginPath(); g.arc(0, 0, s * .3, 0, 7); g.fill();
      g.restore();
    }

    /* ---------- origami cranes (AI Academy, dawn) ---------- */
    function stepCranes() {
      const colL = margin(), margins = colL > 90, heroGone = scrollY > H * .4;
      items.forEach((b) => {
        b.turn += (Math.random() - .5) * .02; b.turn *= .96; b.a += b.turn;
        if (margins && heroGone) { const inCol = b.x > colL - 20 && b.x < W - colL + 20;
          if (inCol) { const want = b.x < W / 2 ? Math.PI : 0; let d = want - b.a; d = Math.atan2(Math.sin(d), Math.cos(d)); b.a += d * .06; } }
        const mx = b.x - mouse.x, my = b.y - mouse.y, md = Math.hypot(mx, my);
        if (md < 150) { let d = Math.atan2(my, mx) - b.a; d = Math.atan2(Math.sin(d), Math.cos(d)); b.a += d * .08; }
        const sp = (.5 + b.z * .7) * (1 + Math.min(Math.abs(gust), 20) * .03);
        b.x += Math.cos(b.a) * sp; b.y += Math.sin(b.a) * sp * .5 + Math.sin(t * 1.2 + b.ph) * .25 - gust * .02;
        if (b.x < -40) b.x = W + 40; if (b.x > W + 40) b.x = -40; if (b.y < -40) b.y = H + 40; if (b.y > H + 40) b.y = -40;
        b.ph += .09 + sp * .02;
      });
    }
    // a simple glowing dot instead of an origami crane — same particle language as every
    // other page now, for consistency, instead of another illustrated micro-icon
    function drawCrane(b: any) {
      const s = 7 * b.z;
      g.save(); g.translate(b.x, b.y); g.globalAlpha = .45 + b.z * .5;
      const pulse = .78 + .22 * Math.sin(b.ph * .6);
      const glow = g.createRadialGradient(0, 0, 0, 0, 0, s * 1.6 * pulse);
      glow.addColorStop(0, `${b.c[1]}aa`); glow.addColorStop(1, `${b.c[1]}00`);
      g.fillStyle = glow; g.beginPath(); g.arc(0, 0, s * 1.6 * pulse, 0, 7); g.fill();
      g.fillStyle = 'rgba(255,255,255,.95)'; g.beginPath(); g.arc(0, 0, s * .3, 0, 7); g.fill();
      g.restore();
    }

    /* ---------- night sky (AIM): shooting stars + margin constellations ---------- */
    function stepStars() {
      const now = performance.now();
      if (now > nextShoot) {
        nextShoot = now + 500 + Math.random() * 1300;
        const m = margin(), heroGone = scrollY > H * .4, inM = m > 110 && heroGone;
        const x = inM ? (Math.random() < .5 ? Math.random() * m : W - m + Math.random() * m) : Math.random() * W;
        shooters.push({ x, y: Math.random() * H * .6, vx: (Math.random() < .5 ? -1 : 1) * (6 + Math.random() * 5), vy: 3 + Math.random() * 2.5, life: 1 });
      }
      shooters.forEach((s) => { s.x += s.vx; s.y += s.vy; s.life -= .022; }); shooters = shooters.filter((s) => s.life > 0);
      consts.forEach((c) => { const near = c.pts.some((p: any) => Math.hypot(p.x - mouse.x, p.y - mouse.y) < 170); c.on += ((near ? 1 : .18) - c.on) * .06; });
    }
    function drawSparkle(sk: any) {
      const tw = .5 + .5 * Math.sin(t * sk.sp + sk.ph), r = sk.r * (.7 + .45 * tw);
      sk.y += sk.drift; if (sk.y < -30) sk.y = H + 30; if (sk.y > H + 30) sk.y = -30;
      g.save(); g.translate(sk.x, sk.y); g.globalAlpha = .35 + .65 * tw;
      const gl = g.createRadialGradient(0, 0, 0, 0, 0, r * 2.6); gl.addColorStop(0, 'rgba(210,222,255,.55)'); gl.addColorStop(1, 'rgba(210,222,255,0)');
      g.fillStyle = gl; g.beginPath(); g.arc(0, 0, r * 2.6, 0, 7); g.fill();
      g.fillStyle = '#f4f7ff'; g.beginPath(); g.moveTo(0, -r);
      g.quadraticCurveTo(r * .12, -r * .12, r, 0); g.quadraticCurveTo(r * .12, r * .12, 0, r); g.quadraticCurveTo(-r * .12, r * .12, -r, 0); g.quadraticCurveTo(-r * .12, -r * .12, 0, -r); g.fill();
      g.restore();
    }
    function drawStars() {
      items.forEach(drawSparkle);
      consts.forEach((c) => {
        g.save(); g.strokeStyle = `rgba(200,215,255,${.15 + .6 * c.on})`; g.lineWidth = 1.1 + c.on; g.setLineDash(c.on > .6 ? [] : [3, 6]);
        g.beginPath(); c.pts.forEach((p: any, i: number) => (i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y))); g.stroke(); g.setLineDash([]);
        c.pts.forEach((p: any) => {
          const tw = .6 + .4 * Math.sin(t * 2.2 + p.tw), r = p.r * (1 + c.on * .5);
          const gl = g.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 6); gl.addColorStop(0, `rgba(200,215,255,${.35 * tw})`); gl.addColorStop(1, 'rgba(200,215,255,0)');
          g.fillStyle = gl; g.beginPath(); g.arc(p.x, p.y, r * 6, 0, 7); g.fill();
          g.fillStyle = `rgba(255,255,255,${.6 + .4 * tw})`; g.beginPath(); g.arc(p.x, p.y, r, 0, 7); g.fill();
        });
        g.restore();
      });
      shooters.forEach((s) => {
        const L = 16, tx = s.x - s.vx * L * .5, ty = s.y - s.vy * L * .5;
        const gr = g.createLinearGradient(s.x, s.y, tx, ty); gr.addColorStop(0, `rgba(255,255,255,${s.life})`); gr.addColorStop(1, 'rgba(185,200,255,0)');
        g.strokeStyle = gr; g.lineWidth = 2; g.lineCap = 'round'; g.beginPath(); g.moveTo(s.x, s.y); g.lineTo(tx, ty); g.stroke();
        g.fillStyle = `rgba(255,255,255,${s.life})`; g.beginPath(); g.arc(s.x, s.y, 1.8, 0, 7); g.fill();
      });
    }

    /* ---------- fireflies that wire themselves into a network (Innovation Lab, twilight) ---------- */
    function stepFlies() {
      const colL = margin(), margins = colL > 90, heroGone = scrollY > H * .4;
      items.forEach((b) => {
        b.a += Math.sin(t * .8 + b.ph * 3) * .06 + (Math.random() - .5) * .08;
        if (margins && heroGone && b.x > colL - 10 && b.x < W - colL + 10) { const want = b.x < W / 2 ? Math.PI : 0; let d = want - b.a; d = Math.atan2(Math.sin(d), Math.cos(d)); b.a += d * .08; }
        const mx = mouse.x - b.x, my = mouse.y - b.y, md = Math.hypot(mx, my);
        if (md < 180 && md > 30) { let d = Math.atan2(my, mx) - b.a; d = Math.atan2(Math.sin(d), Math.cos(d)); b.a += d * .03; }
        const sp = .35 + b.z * .4; b.x += Math.cos(b.a) * sp; b.y += Math.sin(b.a) * sp - gust * .02; b.ph += .02;
        if (b.x < -20) b.x = W + 20; if (b.x > W + 20) b.x = -20; if (b.y < -20) b.y = H + 20; if (b.y > H + 20) b.y = -20;
      });
    }
    function drawFlies() {
      g.save(); g.lineWidth = 1;
      for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
        const a = items[i], b = items[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) { const near = Math.min(Math.hypot((a.x + b.x) / 2 - mouse.x, (a.y + b.y) / 2 - mouse.y), 300);
          g.strokeStyle = `rgba(205,190,255,${(1 - d / 120) * (.18 + .4 * (1 - near / 300))})`; g.beginPath(); g.moveTo(a.x, a.y); g.lineTo(b.x, b.y); g.stroke(); }
      }
      items.forEach((b) => { const glow = .55 + .45 * Math.sin(t * 2.6 + b.ph * 5), s = (14 + b.z * 14) * (.8 + .4 * glow);
        g.globalAlpha = .4 + .6 * glow * b.z; g.drawImage(flySprite, b.x - s / 2, b.y - s / 2, s, s); });
      g.restore();
    }

    function frame() {
      const dy = scrollY - lastY; lastY = scrollY; gust = gust * .9 + dy * .04; vel = vel * .9 + dy;
      flowRunning = getFlowRunning();
      if (flowRunning) {
        t += .016;
        if (mode === 'team') stepPlanes();
        else if (mode === 'programs') stepSeeds();
        else if (mode === 'hackai') stepFloaters();
        else if (mode === 'academy') stepCranes();
        else if (mode === 'aim') stepStars();
        else if (mode === 'lab') stepFlies();
        else if (mode === 'events') stepKites();
      }
      g.clearRect(0, 0, W, H);
      if (mode === 'team') items.forEach(drawPlane);
      else if (mode === 'hackai') items.forEach(drawLantern);
      else if (mode === 'programs') items.forEach(drawTuft);
      else if (mode === 'academy') items.forEach(drawCrane);
      else if (mode === 'aim') drawStars();
      else if (mode === 'lab') drawFlies();
      else if (mode === 'events') items.forEach(drawKite);
      if (!reduce) raf = requestAnimationFrame(frame);
    }
    let raf = requestAnimationFrame(frame);
    const onResizeReduced = () => requestAnimationFrame(frame);
    if (reduce) addEventListener('resize', onResizeReduced);

    addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerleave', onPointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('resize', resize);
      if (reduce) removeEventListener('resize', onResizeReduced);
      removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
      clearTimeout(swapT);
      registerCreatures(null as any);
    };
  }, []);

  return <canvas id="flock" ref={canvasRef} aria-hidden="true" />;
}
