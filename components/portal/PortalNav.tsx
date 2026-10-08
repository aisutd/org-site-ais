import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * The floating glass pill nav, ported from ais-site/index.html. Real <Link>s replace the
 * prototype's hash router; `aria-current="page"` follows the current route the same way the
 * prototype's `show()` did (Academy/AIM/Innovation Lab all count as "Programs" being active).
 *
 * Programs, AI Academy, AIM and Innovation Lab don't have pages yet (later phases) — their
 * links are stubs for now and will 404 until those pages land.
 */
export default function PortalNav() {
  const { pathname } = useRouter();
  const routeFor = (path: string) => {
    if (['/academy', '/aim', '/lab'].includes(path)) return '/programs';
    return path;
  };
  const current = routeFor(pathname);
  const isCurrent = (route: string): 'page' | undefined => (current === route ? 'page' : undefined);

  return (
    <nav className="top glass" aria-label="Main">
      <Link className="logo" href="/" aria-label="AIS home">
        <img src="/images/Logos/ais_logo_black.png" alt="Artificial Intelligence Society" />
      </Link>
      <div className="links">
        <Link href="/events" aria-current={isCurrent('/events')}>
          Events
        </Link>
        <div className="dd">
          <Link href="/programs" aria-current={isCurrent('/programs')}>
            Programs{' '}
            <svg viewBox="0 0 10 10" aria-hidden="true">
              <path d="M2 4l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </Link>
          <div className="ddm">
            <Link href="/academy">
              <span>AI Academy</span>
            </Link>
            <Link href="/aim">
              <span>AIM</span>
            </Link>
            <Link href="/lab">
              <span>Innovation Lab</span>
            </Link>
          </div>
        </div>
        <Link href="/team" aria-current={isCurrent('/team')}>
          Our Team
        </Link>
        <Link href="/hackAI" aria-current={isCurrent('/hackAI')}>
          HackAI
        </Link>
      </div>
    </nav>
  );
}
