import Head from 'next/head';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Officer } from '../lib/types';
import { getAllOfficers } from './api/officer';
import { setMood, setCritters } from '../lib/portal/bus';

interface TeamPageProps {
  officers: Officer[];
}

interface Dept {
  id: string;
  name: string;
  blurb: string;
  people: Officer[];
}

function githubUrl(github: string) {
  let u = github;
  if (u.includes('github.com/')) u = u.split('github.com/')[1].replace(/^\//, '').replace(/\/.*$/, '');
  return `https://github.com/${u.replace(/[^\w-]/g, '')}`;
}
function websiteUrl(site: string) {
  let u = site;
  if (u.includes('https://')) u = u.split('https://')[1];
  return `https://${u.replace(/^\//, '').replace(/[^.\w-]/g, '')}`;
}

/**
 * Our Team — ported from ais-site/index.html. Departments as bento cards; each person is a
 * card with a role badge and, if they have one, a quote that pops up on click. The TEAMS data
 * the prototype hardcoded comes from the real officer roster (getAllOfficers()) instead.
 */
export default function TeamPage({ officers }: TeamPageProps) {
  useEffect(() => {
    setMood('team', true);
    setCritters('team');
  }, []);

  const [openCard, setOpenCard] = useState<string | null>(null);
  const [active, setActive] = useState('all');
  const spyLock = useRef(0);

  const byTeam = (name: string) => sortDept(officers.filter((o) => o.team === name));
  const depts: Dept[] = [
    { id: 'exec', name: 'Executive Board', blurb: 'Sets the direction for AIS and keeps every team moving together.', people: sortExec(officers.filter((o) => o.team === 'Executive')) },
    { id: 'tech', name: 'Technology', blurb: 'Builds the AIS website, portal and internal tools.', people: byTeam('Technology') },
    { id: 'ops', name: 'Operations', blurb: 'Runs events, logistics and member operations.', people: byTeam('Operations') },
    { id: 'fin', name: 'Finance', blurb: 'Manages budgets, sponsorship funds and reimbursements.', people: byTeam('Finance') },
    { id: 'mkt', name: 'Marketing', blurb: 'Tells the AIS story across socials, design and outreach.', people: byTeam('Marketing') },
    { id: 'ind', name: 'Industry', blurb: 'Connects members with companies, speakers and sponsors.', people: byTeam('Industry') },
    { id: 'aim', name: 'AIM', blurb: 'Connects members with mentors for project feedback and career guidance.', people: byTeam('AIM') },
    { id: 'aca', name: 'AI Academy', blurb: 'Workshops, technical sessions and guided learning paths in ML, data science and modern AI tools.', people: byTeam('AI Academy') },
    { id: 'lab', name: 'Innovation Lab', blurb: 'Teams design, build and deploy full-scale AI projects that solve meaningful problems.', people: byTeam('Innovation Labs') },
  ].filter((d) => d.people.length > 0);

  const nPeople = officers.length;
  const nTeams = depts.length;

  // the pills jump to a section (every department stays on the page) and the active pill
  // follows your scroll position, same as ais-site/index.html's pill bar
  useEffect(() => {
    const sections = depts.map((d) => document.getElementById(`team-${d.id}`)).filter((el): el is HTMLElement => !!el);
    const spy = new IntersectionObserver(
      (entries) => {
        if (Date.now() < spyLock.current) return;
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id.replace('team-', ''));
        });
      },
      { rootMargin: '-38% 0px -58% 0px' },
    );
    sections.forEach((el) => spy.observe(el));
    const onScroll = () => {
      const tw = document.querySelector('.teamwrap');
      if (tw && Date.now() > spyLock.current && tw.getBoundingClientRect().top > 150) setActive('all');
    };
    addEventListener('scroll', onScroll, { passive: true });
    return () => {
      spy.disconnect();
      removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [officers]);

  const jump = (id: string) => {
    setActive(id);
    spyLock.current = Date.now() + 900;
    if (id === 'all') {
      scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(`team-${id}`);
    if (el) scrollTo({ top: el.getBoundingClientRect().top + scrollY - 150, behavior: 'smooth' });
  };

  return (
    <div className="view" data-view="team">
      <Head>
        <title>Team &ndash; AIS</title>
        <meta name="description" content="The officers of the Artificial Intelligence Society - the people who make this all possible." />
      </Head>

      <header className="hero col">
        <div className="eyebrow">
          Artificial Intelligence Society<small>Officers</small>
        </div>
        <h1>MEET THE TEAM</h1>
        <p className="sub">Meet the people behind AIS.</p>
        <div className="stats">
          <span className="stat">
            <b>{nPeople}</b> officers
          </span>
          <span className="stat">
            <b>{nTeams}</b> teams
          </span>
        </div>
      </header>

      <div className="teamwrap col">
        <div className="filterbar">
          <div className="pills" role="group" aria-label="Jump to a team">
            <button className="pill" aria-pressed={active === 'all'} onClick={() => jump('all')}>
              All
            </button>
            {depts.map((d) => (
              <button key={d.id} className="pill" aria-pressed={active === d.id} onClick={() => jump(d.id)}>
                {d.id === 'exec' ? 'Executive' : d.name}
              </button>
            ))}
          </div>
        </div>
        <section className="team">
          {depts.map((d) => (
            <div key={d.id} className={`dept${d.id === 'exec' ? ' exec' : d.people.length <= 2 ? ' half' : ''}`} id={`team-${d.id}`}>
              <div className="dept-head">
                <div className="titles">
                  <h2>{d.name}</h2>
                  <p>{d.blurb}</p>
                </div>
                <span className="count">
                  {d.people.length} {d.people.length === 1 ? 'member' : 'members'}
                </span>
              </div>
              <div className="strip">
                <div className="scroller fits" style={{ '--rows': d.people.length <= 4 ? 1 : 2 } as React.CSSProperties}>
                  {d.people.map((m) => {
                    const key = `${d.id}-${m.name}`;
                    const isLead = /director|president|vice president|founder/i.test(m.title || '');
                    const open = openCard === key;
                    return (
                      <article key={key} className={`card${isLead ? ' lead' : ''}${open ? ' open' : ''}`}>
                        <div className="avatar">
                          {m.image ? (
                            <img src={m.image} alt={m.name} />
                          ) : (
                            <svg>
                              <use href="#ph" />
                            </svg>
                          )}
                        </div>
                        <b>{m.name}</b>
                        <span className={`role${m.title ? '' : ' member'}`}>{m.title || 'Officer'}</span>
                        <div className="icons">
                          {m.email && (
                            <a className="ic" href={`mailto:${m.email}`} aria-label="Email">
                              <svg>
                                <use href="#i-mail" />
                              </svg>
                            </a>
                          )}
                          {m.github && (
                            <a className="ic" href={githubUrl(m.github)} target="_blank" rel="noreferrer" aria-label="GitHub">
                              <svg>
                                <use href="#i-gh" />
                              </svg>
                            </a>
                          )}
                          {m.personalWeb && (
                            <a className="ic" href={websiteUrl(m.personalWeb)} target="_blank" rel="noreferrer" aria-label="Website">
                              <svg>
                                <use href="#i-web" />
                              </svg>
                            </a>
                          )}
                          {m.quote && (
                            <button className="ic qbtn" aria-label={`Show ${m.name}'s quote`} aria-expanded={open} onClick={() => setOpenCard(open ? null : key)}>
                              <svg>
                                <use href="#i-quote" />
                              </svg>
                            </button>
                          )}
                        </div>
                        {m.quote && (
                          <div className="quote" role="dialog" aria-label={`${m.name}'s quote`}>
                            <button className="x" aria-label="Close quote" onClick={() => setOpenCard(null)}>
                              ×
                            </button>
                            <span className="mark">&ldquo;</span>
                            <p>{m.quote}</p>
                            <small>{m.name}</small>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      <section className="cta">
        <div className="col">
          <h2>JOIN OUR TEAM OF CREATORS, BUILDERS, AND INNOVATORS</h2>
          <p>
            We're always looking for curious minds and passionate hearts to grow with us.
            <br />
            If you're ready to make an impact, we'd love to hear from you.
          </p>
          <a className="btn" href="https://www.aisutd.org/officer/apply" target="_blank" rel="noreferrer">
            Join Now
          </a>
        </div>
      </section>
    </div>
  );
}

/** Directors first (alphabetically among themselves), then everyone else alphabetically. */
function sortDept(officers: Officer[]) {
  return officers.slice().sort((a, b) => {
    const aDir = /director/i.test(a.title || '');
    const bDir = /director/i.test(b.title || '');
    if (aDir !== bDir) return aDir ? -1 : 1;
    return (a.name || '').localeCompare(b.name || '', 'en-US');
  });
}

function sortExec(officers: Officer[]) {
  return officers.slice().sort((a, b) => {
    if (a.title === 'President' && b.title !== 'President') return -1;
    if (a.title !== 'President' && b.title === 'President') return 1;
    if (a.title === 'Vice-President' && b.title !== 'Vice-President') return 1;
    if (a.title !== 'Vice-President' && b.title === 'Vice-President') return -1;
    return a.name < b.name ? -1 : 1;
  });
}

export async function getStaticProps() {
  const officers = await getAllOfficers();
  return {
    props: {
      officers,
    },
  };
}
