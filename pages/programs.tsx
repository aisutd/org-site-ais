import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, type RefObject } from 'react';
import { setMood, setCritters, getFlowRunning, prefersReducedMotion } from '../lib/portal/bus';

/**
 * The wild, free "pipe" that loops, swoops into the margins and wiggles on its own, drawing
 * itself as you scroll down through Build → Grow → Launch. Ported from journey() in
 * ais-site/index.html — a continuous curve (sway + rolling loops) so it never kinks.
 */
function useJourneyPipe(sectionRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    const reduce = prefersReducedMotion();
    let cancelled = false;
    let cleanupFns: Array<() => void> = [];

    (async () => {
      const gsapMod = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (cancelled) return;
      const gsap = gsapMod.default;
      gsap.registerPlugin(ScrollTrigger);

      const paths = Array.from(sec.querySelectorAll<SVGPathElement>('.jp'));
      const stages = Array.from(sec.querySelectorAll<HTMLElement>('.stage'));
      const gradient = sec.querySelector('#jg');
      let W = 0, H = 0, L = 1, tt = 0;
      const prog = { v: reduce ? 1 : 0 };

      const layout = () => {
        const r = sec.getBoundingClientRect();
        W = r.width; H = r.height;
        gradient?.setAttribute('y2', String(H + 200));
      };
      const render = () => {
        const y0 = -150, y1 = H - 60, N = 760, pts: [number, number][] = [];
        const loops = W < 600 ? 10 : 15;
        for (let i = 0; i <= N; i++) {
          const s = i / N, y = y0 + (y1 - y0) * s;
          const sway = Math.sin(s * Math.PI * 3.05 + .25 + Math.sin(tt * .4) * .08);
          const cx = W * .5 - sway * W * .42;
          const r = (34 + 40 * (.5 + .5 * Math.sin(s * 6.1 + 1.2))) * (W < 600 ? .6 : 1);
          const a = s * loops * Math.PI * 2 + tt * .5;
          pts.push([cx + Math.cos(a) * r, y + Math.sin(a) * r * 1.05]);
        }
        let d = 'M' + pts[0][0].toFixed(1) + ',' + pts[0][1].toFixed(1);
        for (let i = 1; i < pts.length; i++) d += 'L' + pts[i][0].toFixed(1) + ',' + pts[i][1].toFixed(1);
        paths.forEach((p) => p.setAttribute('d', d));
        // recomputing getTotalLength() every frame is expensive and was the main source of jitter;
        // the path's length barely changes between wiggle frames, so refresh it only occasionally
        if (++lengthFrame % 6 === 0 || L === 1) L = paths[1]?.getTotalLength() || L;
        paths.forEach((p) => {
          p.style.strokeDasharray = `${L} ${L}`;
          p.style.strokeDashoffset = String(L * (1 - prog.v));
        });
      };
      let lengthFrame = 0;

      layout();
      render();
      const onResize = () => { layout(); render(); };
      addEventListener('resize', onResize);
      cleanupFns.push(() => removeEventListener('resize', onResize));

      const tween = gsap.to(prog, { v: 1, ease: 'none', onUpdate: render, scrollTrigger: { trigger: sec, start: 'top 85%', end: 'bottom 70%', scrub: 1 } });
      cleanupFns.push(() => tween.scrollTrigger?.kill());
      cleanupFns.push(() => tween.kill());

      // driven by gsap's ticker (real elapsed time) rather than a fixed per-frame step, so the
      // wiggle speed stays consistent instead of racing/stuttering on high-refresh-rate displays
      const wiggle = (_time: number, deltaMs: number) => {
        if (sec.offsetParent && getFlowRunning()) { tt += deltaMs / 1000; render(); }
      };
      gsap.ticker.add(wiggle);
      cleanupFns.push(() => gsap.ticker.remove(wiggle));

      // the stages themselves rise in as they near the pipe
      stages.forEach((st) => {
        const t = gsap.from(st, { opacity: 0, y: 50, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: st, start: 'top 90%', once: true } });
        cleanupFns.push(() => t.scrollTrigger?.kill());
      });
    })();

    return () => {
      cancelled = true;
      cleanupFns.forEach((fn) => fn());
    };
  }, [sectionRef]);
}

