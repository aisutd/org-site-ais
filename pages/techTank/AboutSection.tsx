import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import {Typography } from '@mui/material';
import "@fontsource/hind-siliguri";

function AboutSection()
{
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="
      text-hai-dark-blue
      -mt-[5rem] mb-[10rem] translate-y-[5rem]

      h-[calc(106rem-160vw)] xs:h-[calc(82rem-90vw)] sm:h-[calc(84rem-90vw)] md:h-[calc(114rem-125vw)] med:h-[calc(96rem-90vw)] lg:h-[calc(90rem-70vw)] xl:h-[calc(60rem-30vw)]
    ">
      <div className="mx-auto sm:px-8 md:px-32 lg:px-44 font-placard z-0">
        <div className="block md:flex">
          <div className="mb-6 md:mb-2 md:mr-14">
            <p className="font-placard text-center md:text-left mb-2 md:mb-4 text-4xl font-bold">About</p>
          </div>
          <div 
            ref={ref}
            className="mx-6 md:mx-0 text-center md:text-left"
          >
            <div 
              className="mb-10 md:mb-6"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.0s"
              }}
            >
              <div className="text-xl md:text-2xl font-bold flex justify-center items-center md:justify-start md:items-start">
                <img src="/tech-tank/target.svg" />
                <div className="font-placard font-normal text-2xl ml-2 md:text-3xl md:mb-2">Our Mission</div>
              </div>
              <div className="text-lg font-roboto">
              We hope to demystify this special niche in computer science and bring it forward to all students through an AI-related conference. We aim for our events to provide opportunities for students to learn about the field and connect with experienced professionals who can further guide them in their AI journey.
              </div>
            </div>
            <div 
              className="mb-10 md:mb-6"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
            >
              <div className="text-xl md:text-2xl font-bold flex justify-center items-center md:justify-start md:items-start">
                <img src="/tech-tank/brain.png" className="h-[35px]"/>
                <div className="font-placard font-normal text-2xl ml-2 md:text-3xl md:mb-2">What is Tech Tank?</div>
              </div>
              <div className="text-lg font-roboto">
                Student-run conference organized by the Artificial Intelligence Society (AIS) at UTD, designed to empower students with the knowledge and resources needed to both build artificial intelligence-related projects and understand their impact in the real world. Our goal is to provide UTD students with a fun-filled, engaging day that will inspire them and ignite their passion for AI.
              </div>
            </div>
            <div 
              className="mb-10 md:mb-6"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
              }}
            >
              <div className="text-xl md:text-2xl font-bold flex justify-center items-center md:justify-start md:items-start">
                <img src="/tech-tank/handshake.svg" className="md:pt-[6px]"/>
                <div className="font-placard font-normal text-2xl ml-2 md:text-3xl md:mb-2">For Sponsors</div>
              </div>
              <div className="text-lg font-roboto">
                Sponsoring Tech Tank is a win-win opportunity. Your contribution can help enable participants to interact with your company giving you direct engagement with students, opportunities for building brand recognition, and even a chance to hear some creative ideas and solutions.
              </div>
              <div className="hidden text-lg font-roboto">
                While a one-day hackathon is far from a complete zero-to-master learning experience, it is a great first step for students of all backgrounds. HackAI is our largest event of the year, and it never fails to build communities as students make new friends, share memories with fellow hackers, and enjoy a truly light and welcoming atmosphere.
                <br/><br/>
                We like to market how HackAI is the largest AI hackathon in Texas, but for us, it isn&apos;t about the numbers. Our driven officer team at AIS works tirelessly throughout the year to ensure we provide the best quality experience for our hackers so that HackAI will be a day you never forget.
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default AboutSection;
