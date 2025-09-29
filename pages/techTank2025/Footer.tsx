import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from '@mui/material';


function FooterNew() {
  return (

    <div className="relative -mt-[50] -z-10 bg-hai-cloud">
      
      <div className="
          w-[100vw] h-[20vw] pointer-events-none
          bg-techTank-dark-green bg-contain bg-no-repeat
        "/>
      <div className="absolute top-[5vw] w-[100vw] items-center flex flex-col gap-[1vw] z-10">
        <img src="/techTank2025/see-you.png" className="ml-[0.7%] w-[20%] h-auto"/>
        <img src="/techTank2025/proudly-presented.png" className="ml-[0.7%] w-[12%] h-auto"/>
      </div>

      <img src="/techTank2025/flamingo.png" className="ml-[0.7%] w-[20%] h-auto absolute bottom-0 right-0 z-20"/>
      <div className="absolute w-[100%] bottom-0 flex justify-end items-center gap-[5vw] z-10">
        <img src="/techTank2025/bottom-right-leaves.png" className="ml-[0.7%] w-[18%] h-auto"/>
      </div>
      

      <img src="/techTank2025/top-right.png" className="ml-[0.7%] w-[18%] h-auto absolute top-0 right-0 z-20"/>
      <img src="/techTank2025/snake.png" className="ml-[0.7%] w-[11%] h-auto absolute top-[0vw] right-[12vw] z-10"/>
      <img src="/techTank2025/vines.png" className="ml-[0.7%] w-[20%] h-auto absolute top-0 right-[18vw] z-15"/>
      <img src="/techTank2025/top.png" className="ml-[0.7%] w-[23%] h-auto absolute top-0 right-[50vw] z-15"/>

      <img src="/techTank2025/frog.png" className="ml-[0.7%] w-[7%] h-auto absolute top-0 left-[6vw] z-20"/>
      <img src="/techTank2025/top-left.png" className="ml-[-0.7%] w-[23%] h-auto absolute top-0 left-[0vw] z-15"/>
      <img src="/techTank2025/bottom-left.png" className="ml-[-0.7%] w-[15%] h-auto absolute bottom-0 left-[0vw] z-15"/>

      <img src="/techTank2025/ape.png" className="ml-[-0.7%] w-[12%] h-auto absolute bottom-0 left-[25vw] z-15"/>
      <img src="/techTank2025/bottom.png" className="ml-[-0.7%] w-[30%] h-auto absolute bottom-0 left-[18vw] z-15"/>


      <img src="/techTank2025/leaves2.png" className="ml-[-0.7%] w-[9%] h-auto absolute -bottom-10 right-[28vw] -rotate-[100deg] z-14"/>
      <img src="/techTank2025/leaves2.png" className="ml-[-0.7%] w-[10%] h-auto absolute bottom-0 right-[25.5vw] z-9"/>
      <img src="/techTank2025/leaves1.png" className="ml-[-0.7%] w-[10%] h-auto absolute bottom-0 right-[23vw]  z-10"/>

      <img src="/techTank2025/ais-tech-tank.png" className="ml-[-0.7%] w-[10%] h-auto absolute bottom-0 left-[2vw] z-10"/>
      <img src="/techTank2025/copyrights.png" className="ml-[-0.7%] w-[17%] h-auto absolute bottom-[1vw] right-[1ivw] z-30"/>

    </div>
  );
}

export default FooterNew;