import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { setMood, setCritters } from '../lib/portal/bus';
import { useCountUp } from '../lib/portal/useCountUp';

const PRIDE = [
  { name: 'Project name', tag: 'PyTorch', mentor: 'Name', mentees: 'Names' },
  { name: 'Project name', tag: 'PyTorch', mentor: 'Name', mentees: 'Names' },
  { name: 'Project name', tag: 'PyTorch', mentor: 'Name', mentees: 'Names' },
];

/** AIM — ported from ais-site/index.html: night, constellations, mentor/mentee cards. */
export default function AimPage() {
  const statsRef = useRef<HTMLElement>(null);
  useCountUp(statsRef);

  useEffect(() => {
    setMood('aim', true);
    setCritters('aim');
  }, []);

  return (
    <div className="view dark" data-view="aim">
      <Head>
        <title>AIM &ndash; AIS</title>
        <meta name="description" content="AIM is a 10-week mentorship program where students build real-world AI solutions with support from an experienced mentor." />
      </Head>

      <header className="hero aim-hero col">
        <svg className="aim-const" viewBox="0 0 600 260" aria-hidden="true">
          <path className="cl" d="M70 190 L160 120 L250 150 L330 70 L430 110 L530 60" />
          <circle cx="70" cy="190" r="4" />
          <circle cx="160" cy="120" r="3" />
          <circle cx="250" cy="150" r="3.5" />
          <circle cx="330" cy="70" r="5" />
          <circle cx="430" cy="110" r="3" />
          <circle cx="530" cy="60" r="4.5" />
          <text x="70" y="216">
            mentee
          </text>
          <text x="530" y="40" textAnchor="middle">
            mentor
          </text>
        </svg>
        <div className="eyebrow">
          AIS Programs<small>Step 2 · Grow</small>
        </div>
        <h1 className="aim-title">
          <img src="/images/Logos/ai-mentorship-logo.png" alt="AI Mentorship" style={{ display: 'block', maxWidth: '100%', height: 'auto' }} />
        </h1>
        <p className="sub">A 10-week program. Build a real-world AI project with support from your own mentor.</p>
        <a className="open-pill" href="#join-as">
          <i />
          Fall 2026 applications open now
        </a>
      </header>

      <div className="stack">
        <section className="col" ref={statsRef}>
          <div className="dpanel aim-about">
            <div>
              <h2 className="h2">ABOUT AIM</h2>
              <p>
                AIM is a 10-week mentorship program where students build real-world AI solutions with support from an experienced
                mentor. You'll develop a production-ready ML project using industry-grade tools, guided every step of the way.
              </p>
            </div>
            <div className="dstats">
              <div>
                <b data-count="80">80</b>
                <sup>+</sup>
                <span>Members</span>
              </div>
              <div>
                <b data-count="72">72</b>
                <span>AI projects</span>
              </div>
              <div>
                <b data-count="16">16</b>
                <span>Workshops</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="col sec-head" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2 className="h2">AIM PRIDE</h2>
              <p>Projects built by AIM mentors and mentees.</p>
            </div>
          </div>
          <div className="col pride">
            {PRIDE.map((p, i) => (
              <article key={i} className="pcard">
                <div className="ph">Project image</div>
                <div className="pbody">
                  <b>{p.name}</b>
                  <span className="ptag">{p.tag}</span>
                  <p>Add a two-line summary of what this project does and who it helps.</p>
                  <dl>
                    <dt>Mentor</dt>
                    <dd>{p.mentor}</dd>
                    <dt>Mentees</dt>
                    <dd>{p.mentees}</dd>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="col" id="join-as">
          <div className="sec-head" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2 className="h2">JOIN AS A…</h2>
            </div>
          </div>
          <div className="join-grid">
            <svg className="bridge" viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 60 C 60 10, 140 110, 200 60" />
            </svg>
            <article className="role mentor">
              <span className="rbadge">✦ Mentor</span>
              <ul>
                <li>Gain experience leading a team</li>
                <li>Strengthen your AI skills</li>
                <li>Develop your dream AI project with the backing of AIS</li>
                <li>Present to industry experts</li>
                <li>Further pursue your project under AI Innovation*</li>
              </ul>
              <a className="btn" href="https://www.aisutd.org/aim/mentor/apply" target="_blank" rel="noreferrer">
                Apply as a mentor →
              </a>
            </article>
            <article className="role mentee">
              <span className="rbadge">✦ Mentee</span>
              <ul>
                <li>Gain experience building AI solutions</li>
                <li>Access weekly AI and ML workshops</li>
                <li>Present to industry experts</li>
                <li>Start and engage in research stemming from your project*</li>
              </ul>
              <a className="btn" href="https://www.aisutd.org/aim/apply" target="_blank" rel="noreferrer">
                Apply as a mentee →
              </a>
            </article>
          </div>
        </section>

        <section className="col">
          <div className="sec-head" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2 className="h2">WHAT WE LOOK FOR</h2>
            </div>
          </div>
          <div className="lookfor">
            <article>
              <svg viewBox="0 0 80 50" aria-hidden="true">
                <path d="M10 38 L28 14 L40 30 L52 14 L70 38 M28 14 L52 14" />
                <circle cx="10" cy="38" r="3" />
                <circle cx="28" cy="14" r="3.5" />
                <circle cx="40" cy="30" r="3" />
                <circle cx="52" cy="14" r="3.5" />
                <circle cx="70" cy="38" r="3" />
              </svg>
              <h3>Teamwork</h3>
              <p>You will constantly collaborate with others learning just like you. So we expect a positive mindset, respect, and a good level of teamwork from you!</p>
            </article>
            <article>
              <svg viewBox="0 0 80 50" aria-hidden="true">
                <path d="M40 6 L40 25 L56 34 M40 25 m-20 0 a20 20 0 1 0 40 0 a20 20 0 1 0 -40 0" fill="none" />
                <circle cx="40" cy="6" r="3" />
                <circle cx="40" cy="25" r="3.5" />
                <circle cx="56" cy="34" r="3" />
              </svg>
              <h3>Commitment</h3>
              <p>Must attend AIM work nights every Wednesday at 8:30 PM, in addition to weekly team-specific meetings for the duration of the program!</p>
            </article>
            <article>
              <svg viewBox="0 0 80 50" aria-hidden="true">
                <path d="M14 42 L30 30 L44 34 L58 16 L68 8" />
                <circle cx="14" cy="42" r="3" />
                <circle cx="30" cy="30" r="3" />
                <circle cx="44" cy="34" r="3" />
                <circle cx="58" cy="16" r="3.5" />
                <circle cx="68" cy="8" r="4.5" />
              </svg>
              <h3>Drive to learn</h3>
              <p>You will feel challenged; AI is not easy to learn! Have a growth mindset and be ready to learn from your mentor and the weekly workshops organized for you.</p>
            </article>
          </div>
        </section>

        <section className="col bare">
          <Link className="nextprog dark to-twilight" href="/lab">
            <small>Next step · Launch</small>
            <b>Innovation Lab</b>
            <span>Ship a full-scale AI project with a team →</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
