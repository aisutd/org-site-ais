import Head from 'next/head';
import { Container, Typography, Box } from '@mui/material';
import { maxWidth } from '@mui/system';
import React from "react";

/**
 * A page showing off the history of the organization and how far we've come.
 */
const spacing = 0;

export const AboutPage = () => {
  return (
    <div className="w-[100%] flex flex-col gap-[4rem] bg-ais-new-beige pt-[7rem] font-roboto pb-[5rem] px-[20px]">
      <div className="relative w-[100%] pt-[4rem] z-0">
        <div className="w-[100%] [text-shadow:0px_4px_4px_#00000040] text-[#361cff] font-placard-bold tracking-wide text-[96px] text-center">
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
      <div className="flex items-center justify-between w-full gap-[20px] lg:px-[5%] 2xl:px-[10%]">
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
      <div className="flex items-center justify-between relative w-full gap-[20px] xl:gap-[5rem] lg:px-[5%] 2xl:px-[10%]">
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
          <br/><br/>
          A month after Bezos{'\''} statement, the Artificial Intelligence Society (AIS) was born. Our organization began under the general fascination of the impact that AI has already made on the world. Whether that be through Netflix{'\''}s movie recommendations or Meta{'\''}s facial recognition software, it is incredible how ubiquitous AI has become in our daily lives. But as of today, many of the fascinating aspects of AI are largely unknown to the general public.
          <br/><br/>
          <b>We want to change that.</b>
          </p>
        </div>
      </div>
      <div className="[text-shadow:0px_4px_4px_#00000040] text-[#361cff] text-center font-placard-bold tracking-wide uppercase text-5xl sm:text-8xl">
        What We Do
      </div>
      <div className="font-placard-bold tracking-wide text-[#3e6eff] justify-items-center text-center gap-[20px] text-3xl sm:text-5xl grid grid-rows-6 sm:grid-cols-2 sm:grid-rows-3">
        <h2 className="">
          AI Mentorship
        </h2>
        <h2 className="">
          HackAI
        </h2>
        <h2 className="">
          Socials
        </h2>
        <img
          className="w-[29px] h-[37px] top-[11px] left-[380px] hidden"
          alt="Ep arrow down bold"
          src="/images/bluearrow.png"
        />
        <img
          className="top-[115px] left-[380px] w-[29px] h-[37px] hidden"
          alt="Ep arrow down bold"
          src="/images/bluearrow.png"
        />
        <img
          className="top-[11px] left-[330px] w-[29px] h-[37px] hidden"
          alt="Ep arrow down bold"
          src="/images/bluearrow.png"
        />
        <h2 className="">
          Workshops
        </h2>
        <h2 className="">
          AI51
        </h2>
        <h2 className="">
          Industry Events
        </h2>
        <img
          className="top-[14px] left-[460px] w-[29px] h-[37px] hidden"
          alt="Ep arrow down bold"
          src="/images/bluearrow.png"
        />
        <img
          className="top-[119px] left-[460px] w-[29px] h-[37px] hidden"
          alt="Ep arrow down bold"
          src="/images/bluearrow.png"
        />
        <img
          className="top-[224px] left-[460px] w-[29px] h-[37px] hidden"
          alt="Ep arrow down bold"
          src="/images/bluearrow.png"
        />
      </div>
    </div>
  );
};

export default AboutPage;






     