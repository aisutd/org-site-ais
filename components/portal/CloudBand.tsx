import { useEffect, useRef } from 'react';

type Tone = 'night' | 'twilight' | 'dawn';

interface CloudBandProps {
  seed: number;
  tone?: Tone;
  position?: 'top' | 'bottom';
}

/**
 * The soft hand-drawn cloud strip under each hero, ported from ais-site/index.html's
 * paintBand(). Hundreds of soft puffs, shaded lavender underneath and lit peach/white on
 * top, so the hero dissolves into the section below through fog. `tone` recolors it for
 * night/twilight/dawn pages; omitted it uses the default purple-to-peach-to-white look.
 */
export default function CloudBand({ seed, tone, position = 'top' }: CloudBandProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;

    const paint = () => {
      if (!cv.clientWidth) return;
      const dpr = Math.min(devicePixelRatio || 1, 2), w = cv.clientWidth, h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      const g = cv.getContext('2d');
      if (!g) return;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.clearRect(0, 0, w, h);
      let s = seed;
      const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
      const puff = (x: number, y: number, r: number, inner: string, outer: string) => {
        const gr = g.createRadialGradient(x, y - r * .2, 0, x, y, r);
        gr.addColorStop(0, inner); gr.addColorStop(.55, outer); gr.addColorStop(1, 'rgba(255,255,255,0)');
        g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
      };
      const TONES: Record<Tone, [string, string][]> = {
        night: [['rgba(30,36,100,.7)', 'rgba(20,26,80,.3)'], ['rgba(46,50,128,.5)', 'rgba(40,44,120,.22)'], ['rgba(90,100,180,.32)', 'rgba(80,90,170,.14)']],
        twilight: [['rgba(60,40,140,.65)', 'rgba(50,30,120,.28)'], ['rgba(120,70,160,.45)', 'rgba(110,60,150,.2)'], ['rgba(220,150,190,.3)', 'rgba(200,130,180,.12)']],
        dawn: [['rgba(255,170,190,.55)', 'rgba(250,160,180,.25)'], ['rgba(255,214,160,.75)', 'rgba(255,200,150,.3)'], ['rgba(255,255,250,.95)', 'rgba(255,250,240,.45)']],
      };
      const tn = tone ? TONES[tone] : null;
      const layers = tn
        ? [
            { n: 70, yc: .58, spread: .16, r: [60, 150] as [number, number], inner: tn[0][0], outer: tn[0][1] },
            { n: 90, yc: .5, spread: .14, r: [50, 130] as [number, number], inner: tn[1][0], outer: tn[1][1] },
            { n: 110, yc: .46, spread: .12, r: [30, 100] as [number, number], inner: tn[2][0], outer: tn[2][1] },
          ]
        : [
            { n: 70, yc: .58, spread: .16, r: [60, 150] as [number, number], inner: 'rgba(176,156,255,.55)', outer: 'rgba(150,130,240,.25)' },
            { n: 90, yc: .5, spread: .14, r: [50, 130] as [number, number], inner: 'rgba(255,214,196,.75)', outer: 'rgba(255,200,190,.3)' },
            { n: 110, yc: .46, spread: .12, r: [30, 100] as [number, number], inner: 'rgba(255,255,255,.95)', outer: 'rgba(255,250,252,.45)' },
          ];
      g.globalCompositeOperation = 'source-over';
      layers.forEach((L) => {
        for (let i = 0; i < L.n; i++) {
          const x = rnd() * w * 1.1 - w * .05, wav = Math.sin(x / w * Math.PI * 3 + seed % 7) * h * .06;
          const y = h * L.yc + wav + (rnd() - .5) * h * L.spread * 2, r = L.r[0] + rnd() * (L.r[1] - L.r[0]);
          puff(x, y, r, L.inner, L.outer);
        }
      });
      const fade = g.createLinearGradient(0, 0, 0, h);
      fade.addColorStop(0, 'rgba(0,0,0,0)'); fade.addColorStop(.3, '#000'); fade.addColorStop(.72, '#000'); fade.addColorStop(1, 'rgba(0,0,0,0)');
      g.globalCompositeOperation = 'destination-in'; g.fillStyle = fade; g.fillRect(0, 0, w, h); g.globalCompositeOperation = 'source-over';
    };

    paint();
    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => { clearTimeout(rt); rt = setTimeout(paint, 150); };
    addEventListener('resize', onResize);
    return () => { clearTimeout(rt); removeEventListener('resize', onResize); };
  }, [seed, tone]);

  return (
    <div className={`band ${position}`} aria-hidden="true">
      <canvas ref={ref} />
    </div>
  );
}
