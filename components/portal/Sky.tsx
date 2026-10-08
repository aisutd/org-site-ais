import { useEffect, useRef } from 'react';
import { registerSky, getFlowRunning, prefersReducedMotion, isScrollReactive, Mood } from '../../lib/portal/bus';

/**
 * THE PORTAL SKY (WebGL) — ported from ais-site/index.html.
 * A dusk sky in AIS blue → violet → peach with a glowing portal of light. Light rays stream
 * out of it, two layers of clouds drift past and are lit by it, and scrolling flies you in:
 * the portal grows and the sky brightens into soft pastel behind the content.
 *
 * Each page is a different time of day in the same sky (see MOODS below). Pages set their
 * mood by calling setMood()/setMoodMix() from lib/portal/bus, which this component registers
 * on mount — the prototype did this via a `window.setMood` global; same idea, no global.
 */
export default function Sky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = prefersReducedMotion();
    const gl = canvas.getContext('webgl', { antialias: false });
    if (!gl) return;

    const vert = `attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }`;
    const frag = `precision highp float;
    uniform vec2 uRes; uniform float uTime; uniform float uScroll; uniform vec2 uMouse;
    uniform vec3 uTop, uMid, uLow, uSun, uP, uAfter; uniform float uRing, uStars, uRays, uCloud;
    float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
    float noise(vec2 p){ vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
      return mix(mix(hash(i),hash(i+vec2(1,0)),u.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x), u.y); }
    float fbm(vec2 p){ float v=0., a=.5; mat2 m=mat2(.8,.6,-.6,.8); for(int i=0;i<6;i++){ v+=a*noise(p); p=m*p*2.03; a*=.5; } return v; }
    void main(){
      vec2 p = (gl_FragCoord.xy - .5*uRes)/uRes.y;
      float t = uTime, sp = uScroll;
      float asp = uRes.x/uRes.y;

      // sky: deep AIS blue up top, violet, then a peach horizon
      vec3 deep=uTop, violet=uMid, peach=uLow, blue=vec3(.23,.36,1.), cream=vec3(1.,.97,.93);
      vec3 col = mix(peach, violet, smoothstep(-.55,.05,p.y));
      col = mix(col, deep, smoothstep(.05,.62,p.y));

      // stars (twilight + night): a twinkling grid of points, drifting slowly with scroll
      if (uStars > .01){
        for (int L=0; L<2; L++){ float sc = L==0 ? 70. : 140.;
          vec2 q = (p + vec2(0., sp*(.06 + .05*float(L))))*sc; vec2 id = floor(q), f = fract(q) - .5;
          float h = hash(id + float(L)*13.1); vec2 o = vec2(hash(id+3.1), hash(id+7.7)) - .5;
          float dd = length(f - o*.6), tw = .55 + .45*sin(t*(1.5 + h*3.) + h*40.);
          float st = smoothstep(.1 - .03*float(L), 0., dd) * step(.9 - .04*float(L) - .12*uStars, h) * tw;
          col += vec3(.92,.94,1.) * st * uStars * smoothstep(-.35, .25, p.y) * (L==0 ? 1. : .6); } }

      // the portal: flying in = zooming toward it
      vec2 c = uP.xy;   // the sun stays put
      float zoom = 1. + min(sp, 1.2)*1.6;
      vec2 pp = (p - c)/zoom;
      float d = length(pp), a = atan(pp.y, pp.x);
      float R = uP.z + sin(t*.6)*.006;
      float swirl = fbm(vec2(a*1.6 + t*.25, d*6. - t*.7));
      float halo = .022/(abs(d-R)+.025);
      float rays = pow(fbm(vec2(a*5.5 + sin(t*.1)*.4, t*.12)), 2.6) * exp(-max(d-R,0.)*2.4) * smoothstep(R*.85, R*1.5, d);
      vec3 inside = mix(cream, mix(uSun, vec3(1.,.82,.92), swirl*.6), smoothstep(0., R, d)*.8);
      inside += blue * smoothstep(.55,.8,swirl) * .18;
      col += halo * mix(vec3(.75,.65,1.), uSun, .6) * (.25 + .3*uRing);
      col += rays * mix(vec3(1.,.86,.8), uSun, .4) * 1.6 * uRays;
      col = mix(col, inside, smoothstep(R, R*.86, d));
      float ring = exp(-pow((d-R)/(.010 + .008*swirl), 2.));
      col += ring * vec3(1.,.97,1.) * .9 * uRing;

      // clouds, lit by the portal; denser low and out in the margins
      float light = exp(-length(p-c)*2.1);
      float side = smoothstep(.32, .78, abs(p.x)/(asp*.5));
      vec2 cp = p*vec2(1.,1.9) + vec2(t*.018, sp*.55);
      float cd = fbm(cp*2.1 + fbm(cp*3.2 + t*.04)*.7);
      float mask = clamp(smoothstep(.15,-.45,p.y) + side*.75 + sp*.35, 0., 1.);
      float dens = smoothstep(.44,.74, cd*(.55 + .75*mask));
      vec3 shadow = mix(violet*.84, mix(violet, vec3(1.), .12), smoothstep(-.4,.3,p.y));
      vec3 lit = mix(shadow, mix(uSun, vec3(1.), .45), uCloud);
      vec3 cloud = mix(shadow, lit, clamp(cd*1.4 - .35 + light*.9, 0., 1.));
      col = mix(col, cloud, dens*.9);

      // nearer, faster layer for depth
      vec2 cp2 = p*vec2(.75,1.5) + vec2(-t*.03, sp*1.15);
      float cd2 = fbm(cp2*1.6 + vec2(3.1,7.7) + fbm(cp2*2.4 - t*.05)*.6);
      float mask2 = clamp(smoothstep(-.05,-.5,p.y) + side*.6 + sp*.25, 0., 1.);
      float dens2 = smoothstep(.5,.78, cd2*(.5 + .8*mask2));
      vec3 cloud2 = mix(mix(violet, vec3(1.), .1*uCloud), mix(mix(violet, vec3(1.), .1), mix(uSun, vec3(1.), .65), uCloud), clamp(cd2*1.3 - .2 + light*.7, 0., 1.));
      col = mix(col, cloud2, dens2*.85);

      // past the hero the whole scene brightens into a soft pastel so the team panels read clearly
      float after = smoothstep(.55, 1.5, sp);
      col = mix(col, mix(col, uAfter, .62), after);
      // gentle vignette
      col *= 1. - .08*smoothstep(.55, 1.15, length(p*vec2(.85,1.)));
      // fine grain dither: breaks up the 8-bit banding lines in the soft gradients
      col += (hash(gl_FragCoord.xy + fract(t*7.)*91.) - .5) / 140.;
      gl_FragColor = vec4(col, 1.);
    }`;

    const sh = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn(gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    };
    const vs = sh(gl.VERTEX_SHADER, vert);
    const fs = sh(gl.FRAGMENT_SHADER, frag);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const U = (n: string) => gl.getUniformLocation(prog, n);
    const uRes = U('uRes'), uTime = U('uTime'), uScroll = U('uScroll'), uMouse = U('uMouse');
    const uTop = U('uTop'), uMid = U('uMid'), uLow = U('uLow'), uSun = U('uSun'), uP = U('uP'),
      uRing = U('uRing'), uAfter = U('uAfter'), uStars = U('uStars'), uRays = U('uRays'), uCloud = U('uCloud');

    // each page is a different time of day in the same sky
    type MoodDef = { top: number[]; mid: number[]; low: number[]; sun: number[]; p: number[]; ring: number; after: number[]; stars: number; rays: number; cloud: number };
    const MOODS: Record<Mood, MoodDef> = {
      academy: { top: [.50, .52, .92], mid: [1., .70, .78], low: [1., .80, .50], sun: [1., .84, .52], p: [-.55, -.30, .17], ring: .15, after: [1., .95, .9], stars: .12, rays: 1.3, cloud: 1 },   // dawn
      team: { top: [.56, .62, 1.], mid: [.80, .72, 1.], low: [1., .70, .56], sun: [1., .70, .56], p: [0., .10, .19], ring: 1, after: [.97, .93, .98], stars: 0, rays: 1, cloud: 1 },         // morning + portal
      programs: { top: [.40, .62, 1.], mid: [.72, .84, 1.], low: [1., .93, .86], sun: [1., .96, .88], p: [.55, .30, .085], ring: .3, after: [.95, .97, 1.], stars: 0, rays: 1, cloud: 1 },        // noon
      hackai: { top: [.12, .11, .40], mid: [.55, .29, .80], low: [1., .50, .40], sun: [1., .58, .40], p: [.46, -.06, .16], ring: .2, after: [.97, .93, .98], stars: .15, rays: 1, cloud: 1 },    // sunset
      events: { top: [.42, .52, .95], mid: [1., .78, .62], low: [1., .66, .38], sun: [1., .76, .40], p: [.48, .06, .15], ring: .2, after: [1., .95, .88], stars: 0, rays: 1.4, cloud: 1 },   // golden afternoon
      lab: { top: [.06, .06, .22], mid: [.26, .18, .54], low: [.95, .48, .50], sun: [1., .60, .52], p: [-.25, -.52, .16], ring: 0, after: [.10, .09, .27], stars: .6, rays: .55, cloud: .5 }, // twilight
      aim: { top: [.02, .03, .11], mid: [.06, .08, .25], low: [.18, .16, .42], sun: [.88, .92, 1.], p: [.52, .30, .06], ring: 0, after: [.05, .06, .17], stars: 1, rays: .12, cloud: .32 },  // night + moon
    };
    const cur: any = JSON.parse(JSON.stringify(MOODS.team));
    let tgt: any = MOODS.team;

    const setMoodMix = (a: Mood, b: Mood, f: number, sunXY?: [number, number]) => {
      const A = MOODS[a] || MOODS.team, B = MOODS[b] || A, m: any = {};
      for (const k in A) {
        const Av = (A as any)[k], Bv = (B as any)[k];
        m[k] = Array.isArray(Av) ? Av.map((v: number, i: number) => v + (Bv[i] - v) * f) : Av + (Bv - Av) * f;
      }
      if (sunXY) m.p = [sunXY[0], sunXY[1], m.p[2]];
      tgt = m;
      if (reduce) Object.keys(cur).forEach((k) => (cur[k] = JSON.parse(JSON.stringify(tgt[k]))));
    };
    const setMood = (name: Mood, instant?: boolean) => {
      tgt = MOODS[name] || MOODS.team;
      if (instant || reduce) Object.keys(cur).forEach((k) => (cur[k] = JSON.parse(JSON.stringify(tgt[k]))));
    };
    registerSky({ setMood, setMoodMix });

    const lerpMood = (f: number) => {
      for (const k in cur) {
        if (Array.isArray(cur[k])) cur[k] = cur[k].map((v: number, i: number) => v + (tgt[k][i] - v) * f);
        else cur[k] += (tgt[k] - cur[k]) * f;
      }
    };

    let raf = 0;
    const resize = () => {
      const d = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(innerWidth * d);
      canvas.height = Math.round(innerHeight * d);
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (reduce) draw(performance.now());
    };
    const target = { x: .5, y: .5 }, mouse = { x: .5, y: .5 };
    const onPointerMove = (e: PointerEvent) => { target.x = e.clientX / innerWidth; target.y = 1 - e.clientY / innerHeight; };
    let time = 6, last = performance.now(), sp = scrollY / innerHeight, lastY = scrollY, boost = 0;
    function draw(now: number) {
      const raw = (now - last) / 1000, dt = Math.min(raw, .05);
      last = now;
      const dy = scrollY - lastY;
      lastY = scrollY;
      boost = boost * .9 + Math.min(Math.abs(dy), 60) * .012;
      if (getFlowRunning()) time += dt * (1 + boost);
      const spTarget = isScrollReactive() ? scrollY / innerHeight : 0;
      sp += (spTarget - sp) * (reduce ? 1 : .08);
      mouse.x += (target.x - mouse.x) * .05;
      mouse.y += (target.y - mouse.y) * .05;
      lerpMood(1 - Math.exp(-Math.min(raw, .5) * 2.6));
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, time);
      gl.uniform1f(uScroll, sp);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform3fv(uTop, cur.top); gl.uniform3fv(uMid, cur.mid); gl.uniform3fv(uLow, cur.low);
      gl.uniform3fv(uSun, cur.sun); gl.uniform3fv(uP, cur.p); gl.uniform1f(uRing, cur.ring);
      gl.uniform3fv(uAfter, cur.after); gl.uniform1f(uStars, cur.stars); gl.uniform1f(uRays, cur.rays); gl.uniform1f(uCloud, cur.cloud);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    resize();
    addEventListener('resize', resize);
    addEventListener('pointermove', onPointerMove);
    let onScroll: (() => void) | null = null;
    if (reduce) {
      onScroll = () => draw(performance.now());
      addEventListener('scroll', onScroll, { passive: true });
      draw(performance.now());
    } else {
      const loop = (now: number) => { draw(now); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('resize', resize);
      removeEventListener('pointermove', onPointerMove);
      if (onScroll) removeEventListener('scroll', onScroll);
      registerSky(null as any);
    };
  }, []);

  return <canvas id="sky" ref={canvasRef} aria-hidden="true" />;
}
