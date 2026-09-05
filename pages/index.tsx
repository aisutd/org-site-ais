import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import PastEvent from '../components/homepage/PastEvent';
import JoinUs from '../components/homepage/JoinUs';
import Summary from '../components/homepage/Summary';
import SplitContent from '../components/homepage/SplitContent';
import AboutPage from './about';

/**
 * The root page for the organization website.
 *
 * This page contains an overview of the organization and links to our programs
 * and events.
 */
export default function HomePage() {
  return (
    <div>
      {/*<KickoffModal/>*/}
      <Head>
        {/*<title>Home &ndash; AIS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" className="object-cover"/>*/}
        <meta
          name="description"
          content="Welcome to the Artificial Intelligence Society at UTD. We make AI understandable and accessible to everyone"
        />
      </Head>
      <main className="min-h-screen bg-ais-new-beige font-roboto subpixel-antialiased overflow-x-hidden">
        <section id="intro" className="bg-ais-new-beige w-full mb-10 lg:mb-10 relative pt-[9rem] pb-[4rem]">
          <div className="flex flex-col h-full justify-center text-center md:items-start">
            <img
              src="/images/Shapes/home_string.png"
              alt="Home string"
              className="absolute hidden md:block h-[40vw] w-[40vw] top-[calc(26rem-10vw)] lg:h-[calc(30vw)] lg:w-[calc(30vw)] lg:top-[calc(28rem-25vw)] xl:top-[calc(26rem-20vw)]"
            />
            
            {/* Line 1 */}
            <div className="flex font-placard-bold text-ais-blue mb-8 justify-center text-5xl sm:text-8xl md:pl-[calc(15%-5rem)] lg:text-[7rem] lg:pl-[calc(50%-20rem)] lg:justify-start xl:text-9xl animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              STEP INTO
              
            </div>
            
            {/* Line 2 */}
            <div className="font-placard-bold text-ais-blue mb-8 text-5xl sm:text-8xl md:pl-[calc(38%-9rem)] lg:text-[7rem] lg:pl-[calc(50%-14rem)] xl:text-9xl animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
              THE WORLD OF
            </div>
            
            {/* Line 3 */}
            <div className="flex font-placard-bold text-5xl items-center flex-col sm:text-8xl md:pl-[calc(60%-10rem)] md:items-end lg:text-[7rem] lg:pl-[calc(50%-31rem)] lg:flex-row lg:items-center xl:text-9xl animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
              <span className="bg-gradient-to-r from-[#361CFF] from-50% to-[#FFBC85] text-transparent bg-clip-text">
                ARTIFICIAL
              </span>
              <img src="/images/Shapes/AIstar.png" alt="AI Star" className="h-16 w-16 hidden lg:block"/>
              <span className="bg-gradient-to-r from-[#361CFF] to-[#FFBC85] text-transparent bg-clip-text">
                INTELLIGENCE
              </span>
            </div>

            <div className="w-full flex justify-center mt-12 animate-[fadeInUp_0.8s_ease-out_1.1s_both]">
              <Link href="https://portal.aisutd.org">
                <button className="relative group overflow-hidden bg-gradient-to-r from-[#361CFF] to-[#FFBC85] text-white font-medium px-14 py-3.5 rounded-full text-lg shadow-[0_4px_20px_rgba(54,28,255,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_25px_rgba(54,28,255,0.4)] active:scale-95">
                  {/* Subtle overlay effect on hover */}
                  <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center gap-2 font-bold">
                    PORTAL
                    {/* Sleek inline arrow icon */}
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
            
            
            <div className="absolute hidden">
              <button className="border border-ais-blue text-ais-blue bg-white px-12 py-1.5 rounded-xl text-lg">
                Join Us
              </button>
            </div>
          </div>
        </section>

        <section id="summary" className="relative w-full bg-ais-new-soft-black">
          <AboutPage />
        </section>
        {/* <section id="past event" className="relative">
          <PastEvent />
        </section> */}
        <section id="split content" className="relative mt-8">
          <SplitContent
            topImageSrc="/images/Photos/ml-mon.png"
            topBodyText="AIS usually hosts an ML Mondays workshop series about once a year where students have the opportunity to learn the basics of machine learning. Any student can attend these events absolutely free!"
            bottomImageSrc="/images/Photos/aim-presentation.png"
            bottomTitle="AI MENTORSHIP"
            bottomBodyText="Our AIM program is designed to give students a hands-on experience to learn and create their first AI project in the scope of a single semester. Students can apply for either mentor or mentee roles depending on experience level."
          />
        </section>
        <section>
          <JoinUs/>
        </section>
      </main>
    </div>
  );
}
