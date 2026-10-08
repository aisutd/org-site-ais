import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { getAllEvents } from './api/events';
import { Event } from '../lib/types';
import { setMood, setMoodMix, setCritters, setScrollReactive, Mood } from '../lib/portal/bus';
import { useCountUp } from '../lib/portal/useCountUp';
import { FAKE_UPCOMING_EVENT } from '../lib/fakeEvent';

interface HomePageProps {
  events: Event[];
}

/** Where the sun sits in the sky at each time of day on Home — an arc across the sky. */
const HOME_SUN: Record<string, [number, number]> = {
  team: [0, .10],
  programs: [.24, .34],
  events: [.42, .2],
  hackai: [.55, -.08],
  lab: [.62, -.46],
  aim: [.5, .3],
};

/**
 * Home — ported from ais-site/index.html. The page is one day: each section is a time of
 * day, and the sky + sky creatures follow as you scroll (see useHomeSky below).
 */
export default function HomePage({ events }: HomePageProps) {
  useHomeSky();
  const statsRef = useRef<HTMLElement>(null);
  useCountUp(statsRef);

  const upcoming = events.length > 0
    ? events.slice().sort((a, b) => new Date(a.startDate).valueOf() - new Date(b.startDate).valueOf()).slice(0, 4)
    : [FAKE_UPCOMING_EVENT];

  return (
    <div className="view" data-view="home">
      <Head>
        <title>AIS &ndash; Artificial Intelligence Society</title>
        <meta
          name="description"
          content="Welcome to the Artificial Intelligence Society at UTD. We make AI understandable and accessible to everyone"
        />
      </Head>

      <header className="hero home-hero col stage-s" data-mood="team">
        <div className="hh-copy">
          <div className="eyebrow">
            Welcome to AIS<small>UT Dallas</small>
          </div>
          <h1 className="home-title">
            <span className="ln">
              <span className="w">ARTIFICIAL</span>
            </span>
            <span className="ln">
              <span className="w">INTELLIGENCE</span>
            </span>
            <span className="ln">
              <span className="w">SOCIETY</span>
            </span>
          </h1>
          <p className="sub home-sub">UTD's community for learning, building and growing with AI. No experience needed, just curiosity.</p>
          <div className="btnrow">
            <a className="btn" href="https://portal.aisutd.org" target="_blank" rel="noreferrer">
              Get involved →
            </a>
            <Link className="btn ghost" href="/programs">
              Explore our work
            </Link>
          </div>
        </div>
        <div className="members-card">
          <b>750+</b>
          <span>Active members</span>
        </div>
      </header>

      <div className="stack home-stack">
        <section className="stage-s" data-mood="programs">
          <div className="col sec-head">
            <div>
              <h2 className="h2">UPCOMING &amp; RECENT EVENTS</h2>
            </div>
            <div className="navbtns">
              <Link className="textlink" href="/events">
                View all →
              </Link>
            </div>
          </div>
          <div className="col ev-strip">
            {upcoming.length > 0 ? (
              upcoming.map((e) => (
                <Link key={e.id} className="evc" href={e.id === FAKE_UPCOMING_EVENT.id ? '/events' : `/events/${e.id}`}>
                  <small>{e.eventType}</small>
                  <b>{e.title}</b>
                  {e.image ? (
                    <img src={e.image} alt={e.title} className="ph" style={{ objectFit: 'cover' }} />
                  ) : (
                    <div className="ph">Event photo</div>
                  )}
                  <time>{e.startDate ? new Date(e.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'TBA'}</time>
                </Link>
              ))
            ) : (
              <p>Coming soon!</p>
            )}
          </div>
        </section>

        <section className="col stage-s" data-mood="events">
          <div className="panel mission">
            <div>
              <small className="kicker">Our mission</small>
              <h2 className="h2">DEMYSTIFY AI. FOR EVERYONE.</h2>
            </div>
            <div>
              <p>
                We believe artificial intelligence should be understandable and approachable — not intimidating. AIS breaks down the
                jargon so every student, regardless of background, can learn to build with AI.
              </p>
              <div className="chips">
                <span className="chip">Workshops</span>
                <span className="chip">Mentorship</span>
                <span className="chip">Community</span>
                <span className="chip">Real projects</span>
              </div>
            </div>
          </div>
        </section>

        <section className="col stage-s bare" data-mood="hackai">
          <div className="portal-card">
            <div>
              <small className="kicker light">Ready to get involved?</small>
              <h2>CREATE YOUR MEMBER ACCOUNT ON THE AIS PORTAL</h2>
              <p>Sign up on our member portal to RSVP for events, apply to AI Academy &amp; AIM, and track your involvement all in one place.</p>
            </div>
            <a className="btn light" href="https://portal.aisutd.org" target="_blank" rel="noreferrer">
              Go to member portal →
            </a>
          </div>
        </section>

        <section className="col stage-s" data-mood="lab" ref={statsRef}>
          <div className="panel">
            <div className="tg-head">
              <div>
                <small className="kicker">Our mission</small>
                <h2 className="h2">LEARN. BUILD. GROW. TOGETHER.</h2>
              </div>
              <p>AIS provides students with hands-on experience in artificial intelligence through workshops, mentorship, collaborative projects, and community-driven learning.</p>
            </div>
            <div className="tg-stats">
              <div>
                <b data-count="25">25</b>
                <sup>+</sup>
                <span>AI projects</span>
              </div>
              <div>
                <b data-count="40">40</b>
                <sup>+</sup>
                <span>Workshops hosted</span>
              </div>
              <div>
                <b data-count="12">12</b>
                <sup>+</sup>
                <span>Industry partners</span>
              </div>
            </div>
          </div>
        </section>

        <section className="col stage-s" data-mood="aim">
          <div className="sec-head" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2 className="h2">GO FROM ZERO TO HERO IN YOUR AI/ML JOURNEY</h2>
            </div>
          </div>
          <div className="zero">
            <Link className="zcard" href="/events">
              <div className="ph">ML Mondays workshop</div>
              <div className="zbody">
                <small>Start here · free</small>
                <b>ML Mondays</b>
                <p>AIS hosts an ML Mondays workshop series about once a month where students learn the basics of machine learning. Any student can attend these events absolutely free.</p>
              </div>
            </Link>
            <Link className="zcard" href="/aim">
              <div className="ph">AIM final presentations</div>
              <div className="zbody">
                <small>Then · 10 weeks</small>
                <b>AIM</b>
                <p>Our AIM program gives students hands-on experience building their first AI project over 10 weeks with a mentor. Apply as either a mentor or a mentee depending on your experience level.</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="col stage-s night-end bare" data-mood="aim">
          <small className="kicker light">The day's not over</small>
          <h2>THE SMARTEST THING YOU DO TONIGHT IS SHOW UP.</h2>
          <div className="btnrow" style={{ justifyContent: 'center' }}>
            <Link className="btn light" href="/events">
              See what's next
            </Link>
            <Link className="btn ghost light" href="/team">
              Meet the team
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

/** Scroll position blends the sky/creatures between neighboring moods; ported from setupHome() in ais-site/index.html. */
function useHomeSky() {
  useEffect(() => {
    document.body.classList.add('on-home');
    setScrollReactive(true);
    const ease = (x: number) => x * x * (3 - 2 * x);
    const update = () => {
      const stages = Array.from(document.querySelectorAll<HTMLElement>('.stage-s'));
      if (!stages.length) return;
      const mid = innerHeight * 0.5;
      const centers = stages.map((st) => {
        const r = st.getBoundingClientRect();
        return r.top + r.height * 0.5;
      });
      let i = 0, f = 0;
      if (scrollY < 40 || mid <= centers[0]) {
        i = 0; f = 0;
      } else if (mid >= centers[centers.length - 1]) {
        i = centers.length - 2; f = 1;
      } else {
        while (i < centers.length - 2 && mid > centers[i + 1]) i++;
        f = (mid - centers[i]) / (centers[i + 1] - centers[i]);
      }
      f = ease(Math.min(Math.max((f - .2) / .6, 0), 1));
      const a = (stages[i].dataset.mood || 'team') as Mood;
      const bm = (stages[i + 1]?.dataset.mood || a) as Mood;
      const now = f < .5 ? a : bm;
      const sa = HOME_SUN[a] || HOME_SUN.team, sb = HOME_SUN[bm] || sa;
      setMoodMix(a, bm, f, [sa[0] + (sb[0] - sa[0]) * f, sa[1] + (sb[1] - sa[1]) * f]);
      setCritters(now);
    };
    setMood('team', true);
    setMoodMix('team', 'team', 0, HOME_SUN.team);
    const onScroll = () => requestAnimationFrame(update);
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', update);
    update();
    return () => {
      document.body.classList.remove('on-home');
      setScrollReactive(false);
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', update);
    };
  }, []);
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
  };
}
