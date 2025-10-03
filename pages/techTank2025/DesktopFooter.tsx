import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from '@mui/material';
import { deserialize } from 'v8';


function DesktopFooter() {
  return (

    <div className="relative -mt-[50] -z-10 overflow-hidden">
      
      <div className="
          w-[100vw] h-[20vw] pointer-events-none
          bg-techTank-dark-green bg-contain bg-no-repeat
        "/>

      <div className="absolute top-[5vw] bottom-[5vw] w-[100vw] items-center flex flex-col z-50">
        <text className='font-sailors text-techTank-white text-[25px]'>SEE YOU AT</text>
        <img src="/techTank2025/tech-tank-footer.svg" className="ml-[0.7%] w-[20%] h-auto"/>
        <text className='font-sailors text-techTank-white text-[20px] -mt-[3.5vw]'>2025</text>
        <text className='font-sailors text-techTank-lighter-green text-[15px] text-center'>PROUDLY PRESENTED WITH ❤️<br/>BY AIS UTD</text>
      </div>

      <div className="absolute bottom-[1vw] w-[100vw] items-center flex flex-col z-50">
        <text className='font-sailors text-techTank-lighter-green text-[15px] text-center'>ALL COPYRIGHTS RESERVED BY AIS 2025</text>
      </div>

      <img src="/techTank2025/flamingo.svg" className="ml-[0.7%] w-[42%] h-auto absolute bottom-[-23vw] right-[-20vw] z-20"/>
      <img src="/techTank2025/bottom-right-leaves.svg" className="ml-[0.7%] w-[14.5%] h-auto absolute bottom-0 right-0 z-10 rotate-[4.61deg]"/>

      <img src="/techTank2025/top-right.svg" className="ml-[0.7%] w-[18%] h-auto absolute top-0 right-0 z-10"/>
      <img src="/techTank2025/snake.svg" className="ml-[0.7%] w-[11%] h-auto absolute top-[0vw] right-[12vw] z-10 rotate-[-30.28deg]"/>
      <img src="/techTank2025/vines.svg" className="ml-[0.7%] w-[20%] h-auto absolute top-[-3vw] right-[19vw] z-15 rotate-[16.61deg]"/>

      <img src="/techTank2025/bottom-right-leaves.svg" className="ml-[0.7%] w-[18%] h-auto absolute top-[-8vw] right-[50vw] z-15 rotate-[303.17deg] scale-y-[-1]"/>

      <img src="/techTank2025/frog.svg" className="ml-[0.7%] w-[7%] h-auto absolute top-[-1.5vw] left-[6vw] z-20 rotate-[45.86deg]"/>
      <img src="/techTank2025/top-right.svg" className="ml-[-0.7%] w-[23%] h-auto absolute top-[-0.1vw] left-[0vw] z-15 scale-x-[-1]"/>
      <img src="/techTank2025/bottom-right-leaves.svg" className="ml-[-0.7%] w-[15%] h-auto absolute bottom-0 left-[0vw] z-15 scale-x-[-1]"/>

      <img src="/techTank2025/ape.svg" className="ml-[-0.7%] w-[12%] h-auto absolute bottom-[-10vw] left-[25vw] z-15 rotate-[190.65deg]"/>
      <img src="/techTank2025/bottom.svg" className="ml-[-0.7%] w-[30%] h-auto absolute bottom-[-3vw] left-[18vw] z-15 scale-y-[-1] scale-x-[-1] rotate-[9deg]"/>


      <img src="/techTank2025/sprout.svg" className="ml-[-0.7%] w-[7%] h-auto absolute -bottom-10 right-[28vw] -rotate-[100deg] z-14"/>
      <img src="/techTank2025/sprout.svg" className="ml-[-0.7%] w-[9%] h-auto absolute bottom-[-3.5vw] right-[25.9vw] z-14 rotate-[-15deg]"/>
      <img src="/techTank2025/sprout.svg" className="ml-[-0.7%] w-[8%] h-auto absolute bottom-[-3.5vw] right-[25.5vw]  z-20 rotate-[40deg]"/>

      <img src="/techTank2025/ais-x-techtank.svg" className="ml-[-0.7%] w-[10%] h-auto absolute bottom-[0.5vw] left-[2vw] z-10"/>
      <text className='font-sailors text-techTank-lighter-green text-[15px] absolute bottom-[0.5vw] right-[1vw] z-20'>ALL COPYRIGHTS RESERVED BY AIS 2025</text>

    </div>
  );
}

export default DesktopFooter;