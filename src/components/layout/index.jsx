import { Outlet } from 'react-router-dom';

import GoogleHeader from '../GoogleHeader';
import Footer from '../Footer';

export function Layout() {
  return (
    <>
      <GoogleHeader />
      <Outlet />
      <Footer />
    </>
  );
}
