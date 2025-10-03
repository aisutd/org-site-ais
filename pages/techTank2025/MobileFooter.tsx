import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from '@mui/material';
import { deserialize } from 'v8';


function MobileFooter() {
  return (

    <div className="relative -mt-[50] -z-10 overflow-hidden">
        <div className="
          w-[100vw] h-[80vw] pointer-events-none
          bg-techTank-dark-green bg-contain bg-no-repeat
        "/>
        
        <div className="absolute top-[18vw] w-[100vw] items-center flex flex-col z-50">
            <text className='font-sailors text-techTank-white text-[22px]'>SEE YOU AT</text>
            <img src="/techTank2025/tech-tank-footer.svg" className="ml-[0.7%] w-[70%] h-auto"/>
            <text className='font-sailors text-techTank-white text-[17px] -mt-[11vw]'>2025</text>
            <text className='font-sailors text-techTank-lighter-green text-[12px] mt-[3vw] text-center'>PROUDLY PRESENTED WITH ❤️<br/>BY AIS UTD</text>
        </div>

        <div className="absolute bottom-[3vw] w-[100vw] items-center flex flex-col z-50">
            <text className='font-sailors text-techTank-lighter-green text-[13px] text-center'>ALL COPYRIGHTS RESERVED BY AIS 2025</text>
        </div>

        <img src="/techTank2025/mobile-flamingo.svg" className="ml-[0.7%] w-[55%] h-auto absolute bottom-0 right-0 z-20"/>
        <img src="/techTank2025/bottom-right-leaves.svg" className="ml-[0.7%] w-[22%] h-auto absolute bottom-0 right-0 z-10"/>

        <img src="/techTank2025/vines.svg" className="ml-[0.7%] w-[50%] h-auto absolute top-10 -right-[25vw] z-10 rotate-[16.61deg]"/>
        <img src="/techTank2025/snake.svg" className="ml-[0.7%] w-[37%] h-auto absolute -top-[9vw] -right-[14vw] z-20 rotate-[-30.28deg]"/>
        <img src="/techTank2025/top-right.svg" className="ml-[0.7%] w-[50%] h-auto absolute top-0 right-[0vw] z-15"/>

        <img src="/techTank2025/bottom-right-leaves.svg" className="ml-[0.7%] w-[44%] h-auto absolute top-[-20vw] right-[38vw] z-15 rotate-[303.17deg] scale-y-[-1]"/>
        <img src="/techTank2025/bottom.svg" className="ml-[0.7%] w-[80%] h-auto absolute top-[15vw] -left-[40vw] z-20 -rotate-[65.86deg]"/>
        <img src="/techTank2025/ais-x-techtank.svg" className="ml-[0.7%] w-[30%] h-auto absolute top-[1vw] left-[1vw] z-20"/>
        <img src="/techTank2025/ape.svg" className="ml-[0.7%] w-[20%] h-auto absolute top-5 -left-[6vw] -rotate-[100deg] z-14"/>

        <img src="/techTank2025/bottom-right-leaves.svg" className="ml-[0.7%] w-[50%] h-auto absolute -bottom-10 -left-[10vw] z-14 scale-x-[-1]"/>
        <img src="/techTank2025/frog.svg" className="ml-[0.7%] w-[25%] h-auto absolute bottom-6 -left-[10vw] z-15"/>

        <img src="/techTank2025/sprout.svg" className="ml-[-0.7%] w-[15%] h-auto absolute -bottom-10 right-[40vw] -rotate-[100deg] z-14"/>
      <img src="/techTank2025/sprout.svg" className="ml-[-0.7%] w-[19%] h-auto absolute -bottom-[7vw] right-[37.9vw] z-14 rotate-[-15deg]"/>
      <img src="/techTank2025/sprout.svg" className="ml-[-0.7%] w-[17%] h-auto absolute -bottom-[7vw] right-[37.5vw]  z-20 rotate-[40deg]"/>

    </div>
     
  );
}

export default MobileFooter;