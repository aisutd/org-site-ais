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
        <title>Home &ndash; AIS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content="Welcome to the Artificial Intelligence Society at UTD. We make AI understandable and accessible to everyone"
        />
      </Head>
      <main className="min-h-screen bg-ais-white text-hind subpixel-antialiased overflow-x-hidden">
      <section id="intro" className="bg-ais-white h-[24rem] w-full mb-10 lg:mb-20 sm:flex xl:h-[40rem]">
      <div className="flex flex-col h-full justify-center items-center text-center">
  <div className="text-ais-blue text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4">
    STEP INTO
  </div>
  <div className="text-ais-blue text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4">
    THE WORLD OF
  </div>
  {/*
  <div className="text-ais-blue text-4xl sm:text-5xl lg:text-6xl font-semibold">
    ARTIFICIAL INTELLIGENCE
  </div>*/
}
<div className="flex items-center text-4xl sm:text-5xl lg:text-6xl font-semibold">
  <span className="bg-gradient-to-r from-purple-900 to-yellow-400 text-transparent bg-clip-text">
    ARTIFICIAL
  </span>
  <img src="/AIstar.png" alt="AI Star" className="mx-2" />
  <span className="bg-gradient-to-r from-purple-900 to-yellow-400 text-transparent bg-clip-text">
    INTELLIGENCE
  </span>
</div>


  <button className="border border-ais-blue text-ais-blue bg-white px-4 py-2 mt-4 rounded-md text-lg font-semibold">
    Join Us
  </button>
</div>

</section>
        <section id="who-we-are" className="bg-ais-white">
          <WhoWeAre duration="400"/>
        </section>
        <section id="what-is-happening" className="relative bg-[url('/bg_rec.svg')] bg-no-repeat bg-cover lg:h-[44rem]">
        <div className="relative w-full z-0 -top-8 sm:-top-10 md:-top-16 lg:-top-20 xl:-top-32 2xl:-top-40">
            <img src="white_blob_1.svg" className="bg-no-repeat bg-cover w-full"/>
          </div>
          <div className="absolute top-8 w-[11%] hidden xl:block">
            <img src="toroid.svg" className="w-full"/>
          </div>
          <div className="absolute bottom-20 right-0 hidden xl:block">
            <img src="round_cube.svg" className="h-60"/>
          </div>
          <WhatIsHappening speed="100"/>
          <div className="relative z-0 top-14 sm:top-16 md:top-20 lg:-top-2 xl:-top-10 2xl:-top-20">
            <img src="white_blob_2.svg" className="w-full bg-no-repeat bg-cover"></img>
          </div>
        </section>
        <section id="summary" className="relative">
          <Summary/>
        </section>
        <section id="past event" className="relative">
          <PastEvent/>
        </section>
        <section id="split content" className="relative">
        <SplitContent
        topImageSrc="/cube.png"
        topTitle="Title 1"
        topBodyText="Body text goes here."
        bottomImageSrc="/cube.png"
        bottomTitle="Title 1"
        bottomBodyText="Body text goes here."
      />
        </section>
        <Partners/>
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
                <Button variant="outlined" size="medium" style={{borderColor: "#24314D", borderRadius: "9px"}} className="grow w-[13rem] h-[3rem] hover:bg-slate-200">
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
