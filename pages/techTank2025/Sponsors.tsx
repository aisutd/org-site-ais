// Footer.tsx (the new wrapper component)
import * as React from 'react';
import DesktopSponsors from './DesktopSponsors'; // Or the correct path
import MobileSponsors from './MobileSponsors';   // Or the correct path

function Sponsors() {
  return (
    <>
      {/* Mobile Footer: Visible by default, hidden on medium screens and up */}
      <div className="block md:hidden">
        <MobileSponsors />
      </div>

      {/* Desktop Footer: Hidden by default, visible on medium screens and up */}
      <div className="hidden md:block">
        <DesktopSponsors />
      </div>
    </>
  );
}

export default Sponsors;