import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import { Outlet } from 'react-router-dom'

/**
 * The default wrapper layout for the website, complete with header and footer.
 */
export default function SiteLayout({ children }: React.PropsWithChildren<unknown>) {
  return (
    <>
      <SiteHeader/>
        {children}
      <SiteFooter/>
    </>
  );
}
