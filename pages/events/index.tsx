import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Event } from '../../lib/types';
import { getAllEvents } from '../api/events';
import { setMood, setCritters, prefersReducedMotion } from '../../lib/portal/bus';
import { FAKE_UPCOMING_EVENT, isFakeEvent } from '../../lib/fakeEvent';

/**
 * A paper plane flies across the title along the dotted contrail, leaving the trail revealed
 * behind it. Ported from flyPlane() in ais-site/index.html.
 */
function useFlyPlane(heroRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const svg = hero.querySelector<SVGSVGElement>('.contrail');
    const path = hero.querySelector<SVGPathElement>('.ct');
    const plane = hero.querySelector<HTMLElement>('.ev-plane');
    if (!svg || !path || !plane) return;
    const reduce = prefersReducedMotion();
    const L = path.getTotalLength();
    const trail = (f: number) => {
      const n = Math.ceil((f * L) / 12);
      path.style.strokeDasharray = n ? `${Array(n).fill('2 10').join(' ')} 0 ${L * 2}` : `0 ${L * 2}`;
    };
    if (reduce) {
      trail(1);
      return;
    }
    const place = (f: number) => {
      const p1 = path.getPointAtLength(f * L);
      const p2 = path.getPointAtLength(Math.min(f * L + 4, L));
      const m = svg.getScreenCTM();
      if (!m) return;
      const hr = hero.getBoundingClientRect();
      const a = svg.createSVGPoint(), b = svg.createSVGPoint();
      a.x = p1.x; a.y = p1.y; b.x = p2.x; b.y = p2.y;
      const A = a.matrixTransform(m), B = b.matrixTransform(m);
      const ang = (Math.atan2(B.y - A.y, B.x - A.x) * 180) / Math.PI + 20;
      plane.style.transform = `translate(${A.x - hr.left - 19}px, ${A.y - hr.top - 19}px) rotate(${ang}deg)`;
    };
    let cancelled = false;
    (async () => {
      const gsapMod = await import('gsap');
      if (cancelled) return;
      const gsap = gsapMod.default;
      trail(0);
      plane.style.opacity = '1';
      const o = { f: 0 };
      gsap.to(o, {
        f: 1,
        duration: 2.6,
        ease: 'power1.inOut',
        delay: 0.3,
        onUpdate() { place(o.f); trail(o.f); },
        onComplete() { gsap.to(plane, { opacity: 0, duration: 0.5 }); },
      });
    })();
    return () => { cancelled = true; };
  }, [heroRef]);
}

interface EventsPageProps {
  events: Event[];
  now: number;
}

function catOf(e: Event): 'workshops' | 'socials' | 'others' {
  if (e.eventType === 'Workshop') return 'workshops';
  if (e.eventType === 'Social') return 'socials';
  return 'others';
}

function fmt(date: string) {
  if (!date) return 'TBA';
  return new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}

