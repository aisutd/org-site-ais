import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { setMood, setCritters } from '../../lib/portal/bus';

const PHOTOS = ['/hackai/hackAIOpening.png', '/hackai/hackAISponsors.png', '/hackai/Presentation.png'];

const WINNERS = [
  { place: '1st place', name: 'Bifocal', image: '/hackai/1st.jpg' },
  { place: '2nd place', name: 'Smile', image: '/hackai/2nd.jpg' },
  { place: '3rd place', name: 'Catch Up', image: '/hackai/3rd.jpg' },
];

const SPONSORS = [
  { name: 'Center for AI & ML', logo: '/hackai/sponsors/aiml.png' },
  { name: 'AWS', logo: '/hackai/sponsors/aws.jpeg' },
  { name: 'Cognizant', logo: '/hackai/sponsors/cognizant.png' },
  { name: 'LTIMindtree', logo: '/hackai/sponsors/ltimindtree.webp' },
  { name: 'Toyota', logo: '/hackai/sponsors/toyota.png' },
];

const FAQS = [
  {
    q: 'How can I get involved?',
    a: 'You can get involved by signing up for our next hackathon event. Registration details will be posted on our website and social media channels. Stay tuned for announcements!',
  },
  { q: 'When is the next Hack AI?', a: 'Our next Hack AI event will be announced soon. Follow us on social media or join our mailing list to be the first to know.' },
  { q: 'Do I need prior experience to take part?', a: "No prior experience is necessary! Hack AI welcomes participants of all skill levels — whether you're a beginner or experienced." },
];

/** HackAI — ported from ais-site/index.html: fanned photo hero, winners + sponsors, FAQ accordion. */
export default function HackAiHome() {
  useEffect(() => {
    setMood('hackai', true);
    setCritters('hackai');
  }, []);

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="view" data-view="hackai">
      <Head>
        <title>HackAI &ndash; AIS</title>
        <meta name="description" content="HackAI — a 24-hour hackathon hosted by the Artificial Intelligence Society at UTD." />
      </Head>

      <header className="hero hk-hero col">
        <div className="hk-copy">
          <div className="eyebrow">
            Artificial Intelligence Society<small>24-hour hackathon</small>
          </div>
          <h1>
            <span className="ln">HACK AI</span>
            <span className="ln small">
              <span className="w">BUILD THE FUTURE</span>
            </span>
          </h1>
          <p className="sub">A weekend of rapid prototyping and collaboration. See past winners and resources below.</p>
          <div className="btnrow">
            <a className="btn light" href="#winners">
              See past winners
            </a>
            <a className="btn ghost light" href="#faq">
              Read the FAQ
            </a>
          </div>
        </div>
        <div className="fan" aria-hidden="true">
          {PHOTOS.map((src) => (
            <div key={src} className="ph">
              <img src={src} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 13 }} />
            </div>
          ))}
          <svg className="badge" viewBox="0 0 120 120">
            <defs>
              <path id="bp" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
            </defs>
            <circle cx="60" cy="60" r="58" fill="#fff" />
            <text>
              <textPath href="#bp">24 HOURS · BUILD · SHIP · 24 HOURS · </textPath>
            </text>
            <text x="60" y="68" textAnchor="middle" className="bnum">
              24h
            </text>
          </svg>
        </div>
      </header>

      <div className="stack">
        <section className="col">
          <div className="panel about">
            <div>
              <h2 className="h2">ABOUT THE HACK</h2>
              <p>
                A 24-hour hackathon in which students can come together as a community of AI enthusiasts, network with industry
                professionals, utilize modern AI tools to create powerful and impressive projects to showcase. HackAI comes with food,
                swag, prizes and fun!
              </p>
              <div className="chips">
                <span className="chip">24 hours</span>
                <span className="chip">Industry mentors</span>
                <span className="chip">Prizes</span>
                <span className="chip">Free food &amp; swag</span>
              </div>
            </div>
            <img src="/hackai/hackOfficers.jpeg" alt="HackAI officers" className="ph" style={{ objectFit: 'cover' }} />
          </div>
        </section>

        <section className="winners" id="winners">
          <div className="col sec-head" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2 className="h2">PAST WINNERS</h2>
              <p>Teams that built something remarkable in 24 hours.</p>
            </div>
          </div>
          <div className="carousel gallery">
            <div className="ctrack">
              {WINNERS.map((w) => (
                <figure key={w.name} className="shot">
                  <img src={w.image} alt={w.name} className="ph" style={{ objectFit: 'cover' }} />
                  <figcaption className="cap">
                    <small>{w.place}</small>
                    <b>{w.name}</b>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Past sponsors">
          <div className="col sec-head" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2 className="h2">PAST SPONSORS</h2>
            </div>
          </div>
          <div className="marquee sponsors">
            <div className="mtrack">
              {[...SPONSORS, ...SPONSORS].map((s, i) => (
                <div key={s.name + i} className="logo-chip">
                  <img src={s.logo} alt={s.name} width={120} height={44} style={{ objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="col" id="faq">
          <div className="panel faq">
            <div className="faq-left">
              <h2 className="h2">FAQs</h2>
              <p>
                By joining AIS, you gain access to valuable resources, including mentorship opportunities, networking events, engaging
                workshops, and an amazing community of like-minded people with an interest and passion for artificial intelligence.
              </p>
              <div className="btnrow">
                <Link className="btn ghost" href="/team">
                  More Questions
                </Link>
                <a className="btn" href="mailto:AIS@utd.org">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="faq-list">
              {FAQS.map((f, i) => (
                <div key={f.q} className={`qa${openFaq === i ? ' open' : ''}`}>
                  <button aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    {f.q}
                    <span className="pm">
                      <svg viewBox="0 0 10 10">
                        <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth={1.6} />
                      </svg>
                    </span>
                  </button>
                  <div className="ans">
                    <div>
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="col bare">
          <div className="hacklink">
            <span className="loading" aria-hidden="true">
              <i />
            </span>
            <h2>THE NEXT HACK IS LOADING…</h2>
            <p>Registration, schedule, tracks and everything else lives on the HackAI website.</p>
            <a className="btn light" href="https://hackai.aisutd.org" target="_blank" rel="noreferrer">
              Visit the HackAI website ↗
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
