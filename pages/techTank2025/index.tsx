import exp from 'constants';
import Head from 'next/head';
import * as React from 'react';
import { Desk } from '@mui/icons-material';
import Footer from './Footer';
import Sponsors from './Sponsors';

export default function HomePage() {
  return (
    <>
        <Head>
            <title>Tech Tank 2025</title>
            <meta
            name="description"
            content="Welcome to Tech Tank 2025!"
            />
        </Head>
        <main className="min-h-screen w-[100%] bg-techTank-light-green text-ais-white subpixel-antialiased overflow-x-hidden z-0"></main>
        <section id="sponsors" className="">
          <Sponsors/>
        </section>
        <section id="footer" className="">
          <Footer/>
        </section>
    </>
  );
}