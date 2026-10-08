/**
 * The prototype (ais-site/index.html) wires Sky, SkyCreatures and every page
 * together through window.setMood / window.setMoodMix / window.setCritters
 * globals, since it's one script on one page. Here each lives in its own
 * component, so this module is the same wiring without the `window` globals:
 * Sky/SkyCreatures register their imperative API on mount, and pages call it.
 */

export type Mood = 'academy' | 'team' | 'programs' | 'hackai' | 'events' | 'lab' | 'aim';
export type Critter = 'planes' | 'lanterns' | 'seeds' | 'cranes' | 'stars' | 'flies' | 'kites';

interface SkyApi {
  setMood: (name: Mood, instant?: boolean) => void;
  setMoodMix: (a: Mood, b: Mood, f: number, sunXY?: [number, number]) => void;
}
interface CreaturesApi {
  setCritters: (page: Mood) => void;
}

let sky: SkyApi | null = null;
let creatures: CreaturesApi | null = null;

export function registerSky(api: SkyApi) {
  sky = api;
}
export function registerCreatures(api: CreaturesApi) {
  creatures = api;
}

export function setMood(name: Mood, instant?: boolean) {
  sky?.setMood(name, instant);
}
export function setMoodMix(a: Mood, b: Mood, f: number, sunXY?: [number, number]) {
  sky?.setMoodMix(a, b, f, sunXY);
}
export function setCritters(page: Mood) {
  creatures?.setCritters(page);
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Shared "Pause motion" state — read every frame by Sky/SkyCreatures, written by MotionToggle. */
let flowRunning = true;
const flowListeners = new Set<(running: boolean) => void>();

export function initFlowRunning() {
  flowRunning = !prefersReducedMotion();
  return flowRunning;
}
export function getFlowRunning() {
  return flowRunning;
}
export function setFlowRunning(v: boolean) {
  flowRunning = v;
  flowListeners.forEach((l) => l(v));
}
export function onFlowChange(fn: (running: boolean) => void) {
  flowListeners.add(fn);
  return () => flowListeners.delete(fn);
}

/**
 * Only Home changes time of day (and zooms/brightens the portal) as you scroll — every other
 * page's sky stays put at its own fixed mood. Home turns this on while mounted, off on unmount.
 */
let scrollReactive = false;
export function setScrollReactive(v: boolean) {
  scrollReactive = v;
}
export function isScrollReactive() {
  return scrollReactive;
}
