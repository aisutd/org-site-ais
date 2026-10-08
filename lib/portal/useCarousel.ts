import { useEffect, type RefObject } from 'react';
import { prefersReducedMotion } from './bus';

/**
 * Wires up prev/next buttons, dots and (for `.gallery` carousels) centre-focus scaling and a
 * centred starting scroll position. Ported from carousel() in ais-site/index.html.
 */
export function useCarousel(rootRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = prefersReducedMotion();
    const track = root.querySelector<HTMLElement>('.ctrack');
    if (!track) return;
    const items = Array.from(track.children) as HTMLElement[];
    const prev = root.querySelector<HTMLButtonElement>('.prev');
    const next = root.querySelector<HTMLButtonElement>('.next');
    const dots = root.querySelector<HTMLElement>('.dots');
    const focus = root.classList.contains('gallery');
    if (dots) dots.innerHTML = items.map(() => '<span></span>').join('');

    const step = () => (items.find((i) => !i.hidden) || items[0])?.getBoundingClientRect().width + 16;
    const current = () => {
      const c = track.scrollLeft + track.clientWidth / 2;
      let best = 0, bd = Infinity;
      items.forEach((it, i) => {
        const d = Math.abs(it.offsetLeft + it.offsetWidth / 2 - c);
        if (d < bd) { bd = d; best = i; }
      });
      return best;
    };
    const update = () => {
      if (prev) prev.disabled = track.scrollLeft < 4;
      if (next) next.disabled = track.scrollLeft + track.clientWidth > track.scrollWidth - 4;
      if (focus) {
        const c = track.scrollLeft + track.clientWidth / 2;
        items.forEach((it) => {
          const d = Math.min(Math.abs(it.offsetLeft + it.offsetWidth / 2 - c) / track.clientWidth, 1);
          it.style.transform = `scale(${1 - d * .14})`;
          it.style.opacity = String(1 - d * .45);
        });
      }
      if (dots) {
        const k = current();
        Array.from(dots.children).forEach((d, i) => d.classList.toggle('on', i === k));
      }
    };
    const onPrev = () => track.scrollBy({ left: -step(), behavior: reduce ? 'auto' : 'smooth' });
    const onNext = () => track.scrollBy({ left: step(), behavior: reduce ? 'auto' : 'smooth' });
    prev?.addEventListener('click', onPrev);
    next?.addEventListener('click', onNext);
    const onScroll = () => requestAnimationFrame(update);
    track.addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', update);

    let raf = 0;
    if (focus && items[1]) {
      raf = requestAnimationFrame(() => {
        track.scrollLeft = items[1].offsetLeft + items[1].offsetWidth / 2 - track.clientWidth / 2;
        update();
      });
    } else {
      update();
    }

    return () => {
      prev?.removeEventListener('click', onPrev);
      next?.removeEventListener('click', onNext);
      track.removeEventListener('scroll', onScroll);
      removeEventListener('resize', update);
      cancelAnimationFrame(raf);
    };
  }, [rootRef]);
}
