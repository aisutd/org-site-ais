import { useEffect, useRef } from 'react';
import { registerCreatures, getFlowRunning, prefersReducedMotion, Mood } from '../../lib/portal/bus';

/**
 * SKY CREATURES — ported from ais-site/index.html. Each page has its own thing in the sky:
 * Team → paper planes (a real boids flock), HackAI → glowing sky lanterns, Programs → dandelion
 * seeds, AI Academy → origami cranes, AIM → shooting stars + constellations, Innovation Lab →
 * fireflies that wire themselves into a network, Events → kites. They keep to the side margins
 * below the hero and react to the cursor and scroll speed.
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
    const PLANE_COLS = [['#ffffff', '#ffe1d2'], ['#ffffff', '#dcd0ff'], ['#fff8f2', '#ffc9b3'], ['#f4f1ff', '#b9a6ff']];
    // planes spawn in loose squadrons (shared starting point + heading) rather than scattered individually
    const makePlane = (i: number, cx: number, cy: number, heading: number) => {
      const a = heading + (Math.random() - .5) * .7, speed = .8 + Math.random() * .7;
      return { x: cx + (Math.random() - .5) * 70, y: cy + (Math.random() - .5) * 70, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed - .4, z: .45 + Math.random() * .85, ph: Math.random() * 6.28, c: PLANE_COLS[i % 4], ax: 0, ay: 0 };
    };
    const LANTERN_COLS = [['#fff1c9', '#ff9b6a'], ['#ffe2ef', '#ff7fb8'], ['#efe6ff', '#a88bff'], ['#fff4dc', '#ffb36b']];
    const makeLantern = (i: number, fresh: boolean) => ({ x: heroZone() ? Math.random() * W : inMarginX(), y: fresh ? Math.random() * H : H + 40 + Math.random() * 120, z: .5 + Math.random() * .8, ph: Math.random() * 6.28, c: LANTERN_COLS[i % 4], vx: 0 });
    const makeSeed = (i: number, fresh: boolean) => {
      const m = margin(), side = Math.random() < .5;
      return { x: fresh ? (heroZone() ? Math.random() * W : inMarginX()) : (m > 90 ? (side ? -20 : W * .5 + Math.random() * 0) : -20), y: fresh ? Math.random() * H : Math.random() * H, z: .5 + Math.random() * .8, ph: Math.random() * 6.28, rot: (Math.random() - .5) * .8, vx: 0, dir: 1 };
    };
    const CRANE_COLS = [['#ffffff', '#ffcf3d'], ['#fff8ee', '#2f5bff'], ['#ffffff', '#ff8f7a'], ['#fffaf2', '#9a7cff']];
    const makeCrane = (i: number) => ({ x: Math.random() * W, y: Math.random() * H, a: (Math.random() < .5 ? 0 : Math.PI) + (Math.random() - .5) * .6, z: (i % 9 === 0 ? 1.35 + Math.random() * .35 : .4 + Math.random() * .75), ph: Math.random() * 6.28, c: CRANE_COLS[i % 4], turn: 0 });
    const KITE_COLS = [['#ff8a5c', '#ffd27a'], ['#5b7bff', '#ffffff'], ['#b98bff', '#ffe1c2'], ['#ff6fa8', '#ffd27a']];
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

    // one round "tuft" sprite drawn once, then stamped, scaled and slowly spun (dandelion seeds)
    const tuftSprite = (() => {
      const R = 64, c = document.createElement('canvas');
      c.width = c.height = R * 2;
      const x = c.getContext('2d')!;
      x.translate(R, R);
      const halo = x.createRadialGradient(0, 0, 0, 0, 0, R * .95);
      halo.addColorStop(0, 'rgba(255,255,255,.55)'); halo.addColorStop(.6, 'rgba(255,255,255,.18)'); halo.addColorStop(1, 'rgba(255,255,255,0)');
      x.fillStyle = halo; x.beginPath(); x.arc(0, 0, R * .95, 0, 7); x.fill();
      const N = 64;
      for (let k = 0; k < N; k++) {
        const a = k / N * Math.PI * 2 + (k % 2) * .05, r = R * (.72 + ((k * 37) % 11) / 11 * .18), ex = Math.cos(a) * r, ey = Math.sin(a) * r;
        x.strokeStyle = 'rgba(80,70,170,.18)'; x.lineWidth = 2.2; x.beginPath(); x.moveTo(0, 0); x.lineTo(ex, ey); x.stroke();
        x.strokeStyle = 'rgba(255,255,255,.95)'; x.lineWidth = 1.1; x.beginPath(); x.moveTo(0, 0); x.lineTo(ex, ey); x.stroke();
        for (let j = -2; j <= 2; j++) { const b = a + j * .32, l = R * .12; x.strokeStyle = 'rgba(255,255,255,.75)'; x.lineWidth = .8;
          x.beginPath(); x.moveTo(ex, ey); x.lineTo(ex + Math.cos(b) * l, ey + Math.sin(b) * l); x.stroke(); }
      }
      const core = x.createRadialGradient(-3, -3, 1, 0, 0, R * .16);
      core.addColorStop(0, '#fff8ec'); core.addColorStop(1, '#c9b49a');
      x.fillStyle = core; x.beginPath(); x.arc(0, 0, R * .14, 0, 7); x.fill();
      return c;
    })();
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
      else if (mode === 'hackai') { const n = big ? 26 : mid ? 18 : 10; items = Array.from({ length: n }, (_, i) => makeLantern(i, true)); }
      else if (mode === 'programs') { const n = big ? 26 : mid ? 18 : 10; items = Array.from({ length: n }, (_, i) => makeSeed(i, true)); }
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
        if (n) { ax += (cx / n - b.x) * .006 + (avx / n - b.vx) * .08; ay += (cy / n - b.y) * .006 + (avy / n - b.vy) * .08; }
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
    function drawPlane(b: any) {
      const s = 7.5 * b.z, flap = Math.cos(b.ph), bank = Math.max(-1, Math.min(1, (b.vx * b.ay - b.vy * b.ax) * 3));
      g.save(); g.translate(b.x, b.y); g.rotate(Math.atan2(b.vy, b.vx)); g.globalAlpha = .35 + b.z * .55;
      const wl = s * (.55 + .45 * flap) * (1 - bank * .35), wr = s * (.55 + .45 * flap) * (1 + bank * .35);
      g.fillStyle = b.c[0]; g.beginPath(); g.moveTo(s * 1.5, 0); g.lineTo(-s, -wl * 1.1); g.lineTo(-s * .45, 0); g.closePath(); g.fill();
      g.fillStyle = b.c[1]; g.beginPath(); g.moveTo(s * 1.5, 0); g.lineTo(-s, wr * 1.1); g.lineTo(-s * .45, 0); g.closePath(); g.fill();
      g.strokeStyle = 'rgba(90,70,190,.35)'; g.lineWidth = .8; g.beginPath(); g.moveTo(s * 1.5, 0); g.lineTo(-s * .45, 0); g.stroke();
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
    function drawLantern(b: any) {
      const s = b.z, flick = .85 + Math.sin(t * 9 + b.ph * 5) * .08 + Math.sin(t * 23 + b.ph) * .05;
      g.save(); g.translate(b.x, b.y); g.rotate(Math.sin(t * .8 + b.ph) * .08);
      const glow = g.createRadialGradient(0, 4 * s, 0, 0, 4 * s, 46 * s); glow.addColorStop(0, `rgba(255,190,140,${.45 * flick})`); glow.addColorStop(1, 'rgba(255,150,120,0)');
      g.fillStyle = glow; g.beginPath(); g.arc(0, 4 * s, 46 * s, 0, 7); g.fill();
      const body = g.createLinearGradient(0, -16 * s, 0, 16 * s); body.addColorStop(0, b.c[0]); body.addColorStop(1, b.c[1]);
      g.globalAlpha = .55 + .45 * s; g.fillStyle = body;
      g.beginPath(); g.moveTo(-9 * s, -14 * s); g.quadraticCurveTo(0, -19 * s, 9 * s, -14 * s); g.lineTo(12 * s, 12 * s); g.quadraticCurveTo(0, 16 * s, -12 * s, 12 * s); g.closePath(); g.fill();
      g.fillStyle = 'rgba(255,255,255,.45)'; g.beginPath(); g.ellipse(-4 * s, -3 * s, 2.2 * s, 8 * s, -.15, 0, 7); g.fill();
      g.fillStyle = `rgba(255,248,210,${flick})`; g.beginPath(); g.ellipse(0, 14 * s, 3 * s, 2.2 * s, 0, 0, 7); g.fill();
      g.restore();
    }

    /* ---------- kites (Events, golden afternoon) ---------- */
    function stepKites() { items.forEach((k) => { const d = Math.hypot(k.x - mouse.x, k.y - mouse.y); k.push += ((d < 140 ? (k.x < mouse.x ? -40 : 40) : 0) - k.push) * .05; }); }
    function drawKite(k: any) {
      const s = 20 * k.z, wind = Math.sin(t * .35 + k.ph) * 26 * k.z + Math.min(Math.max(vel, -60), 60) * .4;
      k.x = k.ax + wind + k.push; k.y = k.ay + Math.sin(t * .7 + k.ph * 2) * 10;
      const rot = Math.sin(t * .5 + k.ph) * .16 + wind * .004;
      g.save(); g.globalAlpha = .6 + .4 * k.z;
      g.translate(k.x, k.y); g.rotate(rot);
      let px = 0, py = s * 1.6; g.strokeStyle = 'rgba(90,60,40,.45)'; g.lineWidth = 1.2; g.beginPath(); g.moveTo(px, py);
      const bows: [number, number, number][] = [];
      for (let i = 1; i <= 14; i++) { px = Math.sin(t * 2.2 - i * .55 + k.ph) * (4 + i * 1.3); py = s * 1.6 + i * 6 * k.z; g.lineTo(px, py); if (i % 3 === 0) bows.push([px, py, i]); }
      g.stroke();
      bows.forEach(([bx, by, i]) => { g.fillStyle = k.c[i % 2]; g.beginPath(); g.moveTo(bx, by); g.lineTo(bx - 6 * k.z, by - 3 * k.z); g.lineTo(bx - 6 * k.z, by + 3 * k.z); g.closePath(); g.moveTo(bx, by); g.lineTo(bx + 6 * k.z, by - 3 * k.z); g.lineTo(bx + 6 * k.z, by + 3 * k.z); g.closePath(); g.fill(); });
      const P = [[0, -1.25 * s], [.85 * s, 0], [0, 1.6 * s], [-.85 * s, 0]];
      for (let i = 0; i < 4; i++) { const a = P[i], b = P[(i + 1) % 4]; g.fillStyle = k.c[i % 2]; g.beginPath(); g.moveTo(0, 0); g.lineTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.closePath(); g.fill(); }
      g.strokeStyle = 'rgba(90,60,40,.4)'; g.lineWidth = 1; g.beginPath(); g.moveTo(P[0][0], P[0][1]); g.lineTo(P[2][0], P[2][1]); g.moveTo(P[3][0], P[3][1]); g.lineTo(P[1][0], P[1][1]); g.stroke();
      g.fillStyle = 'rgba(255,255,255,.35)'; g.beginPath(); g.moveTo(0, -1.25 * s); g.lineTo(-.85 * s, 0); g.lineTo(0, 0); g.closePath(); g.fill();
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
    function drawTuft(b: any) {
      const r = (10 + b.z * 16); g.save(); g.translate(b.x, b.y); g.rotate(b.rot); g.globalAlpha = .55 + .45 * b.z;
      g.drawImage(tuftSprite, -r, -r, r * 2, r * 2); g.restore();
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
    function drawCrane(b: any) {
      const s = 12.5 * b.z, f = Math.sin(b.ph), facing = Math.cos(b.a) < 0 ? -1 : 1;
      g.save(); g.translate(b.x, b.y); g.scale(facing, 1); g.rotate(Math.sin(b.a) * .4 * facing); g.globalAlpha = Math.min(1, .7 + .3 * b.z);
      g.strokeStyle = 'rgba(70,50,140,.28)'; g.lineWidth = .9; g.lineJoin = 'round';
      g.fillStyle = b.c[1]; g.beginPath(); g.moveTo(-.2 * s, 0); g.lineTo(.6 * s, 0); g.lineTo(-.4 * s, -2.4 * s * f - .2 * s); g.closePath(); g.fill();
      g.fillStyle = b.c[0];
      g.beginPath(); g.moveTo(-1.1 * s, .1 * s); g.lineTo(0, .7 * s); g.lineTo(1.1 * s, .1 * s); g.lineTo(0, -.2 * s); g.closePath(); g.fill(); g.stroke();
      g.beginPath(); g.moveTo(-.6 * s, .25 * s); g.lineTo(-2.2 * s, -.7 * s); g.lineTo(-.9 * s, .05 * s); g.closePath(); g.fill();
      g.beginPath(); g.moveTo(.6 * s, .25 * s); g.lineTo(2.1 * s, -.8 * s); g.lineTo(2.5 * s, -.55 * s); g.lineTo(2.05 * s, -.6 * s); g.lineTo(.9 * s, .05 * s); g.closePath(); g.fill();
      g.fillStyle = b.c[0]; g.beginPath(); g.moveTo(-.4 * s, .05 * s); g.lineTo(.5 * s, .05 * s); g.lineTo(.1 * s, -2.8 * s * f); g.closePath(); g.fill(); g.stroke();
      g.strokeStyle = 'rgba(160,90,60,.35)'; g.lineWidth = .7; g.beginPath(); g.moveTo(-.4 * s, .05 * s); g.lineTo(.1 * s, -2.8 * s * f); g.stroke();
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
