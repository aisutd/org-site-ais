// Footer.tsx (the new wrapper component)
import * as React from 'react';
import DesktopFooter from './DesktopFooter'; // Or the correct path
import MobileFooter from './MobileFooter';   // Or the correct path

function Footer() {
  return (
    <>
      {/* Mobile Footer: Visible by default, hidden on medium screens and up */}
      <div className="block md:hidden">
        <MobileFooter />
      </div>

      {/* Desktop Footer: Hidden by default, visible on medium screens and up */}
      <div className="hidden md:block">
        <DesktopFooter />
      </div>
    </>
  );
}

export default Footer;