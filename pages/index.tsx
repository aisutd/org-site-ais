import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import SpringyLaptop from '../components/homepage/SpringyLaptop';
import SlideInAIS from '../components/homepage/SlideInAIS';
import SlideInDescription from '../components/homepage/SlideInDescription';
import AnimatedJoinBtn from '../components/homepage/AnimatedJoinBtn';
import WhoWeAre from '../components/homepage/WhoWeAre';
import WhatIsHappening from '../components/homepage/WhatIsHappening';
import PastEvent from '../components/homepage/PastEvent';
import Events from '../components/homepage/Events';
import Subscribe from '../components/join/Subscribe';
import KickoffModal from '../components/events/KickoffModal';
import { JavascriptRounded } from '@mui/icons-material';
import Partners from '../components/homepage/Sponsors';
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
      <main className="min-h-screen bg-ais-white text-hind subpixel-antialiased overflow-x-hidden">
        <section id="intro" className="bg-ais-white h-[24rem] w-full mb-10 lg:mb-10 sm:flex xl:h-[40rem] relative">
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
        <section id="sponsors">
          <Partners />
        </section>
        <section id="callToAction" className="relative grid bg-ais-black h-[13rem] mt-[12rem]">
          <Paper className="absolute grid text-left rounded-3xl shadow-ais-black justify-self-center -top-[7.5rem] h-[15rem] mx-5" elevation={24}>
            <div className="justify-self-center self-center gap-16 px-16 lg:flex">
              <div className="max-w-[22rem] text-center md:text-left">
                <div className="text-ais-navy text-3xl font-bold pb-5 lg:pb-2">Want to get involved?</div>
                <div className="text-ais-dark-gray text-lg hidden xl:block">
                  Join our mailing list to get email reminders about our upcoming events.
                </div>
              </div>
              <div className="grid grow items-center justify-center md:flex lg:justify-self-right">
                <div>
                  {Subscribe()}
                </div>
                <div className="text-ais-dark-gray font-semibold text-center px-10 py-1">or</div>
                <Button variant="outlined" size="medium" style={{ borderColor: "#24314D", borderRadius: "9px" }} className="grow w-[13rem] h-[3rem] hover:bg-slate-200">
                  <Link href="/join" className="text-ais-navy normal-case font-semibold tracking-wide">Join the Team</Link>
                </Button>
              </div>
            </div>
          </Paper>
        </section>
      </main>
    </div>
  );
}
