import { useEffect, type RefObject } from 'react';
import { prefersReducedMotion } from './bus';

/**
 * Counts up every [data-count] number inside the given container from 0 to its target once,
 * as it scrolls into view. Ported from countUp() in ais-site/index.html.
 */
export function useCountUp(containerRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const reduce = prefersReducedMotion();
    const els = Array.from(root.querySelectorAll<HTMLElement>('[data-count]'));
    if (!els.length) return;

    if (reduce) {
      els.forEach((el) => { el.textContent = el.dataset.count || '0'; });
      return;
    }

    let cancelled = false;
    const cleanupFns: Array<() => void> = [];
    (async () => {
      const gsapMod = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (cancelled) return;
      const gsap = gsapMod.default;
      gsap.registerPlugin(ScrollTrigger);

      els.forEach((el) => {
        const n = +(el.dataset.count || '0');
        const o = { v: 0 };
        const tween = gsap.to(o, {
          v: n,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => { el.textContent = String(Math.round(o.v)); },
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
        cleanupFns.push(() => tween.scrollTrigger?.kill());
        cleanupFns.push(() => tween.kill());
      });
    })();

    return () => {
      cancelled = true;
      cleanupFns.forEach((fn) => fn());
    };
  }, [containerRef]);
}
