import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { setMood, setCritters } from '../lib/portal/bus';

const TERMINAL_LINES: [string, string][] = [
  ['p', '$ lab init --team 4'],
  ['ok', '✓ team assembled · designer, 2 ML, 1 backend'],
  ['p', '$ lab design --problem "something that matters"'],
  ['dim', '  scoping… sketching the system…'],
  ['ok', '✓ plan locked'],
  ['p', '$ lab build --model --api --ui'],
  ['dim', '  training… wiring… testing…'],
  ['ok', '✓ prototype running'],
  ['p', '$ lab deploy --to prod'],
  ['ok', '✓ live · see you at demo day'],
];

/** Innovation Lab — ported from ais-site/index.html: twilight, Design → Build → Deploy. */
export default function LabPage() {
  useEffect(() => {
    setMood('lab', true);
    setCritters('lab');
  }, []);

  return (
    <div className="view dark" data-view="lab">
      <Head>
        <title>Innovation Lab &ndash; AIS</title>
        <meta name="description" content="Innovation Lab is where ideas become real systems. Members collaborate in teams to design, build and deploy full-scale AI projects." />
      </Head>

      <header className="hero lab-hero col">
        <div className="lab-copy">
          <div className="eyebrow">
            AIS Programs<small>Step 3 · Launch</small>
          </div>
          <h1 className="lab-title">
            <img src="/images/Logos/ai-innovation-lab-logo.png" alt="AI Innovation Lab" style={{ display: 'block', maxWidth: '100%', height: 'auto' }} />
          </h1>
          <p className="sub">A longer-running program where the strongest AIM projects get developed into full-scale products — deployed, with real domains and infrastructure, not just a demo.</p>
          <div className="btnrow">
            <a className="btn light" href="https://www.aisutd.org/officer/apply" target="_blank" rel="noreferrer">
              Apply to the lab
            </a>
            <Link className="btn ghost light" href="/team">
              Meet the lab →
            </Link>
          </div>
        </div>
        <div className="term live" aria-hidden="true">
          <div className="term-bar">
            <i />
            <i />
            <i />
            <span>innovation-lab — zsh</span>
          </div>
          <pre className="term-out">
            {TERMINAL_LINES.map(([c, tx]) => (
              <span key={tx} className={c}>
                {tx}
                {'\n'}
              </span>
            ))}
          </pre>
        </div>
      </header>

      <div className="stack">
        <section className="col">
          <div className="sec-head" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2 className="h2">HOW THE LAB WORKS</h2>
              <p>A longer program. One strong AIM project, taken all the way to production.</p>
            </div>
          </div>
          <div className="dpanel">
            <ol className="pipeline">
              <li>
                <span className="node">01</span>
                <h3>Inherit</h3>
                <p>Pick up a promising project that came out of AIM and scope what it takes to make it real.</p>
              </li>
              <li>
                <span className="node">02</span>
                <h3>Develop</h3>
                <p>Rebuild it into a full-scale, production-grade system — real infrastructure, not just a demo.</p>
              </li>
              <li>
                <span className="node">03</span>
                <h3>Launch</h3>
                <p>Deploy it with a real domain, so actual people can use it, then show it off.</p>
              </li>
            </ol>
          </div>
        </section>

        <section>
          <div className="col sec-head">
            <div>
              <h2 className="h2">LAB PROJECTS</h2>
              <p>Add your current projects here.</p>
            </div>
          </div>
          <div className="col lab-grid">
            <article className="lcard wide">
              <div className="ph">Project image</div>
              <div className="lbody">
                <span className="lstat">
                  <i />
                  Deployed
                </span>
                <b>Project name</b>
                <p>One sentence on the problem and the system the team built.</p>
                <div className="stack-tags">
                  <span>Python</span>
                  <span>PyTorch</span>
                  <span>FastAPI</span>
                </div>
              </div>
            </article>
            <article className="lcard">
              <div className="lbody">
                <span className="lstat building">
                  <i />
                  Building
                </span>
                <b>Project name</b>
                <p>One sentence on the problem and the system the team built.</p>
                <div className="stack-tags">
                  <span>Tag</span>
                  <span>Tag</span>
                </div>
              </div>
            </article>
            <article className="lcard">
              <div className="lbody">
                <span className="lstat building">
                  <i />
                  Building
                </span>
                <b>Project name</b>
                <p>One sentence on the problem and the system the team built.</p>
                <div className="stack-tags">
                  <span>Tag</span>
                  <span>Tag</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="col bare">
          <div className="lab-cta">
            <div>
              <small>Finished AI Academy or AIM?</small>
              <h2>BRING AN IDEA. LEAVE WITH A SYSTEM.</h2>
            </div>
            <div className="btnrow">
              <a className="btn light" href="https://www.aisutd.org/officer/apply" target="_blank" rel="noreferrer">
                Apply to the lab
              </a>
              <Link className="btn ghost light" href="/programs">
                All programs
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
