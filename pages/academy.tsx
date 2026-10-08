import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { setMood, setCritters } from '../lib/portal/bus';

const WORKSHOP_PHOTOS = [
  '/images/Photos/ml-mon.png',
  '/images/Photos/collab-stock-image.png',
  '/images/Photos/laptop-stock-image.png',
  '/images/Photos/networking-stock-image.png',
];

const FLYERS = [
  {
    small: 'AI Academy · Module 1: Developer Tools',
    workshop: 'Workshop 1',
    topic: 'Effectively using VS Code',
    desc: 'Learn how to use VS Code like a professional!',
    when: ['Wednesday, February 4th', 'AD 2.232', '7:00 PM'],
    sticker: 'Great for HackAI prep!',
    soon: false,
  },
  { small: 'AI Academy · Module 1', workshop: 'Workshop 2', topic: 'Topic coming soon', desc: 'Add the next workshop here.', when: ['Date TBA', 'Room TBA'], soon: true },
  { small: 'AI Academy · Module 2', workshop: 'Workshop 3', topic: 'Topic coming soon', desc: 'Add the next workshop here.', when: ['Date TBA', 'Room TBA'], soon: true },
  { small: 'AI Academy · Module 2', workshop: 'Workshop 4', topic: 'Topic coming soon', desc: 'Add the next workshop here.', when: ['Date TBA', 'Room TBA'], soon: true },
];

/** AI Academy — ported from ais-site/index.html: dawn, varsity title, workshop flyers. */
export default function AcademyPage() {
  useEffect(() => {
    setMood('academy', true);
    setCritters('academy');
  }, []);

  return (
    <div className="view" data-view="academy">
      <Head>
        <title>AI Academy &ndash; AIS</title>
        <meta name="description" content="Weekly workshops to provide resources and teach you everything you need to know to start your first AI project." />
      </Head>

      <header className="hero ac-hero col">
        <div className="ac-copy">
          <div className="eyebrow">
            AIS Programs<small>Step 1 · Build</small>
          </div>
          <h1 className="varsity">
            <img src="/images/Logos/ai-academy-wordmark.png" alt="AI Academy" style={{ display: 'block', height: '1em', width: 'auto' }} />
          </h1>
          <p className="sub">Weekly workshops to provide resources and teach you everything you need to know to start your first AI project.</p>
          <div className="btnrow">
            <a className="btn" href="#flyers">
              See this semester's workshops
            </a>
            <Link className="btn ghost" href="/programs">
              All programs
            </Link>
          </div>
        </div>
        <div className="seal-wrap" aria-hidden="true">
          <img src="/images/Logos/ai-academy-seal.png" alt="" className="seal" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
      </header>

      <div className="stack">
        <section className="ac-photos bare" aria-label="AI Academy photos">
          <svg className="bunting" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 14 Q600 126 1200 14" fill="none" stroke="#18235f" strokeWidth={3} strokeOpacity={0.55} />
            {[
              { x: 26, y: 19.3, fill: '#ffcf3d', tfill: '#1f3fc7', ch: 'A', d: '0.00' },
              { x: 146, y: 28.3, fill: '#2f5bff', tfill: '#fff', ch: 'I', d: '-0.37' },
              { x: 266, y: 35.0, fill: '#fff8e6', tfill: '#2f5bff', ch: '✦', d: '-0.74' },
              { x: 386, y: 39.5, fill: '#8cc8ff', tfill: '#18235f', ch: 'A', d: '-1.11' },
              { x: 506, y: 41.7, fill: '#ffcf3d', tfill: '#1f3fc7', ch: 'C', d: '-1.48' },
              { x: 626, y: 41.7, fill: '#2f5bff', tfill: '#fff', ch: 'A', d: '-1.85' },
              { x: 746, y: 39.5, fill: '#fff8e6', tfill: '#2f5bff', ch: 'D', d: '-2.22' },
              { x: 866, y: 35.0, fill: '#8cc8ff', tfill: '#18235f', ch: 'E', d: '-2.59' },
              { x: 986, y: 28.3, fill: '#ffcf3d', tfill: '#1f3fc7', ch: 'M', d: '-2.96' },
              { x: 1106, y: 19.3, fill: '#2f5bff', tfill: '#fff', ch: 'Y', d: '-3.33' },
            ].map((p) => (
              <g key={p.x} className="pen" style={{ '--d': `${p.d}s` } as React.CSSProperties}>
                <path d={`M${p.x}.0 ${p.y} L${p.x + 68}.0 ${p.y} L${p.x + 34}.0 ${p.y + 78} Z`} fill={p.fill} />
                <text x={p.x + 34} y={p.y + 34} textAnchor="middle" fill={p.tfill}>
                  {p.ch}
                </text>
              </g>
            ))}
          </svg>
          <div className="marquee ac-photo-marquee">
            <div className="mtrack">
              {[...WORKSHOP_PHOTOS, ...WORKSHOP_PHOTOS].map((src, i) => (
                <figure key={src + i} className="ac-photo-shot">
                  <img src={src} alt="" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="ac-promise bare" aria-label="What it takes to join">
          <div className="ac-promise-row">
            {['No applications', 'No experience needed', 'No pressure'].map((t) => (
              <div key={t} className="ac-promise-pill">
                <span className="ac-promise-no">No</span>
                {t.replace(/^No /, '')}
              </div>
            ))}
          </div>
        </section>

        <section className="ac-flyers" id="flyers">
          <div className="col sec-head">
            <div>
              <h2 className="h2">THIS SEMESTER</h2>
              <p>Each workshop builds on the last. Come to one, or come to all of them.</p>
            </div>
          </div>
          <div className="carousel flyers col">
            <div className="ctrack">
              {FLYERS.map((f) => (
                <article key={f.workshop} className={`flyer${f.soon ? ' soon' : ''}`}>
                  <small>{f.small}</small>
                  <h3>{f.workshop}</h3>
                  <b className="topic">{f.topic}</b>
                  <p>{f.desc}</p>
                  <div className="when">
                    {f.when.map((w) => (
                      <span key={w}>{w}</span>
                    ))}
                  </div>
                  {f.sticker && <span className="sticker">{f.sticker}</span>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="col bare">
          <Link className="nextprog to-night" href="/aim">
            <small>Next step · Grow</small>
            <b>AIM</b>
            <span>Work on a real project with a mentor →</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
