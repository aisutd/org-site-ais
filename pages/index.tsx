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
        <section id="intro" className="bg-ais-new-beige h-[24rem] w-full mb-10 lg:mb-10 sm:flex xl:h-[40rem] relative">
          <div className="flex flex-col h-full justify-center items-start text-center">
            <img
              src="/home_string.png"
              alt="Home string"
              className="absolute top-40 left-0 h-80 w-80"
            />
            <div className="flex items-center text-ais-blue text-6xl sm:text-7xl lg:text-8xl font-semibold mb-8 pl-48">
              <span>
                STEP INTO
              </span>
              <img src='/home_arrow.png' alt="Step into arrow" className="mx-2 h-8 w-8" />
            </div>
            <div className="text-ais-blue text-6xl sm:text-7xl lg:text-8xl font-semibold mb-8 pl-72">
              THE WORLD OF
            </div>
            <div className="flex items-center pl-10 text-6xl sm:text-7xl lg:text-8xl font-semibold">
              <span className="bg-gradient-to-r from-purple-900 to-yellow-400 text-transparent bg-clip-text">
                ARTIFICIAL
              </span>
              <img src="/AIstar.png" alt="AI Star" className="mx-2 h-16 w-16" />
              <span className="bg-gradient-to-r from-purple-900 to-yellow-400 text-transparent bg-clip-text">
                INTELLIGENCE
              </span>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
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
            topImageSrc="/Placeholder Image.png"
            topBodyText="Lorem ipsum dolor sit amet consectetur. Morbi consectetur habitant purus lacus a mauris elementum eleifend arcu. Sem purus tristique ut praesent adipiscing."
            bottomImageSrc="/Placeholder Image.png"
            bottomTitle="AI MENTORSHIP"
            bottomBodyText="Lorem ipsum dolor sit amet consectetur. Morbi consectetur habitant purus lacus a mauris elementum eleifend arcu. Sem purus tristique ut praesent adipiscing."
          />
        </section>
        <section>
          <JoinUs/>
        </section>
      </main>
    </div>
  );
}
