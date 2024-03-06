import Head from 'next/head';
import { Container, Typography, Box } from '@mui/material';
import { maxWidth } from '@mui/system';
import React, { useState } from "react";
import CollapsibleItem from "../components/about/CollapsibleItem.js";

/**
 * A page showing off the history of the organization and how far we've come.
 */
const spacing = 0;

export const AboutPage = () => {
  return (
    <div className =  "bg-ais-new-beige font-placard">
    <div className="w-[100%] flex flex-col gap-[4rem] pt-[7rem] pb-[5rem] max-w-[1400px] px-[4rem] 2xl:px-[0px] mx-auto">
      <div className="relative w-[100%] pt-[4rem] z-0">
        <div className="w-[100%] [text-shadow:0px_4px_4px_#00000040] text-[#361cff] font-bold text-[96px] text-center ">
          WHO WE ARE
        </div>
        <img
          className="absolute w-[134px] h-[136px] top-[54px] right-[3%] object-cover
            hidden lg:block"
          alt="img 1"
          src="/images/uplogo.png"
        />
        <img
          className="absolute w-[86px] h-[87px] top-[180px] right-[13%] object-cover
            hidden lg:block"
          alt="img 2"
          src="/images/firstlogo.png"
        />
        <img
          className="absolute w-[232px] h-[237px] top-0 xl:left-[3%] object-cover -z-10
            hidden lg:block"
          alt="first LOGO"
          src="/images/firstlogo.png"
        />
      </div>
      <div className="flex items-center justify-between w-full gap-[20px]">
        <div className="flex flex-col items-start gap-[20px]">
          <div className="relative font-placard-bold tracking-wide text-[#3e6eff] text-[48px] text-center self-center sm:text-left sm:self-start">
            OUR MISSION
          </div>
          <p className="font-text-1 text-[#293039]">
            Make artificial intelligence understandable and accessible to everyone. We want to demystify AI for all.
          </p>
        </div>
        <img className="w-[258px] min-w-[258px] h-[265.2px] object-cover rounded-[10px] opacity-0 hidden sm:block" alt="Placeholder image" src="/images/placeholder.png" />
      </div>
      <div className="flex items-center justify-between relative w-full gap-[20px] xl:gap-[5rem] ">
        <div className="text-center text-lg w-[258px] min-w-[258px] hidden sm:block">
          <img
            className="w-[258px] h-[265.97px] object-cover rounded-[10px]"
            alt="Placeholder image9"
            src="/images/founder.jpeg"
          />
          <p className="font-bold pt-[5px]">Brian Hoang</p>
          <p className="text-[#777777]">Founder (SE {'\''}18)</p>
        </div>
        <div className="flex flex-col items-end gap-[20px]">
          <div className="text-[#3e6eff] text-[48px] font-placard-bold tracking-wide self-center text-center sm:text-right sm:self-end">
            HOW WE STARTED
          </div>
          <p className="text-justify">
            Jeff Bezos, the founder of Amazon, stated in May of 2016 that society is on the cusp of entering the golden age of artificial intelligence and over the next two decades, human society and AI will become intertwined in a way that would seem like science fiction today. That the modern applications of AI, such as self-driving cars, Midjourney, and ChatGPT, only scratch the surface of what{'\''}s possible.
            <br /><br />
            A month after Bezos{'\''} statement, the Artificial Intelligence Society (AIS) was born. Our organization began under the general fascination of the impact that AI has already made on the world. Whether that be through Netflix{'\''}s movie recommendations or Meta{'\''}s facial recognition software, it is incredible how ubiquitous AI has become in our daily lives. But as of today, many of the fascinating aspects of AI are largely unknown to the general public.
            <br /><br />
            <b>We want to change that.</b>
          </p>
        </div>
      </div>
      <div className="[text-shadow:0px_4px_4px_#00000040] text-[#361cff] text-center font-placard-bold tracking-wide uppercase text-5xl sm:text-8xl">
        What We Do
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between gap-x-4 items-start bg-ais-new-beige pt-7 font-placard pb-5 px-4 max-w-[1400px] mx-auto">
        <div className="w-full sm:w-1/2 text-center">
          <CollapsibleItem
            title="AI Mentorship"
            sampleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <CollapsibleItem
            title="Socials"
            sampleText="Sample text for Socials."
          />
          <CollapsibleItem
            title="AI51"
            sampleText="Sample text for AI51."
          />
        </div>
        <div className="w-full sm:w-1/2 text-center">
          <CollapsibleItem
            title="HackAI"
            sampleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <CollapsibleItem
            title="Workshops"
            sampleText="Sample text for Workshops."
          />
          <CollapsibleItem
            title="Industry Events"
            sampleText="Sample text for Industry Events."
          />
        </div>
      </div>
    </div>
</div>
  );
};

export default AboutPage;