/** Events — ported from ais-site/index.html. Upcoming events as boarding passes, past events as a filterable carousel. */
export default function EventsPage({ events, now }: EventsPageProps) {
  const heroRef = useRef<HTMLElement>(null);
  useFlyPlane(heroRef);

  useEffect(() => {
    setMood('events', true);
    setCritters('events');
  }, []);

  const [filter, setFilter] = useState<'all' | 'workshops' | 'socials' | 'others'>('all');

  const realUpcoming = events
    .filter((e) => !e.endDate || new Date(e.endDate).valueOf() >= now)
    .sort((a, b) => new Date(a.startDate).valueOf() - new Date(b.startDate).valueOf());
  const upcoming = realUpcoming.length > 0 ? realUpcoming : [FAKE_UPCOMING_EVENT];
  const past = events
    .filter((e) => e.endDate && new Date(e.endDate).valueOf() < now)
    .sort((a, b) => new Date(b.startDate).valueOf() - new Date(a.startDate).valueOf());
  const visiblePast = filter === 'all' ? past : past.filter((e) => catOf(e) === filter);

  return (
    <div className="view" data-view="events">
      <Head>
        <title>Events &ndash; AIS</title>
        <meta name="description" content="An overview of all our AI/ML events, workshops and socials." />
      </Head>

      <header className="hero ev-hero col" ref={heroRef}>
        <div className="eyebrow">
          AIS Events<small>Departures</small>
        </div>
        <svg className="contrail" viewBox="0 0 1000 300" preserveAspectRatio="none" aria-hidden="true">
          <path className="ct" d="M-40 250 C 120 270, 220 150, 340 175 S 520 290, 600 200 S 700 40, 820 80 S 960 120, 1060 30" />
        </svg>
        <svg className="ev-plane" viewBox="0 0 40 40" aria-hidden="true">
          <path d="M2 20 L38 6 L26 36 L19 24 Z" fill="#fff" />
          <path d="M19 24 L38 6 L15 22 Z" fill="#ffc9a8" />
          <path d="M15 22 L19 24 L17 31 Z" fill="#e98a6a" />
        </svg>
        <h1 className="ev-title">
          <span className="ln">
            <span className="w">DON'T MISS</span>
          </span>
          <span className="ln">
            <span className="w">OUR NEXT EVENT</span>
          </span>
        </h1>
        <p className="sub">Every event is a flight somewhere new. Grab a pass for what's coming up, or look back at where we've been.</p>
      </header>

      <div className="stack">
        <section className="col wide">
          <div className="sec-head">
            <div>
              <h2 className="h2">NEXT DEPARTURES</h2>
              <p>RSVP on the member portal to save your seat.</p>
            </div>
          </div>
          <div className="passes">
            {upcoming.length > 0 ? (
              upcoming.map((e, i) => (
                <article key={e.id} className={`pass${isFakeEvent(e) ? ' soon' : ''}`}>
                  <div className="pass-main">
                    <div className="pass-top">
                      <span>AIS · {e.eventType}</span>
                      {!isFakeEvent(e) && <span className="gate">Flight AIS-{String(i + 1).padStart(2, '0')}</span>}
                    </div>
                    <div className="pass-body">
                      {e.image ? <img src={e.image} alt={e.title} className="ph" style={{ objectFit: 'cover' }} /> : <div className="ph">Event photo</div>}
                      <div>
                        <h3>{e.title}</h3>
                        <p>{e.description}</p>
                        <dl>
                          <div>
                            <dt>Departs</dt>
                            <dd>{isFakeEvent(e) ? 'TBA' : fmt(e.startDate)}</dd>
                          </div>
                          <div>
                            <dt>Location</dt>
                            <dd>{e.location || 'TBA'}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <a className="pass-stub" href={e.rsvpLink || 'https://portal.aisutd.org'} target="_blank" rel="noreferrer">
                    <span className="bar" aria-hidden="true" />
                    <b>{isFakeEvent(e) ? 'Stay tuned' : 'RSVP'}</b>
                    <small>on the portal ↗</small>
                  </a>
                </article>
              ))
            ) : (
              <p className="ev-empty">Coming soon!</p>
            )}
          </div>
        </section>

        <section className="past">
          <div className="col sec-head">
            <div>
              <h2 className="h2">PAST EVENTS · LANDED</h2>
              <p>Explore our past events and learn about their impact.</p>
            </div>
          </div>
          <div className="col">
            <div className="evfilters" role="group" aria-label="Filter past events">
              {(['all', 'workshops', 'socials', 'others'] as const).map((f) => (
                <button key={f} className="pill" aria-pressed={filter === f} onClick={() => setFilter(f)}>
                  {f === 'all' ? 'View all' : f[0].toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="col carousel">
            <div className="ctrack">
              {visiblePast.map((e) => (
                <Link key={e.id} href={`/events/${e.id}`} className="landed">
                  <small>{e.eventType}</small>
                  <b>{e.title}</b>
                  <span className="stampmark">LANDED</span>
                  {e.image ? <img src={e.image} alt={e.title} className="ph" style={{ objectFit: 'cover' }} /> : <div className="ph">Event photo</div>}
                  <time>{fmt(e.startDate)}</time>
                  <p>{e.description}</p>
                </Link>
              ))}
            </div>
            {visiblePast.length === 0 && <p className="ev-empty">No events in this category yet.</p>}
          </div>
        </section>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents,
      now: Date.now(),
    },
  };
}
