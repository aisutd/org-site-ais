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
        <div className="inline-flex flex-col h-[2070px] items-start relative bg-variable-collection-bg">
          <div className="relative w-[1440px] h-[267px] bg-[#fff8f3]">
      <div className="relative w-[1213px] h-[259px] left-[107px]">
        <div className="flex flex-col w-[1200px] items-center gap-[16px] absolute top-0 left-[13px]">
          <div className="relative self-stretch w-full flex-[0_0_auto]" />
        </div>
        <div className="absolute w-[1200px] top-[89px] left-[13px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Proxima_Nova-Bold',Helvetica] text-[#361cff] font-bold text-[96px] text-center tracking-[0] leading-[115.2px]">
          WHO WE ARE
        </div>
        <img
           className="absolute w-[134px] h-[136px] top-[54px] left-[1035px] object-cover"
           alt="img 1"
           src="/images/uplogo.png" />
         <img
           className="w-[86px] h-[87px] top-[180px] left-[950px] absolute object-cover"
           alt="img 2"
           src="/images/firstlogo.png" />
         <img
           className="w-[107px] h-[48px] top-[89px] left-[92px]absolute object-cover"
           alt="img 3"
           src="/images/newlogo.png" />
          <img
            className=" w-[232px] h-[237px] top-[89px] left-[92px] object-cover"
            alt="first LOGO"
            src="/images/firstlogo.png"
           /> 
      </div>
    </div>
          <div className="relative self-stretch w-full h-[1360px] bg-[#fff8f3]">
            <div className="flex flex-col w-[1200px] items-start gap-[80px] absolute top-[23px] left-[120px]">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col w-[830px] items-start gap-[20px] relative">
                  <div className="relative w-[694px] mt-[-1.00px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-[#3e6eff] text-[48px] tracking-[0] leading-[57.6px]">
                    OUR MISSION
                  </div>
                  <p className="relative w-[827px] font-text-1 font-[number:var(--text-1-font-weight)] text-[#293039] text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                  </p>
                </div>
                <img className="relative w-[258px] h-[265.2px] object-cover" alt="Placeholder image" src="/images/placeholder.png" />
              </div>
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-[258px] h-[265.97px] object-cover"
                  alt="Placeholder image9"
                  src="/images/placeholder.png"
                />
                <div className="flex flex-col w-[830px] h-[222px] items-end gap-[20px] relative">
                  <div className="relative w-[694px] mt-[-1.00px] text-[#3e6eff] text-[48px] text-right leading-[57.6px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold tracking-[0]">
                    HOW WE STARTED
                  </div>
                  <p className="relative w-[830px] font-text-1 font-[number:var(--text-1-font-weight)] text-[#293039] text-[length:var(--text-1-font-size)] text-right tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-[#361cff] absolute w-[1200px] top-[748px] left-[120px] text-variable-collection-blue3 text-[96px] text-center leading-[115.2px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold tracking-[0]">
              WHAT WE DO
            </div>
            <div className=" text-[#3e6eff] absolute w-[264px] h-[162px] top-[1061px] left-[263px]">
              <div className="text-[#3e6eff] absolute top-0 left-0 [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-variable-collection-blue2 text-[48px] tracking-[0] leading-[57.6px] whitespace-nowrap">
                AIM PROGRAM
              </div>
              <div className=" text-[#3e6eff] absolute top-[104px] left-[77px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-variable-collection text-[48px] tracking-[0] leading-[57.6px] whitespace-nowrap">
                AI51
              </div>
              <img
                className="absolute w-[29px] h-[37px] top-[11px] left-[380px]"
                alt="Ep arrow down bold"
                src="/images/bluearrow.png"
              />
              <img
                className="top-[115px] left-[380px] absolute w-[29px] h-[37px]"
                alt="Ep arrow down bold"
                src="/images/bluearrow.png"
              />
            </div>
            <div className="text-[#3e6eff] absolute w-[160px] h-[58px] top-[954px] left-[314px]">
              <div className="absolute top-0 left-0 [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-variable-collection-blue2 text-[48px] tracking-[0] leading-[57.6px] whitespace-nowrap">
                HACKAI
              </div>
              <img
                className="top-[11px] left-[330px] absolute w-[29px] h-[37px]"
                alt="Ep arrow down bold"
                src="/images/bluearrow.png"
              />
            </div>
            <div className="text-[#3e6eff] absolute w-[337px] h-[268px] top-[954px] left-[847px]">
              <div className="absolute top-0 left-[37px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-variable-collection-blue2 text-[48px] text-center tracking-[0] leading-[57.6px] whitespace-nowrap">
                WORKSHOPS
              </div>
              <div className="absolute top-[106px] left-0 [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-variable-collection-blue2 text-[48px] text-center tracking-[0] leading-[57.6px] whitespace-nowrap">
                INDUSTRY EVENTS
              </div>
              <div className="absolute top-[210px] left-[74px] [font-family:'Proxima_Nova-Bold',Helvetica] font-bold text-variable-collection-blue2 text-[48px] text-center tracking-[0] leading-[57.6px] whitespace-nowrap">
                SOCIALS
              </div>
              <img
                className="top-[14px] left-[460px] absolute w-[29px] h-[37px]"
                alt="Ep arrow down bold"
                src="/images/bluearrow.png"
              />
              <img
                className="top-[119px] left-[460px] absolute w-[29px] h-[37px]"
                alt="Ep arrow down bold"
                src="/images/bluearrow.png"
              />
              <img
                className="top-[224px] left-[460px] absolute w-[29px] h-[37px]"
                alt="Ep arrow down bold"
                src="/images/bluearrow.png"
              />
            </div>
          </div>
        </div>
      );
    };
    
    export default AboutPage;






     