/** Programs overview — ported from ais-site/index.html: Build → Grow → Launch. */
export default function ProgramsPage() {
  const journeyRef = useRef<HTMLElement>(null);
  useJourneyPipe(journeyRef);

  useEffect(() => {
    setMood('programs', true);
    setCritters('programs');
  }, []);

  return (
    <div className="view" data-view="programs">
      <Head>
        <title>Programs &ndash; AIS</title>
        <meta name="description" content="Three programs that take you from your first model to a real, shipped AI project." />
      </Head>

      <header className="hero pg-hero col">
        <div className="eyebrow">
          Artificial Intelligence Society<small>Programs</small>
        </div>
        <h1 className="pg-title">
          <span className="ln">
            <i>1</i>
            <span className="w">BUILD.</span>
          </span>
          <span className="ln">
            <i>2</i>
            <span className="w">GROW.</span>
          </span>
          <span className="ln">
            <i>3</i>
            <span className="w">LAUNCH IN AI.</span>
          </span>
        </h1>
        <p className="sub">Three programs that take you from your first model to a real, shipped AI project.</p>
      </header>

      <div className="stack">
        <section className="col journey bare" ref={journeyRef}>
          <svg className="jsvg" aria-hidden="true">
            <defs>
              <linearGradient id="jg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="1200">
                <stop offset="0" stopColor="#3b5bff" />
                <stop offset=".5" stopColor="#9a7cff" />
                <stop offset="1" stopColor="#f2a07f" />
              </linearGradient>
            </defs>
            <path className="jp edge" fill="none" stroke="#2a3fd0" strokeOpacity={0.3} strokeWidth={22} strokeLinecap="round" strokeLinejoin="round" />
            <path className="jp body" fill="none" stroke="url(#jg)" strokeWidth={15} strokeLinecap="round" strokeLinejoin="round" />
            <path className="jp hi" fill="none" stroke="#fff" strokeOpacity={0.6} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" transform="translate(-2,-4)" />
          </svg>
          <article className="stage s-notebook">
            <span className="tape" aria-hidden="true" />
            <span className="step">
              <i>1</i>Build
            </span>
            <h3>AI Academy</h3>
            <p>
              AI Academy is where members build their foundation in artificial intelligence. Through structured workshops, technical
              sessions, and guided learning paths, students develop core knowledge in machine learning, data science, and modern AI tools.
            </p>
            <Link className="textlink" href="/academy">
              Explore AI Academy →
            </Link>
          </article>
          <article className="stage s-bubble">
            <span className="step">
              <i>2</i>Grow
            </span>
            <h3>AIM</h3>
            <p>
              AIM connects members with mentors who guide their growth beyond the fundamentals. Through structured mentorship, project
              feedback, and career guidance, students refine their skills and gain direction.
            </p>
            <div className="duo" aria-hidden="true">
              <span>Mentor</span>
              <span className="typing">
                <i />
                <i />
                <i />
              </span>
              <span>You</span>
            </div>
            <Link className="textlink" href="/aim">
              Explore AIM →
            </Link>
          </article>
          <article className="stage s-terminal">
            <div className="term-bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>innovation-lab — zsh</span>
            </div>
            <div className="term-body">
              <span className="step">
                <i>3</i>Launch
              </span>
              <h3>Innovation Lab</h3>
              <p>Innovation Lab is where ideas become real systems. Members collaborate in teams to design, build, and deploy full-scale AI projects that solve meaningful problems.</p>
              <code className="cmd" aria-hidden="true">
                $ ship --idea "yours" --to prod<b>▌</b>
              </code>
              <Link className="textlink" href="/lab">
                Explore Innovation Lab →
              </Link>
            </div>
          </article>
        </section>

        <section className="col">
          <div className="sec-head" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2 className="h2">APPLICATIONS</h2>
            </div>
          </div>
          <div className="apply">
            <a className="apcard" href="https://www.aisutd.org/aim/apply" target="_blank" rel="noreferrer">
              <div className="ap-art" aria-hidden="true">
                <svg viewBox="0 0 64 64">
                  <path d="M32 54V30" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" />
                  <path d="M32 34c0-10 7-16 18-16 0 11-7 17-18 16Z" fill="currentColor" opacity={0.9} />
                  <path d="M32 40c0-9-6-14-16-14 0 10 6 15 16 14Z" fill="currentColor" opacity={0.55} />
                </svg>
              </div>
              <span className="tag">Join a program</span>
              <h3>AI Mentee</h3>
              <p>Apply as a mentee and get a chance to learn foundational concepts in ML and work on AI projects of your interest, guided by experienced mentors.</p>
              <span className="ap-go">
                Apply <i>→</i>
              </span>
            </a>
            <a className="apcard" href="https://www.aisutd.org/officer/apply" target="_blank" rel="noreferrer">
              <div className="ap-art" aria-hidden="true">
                <svg viewBox="0 0 64 64">
                  <path d="M32 10l6.2 13.6L53 25l-11 10 3 15-13-7.6L19 50l3-15-11-10 14.8-1.4z" fill="currentColor" opacity={0.9} />
                </svg>
              </div>
              <span className="tag">Join the team</span>
              <h3>AIS Officer</h3>
              <p>Apply to the team and get an opportunity to organize events, be a part of our officer community, and more.</p>
              <span className="ap-go">
                Apply <i>→</i>
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
