import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

/** The glass-free footer, ported from ais-site/index.html, with the site's real social links. */
export default function PortalFooter() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <div className="logo">
            <img src="/images/Logos/ais_logo_black.png" alt="Artificial Intelligence Society" />
          </div>
          <div>Have any questions? Contact us today!</div>
          <div style={{ marginTop: 14 }}>AIS@utd.org</div>
        </div>
        <div className="fcol">
          <div className="fnav">
            <Link href="/events">Events</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/team">Our Team</Link>
            <Link href="/hackAI">HackAI</Link>
          </div>
          <div className="soc">
            <a href="/insta" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon style={{ fontSize: 13 }} />
            </a>
            <a href="/linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon style={{ fontSize: 13 }} />
            </a>
            <a href="/yt" target="_blank" rel="noreferrer" aria-label="YouTube">
              <YouTubeIcon style={{ fontSize: 13 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
