import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import PastEvent from '../components/homepage/PastEvent';
import Subscribe from '../components/join/Subscribe';
import Partners from '../components/homepage/Sponsors';
import JoinUs from '../components/homepage/JoinUs';
import Summary from '../components/homepage/Summary';
import SplitContent from '../components/homepage/SplitContent';

/**
 * The root page for the organization website.
 *
 * This page contains an overview of the organization and links to our programs
 * and events.
 */
export default function HomePage() {
  return (
    <div>
      {/*<KickoffModal />*/}
      <Head>
        {/*<title>Home &ndash; AIS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" className="object-cover"/>*/}
        <meta
          name="description"
          content="Welcome to the Artificial Intelligence Society at UTD. We make AI understandable and accessible to everyone"
        />
      </Head>
      <main className="min-h-screen bg-ais-new-beige text-hind subpixel-antialiased overflow-x-hidden">
        <section id="intro" className="bg-ais-new-beige w-full mb-10 lg:mb-10 relative pt-[9rem] pb-[4rem]">
          <div className="flex flex-col h-full justify-center text-center md:items-start">
            <img
              src="/home_string.png"
              alt="Home string"
              className="absolute top-28 h-80 w-80 hidden lg:block left-[calc(45vw-30rem)]"
            />
            <div className="flex text-ais-blue font-semibold mb-8 justify-center text-5xl sm:text-7xl md:pl-[calc(15vw-5rem)] lg:pl-[calc(50vw-20rem)] lg:justify-start">
                STEP INTO
              <img src='/home_arrow.png' alt="Step into arrow" className="mx-2 h-8 w-8" />
            </div>
            <div className="text-ais-blue font-semibold mb-8 text-5xl sm:text-7xl md:pl-[calc(30vw-9rem)] lg:pl-[calc(50vw-14rem)]">
              THE WORLD OF
            </div>
            <div className="flex items-center font-semibold text-5xl sm:text-7xl md:pl-[calc(70vw-22rem)] md:items-end lg:pl-[calc(50vw-31.5rem)] flex-col lg:flex-row">
              <span className="bg-gradient-to-r from-[#361CFF] from-50% to-[#FFBC85] text-transparent bg-clip-text">
                ARTIFICIAL
              </span>
              <img src="/AIstar.png" alt="AI Star" className="h-16 w-16 hidden lg:block"/>
              <span className="bg-gradient-to-r from-[#361CFF] to-[#FFBC85] text-transparent bg-clip-text">
                INTELLIGENCE
              </span>
            </div>
            <div className="absolute hidden">
              <button className="border border-ais-blue text-ais-blue bg-white px-12 py-1.5 rounded-xl text-lg font-semibold">
                Join Us
              </button>
            </div>
          </div>
        </section>
        <section id="summary" className="relative">
          <Summary />
        </section>
        <section id="past event" className="relative">
          <PastEvent />
        </section>
        <section id="split content" className="relative">
          <SplitContent
            topImageSrc="/images/ml-mon.png"
            topBodyText="AIS usually hosts an ML Mondays workshop series about once a year where students have the opportunity to learn the basics of machine learning. Any student can attend these events absolutely free!"
            bottomImageSrc="/images/aim-presentation.png"
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
