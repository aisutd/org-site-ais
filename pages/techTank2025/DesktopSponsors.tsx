import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from '@mui/material';
import { deserialize } from 'v8';


function DesktopSponsors() {
  return (

    <div className="relative -mt-[50] -z-10 overflow-hidden">
        <div className="
          w-[100vw] h-[30vw] pointer-events-none
          bg-techTank-yellow bg-contain bg-no-repeat
        "/>

        <div className="absolute top-[1.5vw] bottom-[5vw] w-[100vw] items-center flex flex-col z-50">
            <text className="text-[35px] text-stroke text-bold font-sailors text-[#2B764E]">INDUSTRY SPONSORS</text>
            <div className=" top-[5.5vw] bottom-[5vw] w-[100vw] items-center flex flex-row justify-center gap-x-[10%] z-50">
                <div className="flex flex-col items-center">
                    <img src="/techTank2025/paul-pfp.jpeg" className="ml-[0.7%] w-[150px] h-[150px] mx-[2%] rounded-full"/>   
                    <text className="text-[15px] text-center text-[#2B764E] font-sailors mt-[1vw]">Paul Stubenbordt<br/>Owner, Denali Creative</text>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/techTank2025/jacqueline-pfp.jpeg" className="ml-[0.7%] w-[150px] h-[150px] mx-[2%] rounded-full"/>   
                    <text className="text-[15px] text-center text-[#2B764E] font-sailors mt-[1vw]">Jacqueline Karlin<br/>Ventures Advisor, PayPal</text>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/techTank2025/duri-pfp.jpeg" className="ml-[0.7%] w-[150px] h-[150px] mx-[2%] rounded-full"/>   
                    <text className="text-[15px] text-center text-[#2B764E] font-sailors mt-[1vw]">Duri Chitayat<br/>Advisor, WithUrban, LLC</text>
                </div>
            </div>
        </div>

        

    </div>     
  );
}

export default DesktopSponsors;