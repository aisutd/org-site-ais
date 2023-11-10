import Head from 'next/head';
import { Container, Typography, Box } from '@mui/material';
import { maxWidth } from '@mui/system';

/**
 * A page showing off the history of the organization and how far we've come.
 */
const spacing = 10;


export default function AboutPage() {
   return (
     <><div className="relative w-[1440px] h-[267px] bg-[#fff8f3]">
       <div className="relative w-[1213px] h-[259px] left-[107px]">
         <div className="flex flex-col w-[1200px] items-center gap-[16px] absolute top-[300px] left-[13px]">
           <div className="relative self-stretch w-full flex-[0_0_auto]" />
         </div>
         <div className="absolute w-[1200px] top-[89px] left-[13px] [text-shadow:0px_4px_4px_#00000040] font-h1 font-[number:var(--h1-font-weight)] text-[#3e6eff] text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
           WHO ARE WE?
         </div>
         <img
           className="absolute w-[134px] h-[136px] top-[54px] left-[1035px] object-cover"
           alt="img 1"
           src="/images/uplogo.png" />
         <img
           className="w-[86px] h-[87px] top-[165px] left-[882px] absolute object-cover"
           alt="img 2"
           src="/images/firstlogo.png" />
         <img
           className="w-[107px] h-[48px] top-[89px] left-[92px]absolute object-cover"
           alt="img 3"
           src="/images/newlogo.png" />
          <img
            className=" w-[232px] h-[237px] top-[89px] left-[92px] object-cover"
            alt="first LOGO"
            src="/images/firstlogo.png" /> 
       </div>
     </div><div className="flex flex-col w-[1200px] items-start gap-[80px] relative bg-[#fff8f3]">
         <div className="flex items-center justify-between self-stretch w-full relative flex-[0_0_auto]">
           <div className="inline-flex flex-col items-start gap-[40px] relative flex-[0_0_auto]">
             <div className="relative w-[694px] mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#3e6eff] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)] ">
               OUR MISSION
             </div>
             <p className="relative w-[830px] font-text-1 font-[number:var(--text-1-font-weight)] text-[#293039] text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
               ea commodo consequat.
             </p>
           </div>
           <img className="relative w-[269px] h-[277.01px] object-cover" alt="img 4" src="/images/placeholder.png" />
         </div>
         <div className="flex items-center justify-between self-stretch w-full relative flex-[0_0_auto]">
           <img
             className="relative w-[269px] h-[277px] object-cover"
             alt="img 5"
             src="/images/placeholder.png" />
           <div className="inline-flex flex-col items-end gap-[40px] relative flex-[0_0_auto]">
             <div className="relative w-[694px] mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#3e6eff] text-[length:var(--h2-font-size)] text-right tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
               HOW WE STARTED
             </div>
             <p className="relative w-[830px] font-text-1 font-[number:var(--text-1-font-weight)] text-[#293039] text-[length:var(--text-1-font-size)] text-right tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
               ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur.
             </p>
           </div>
         </div>
       </div></>
  );
};
  