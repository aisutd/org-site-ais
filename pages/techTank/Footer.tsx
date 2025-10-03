import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from '@mui/material';


function Footer() {
  return (
    <div className="relative -mt-[37vw] -z-10 bg-hai-cloud">
      <div className="
        w-[100vw] h-[100vw] pointer-events-none
        bg-[url('/tech-tank/CorrectFooter.png')] bg-contain bg-no-repeat
      "/>
      <div className="absolute top-[63.5vw] w-[100vw] items-center flex flex-col gap-[1vw]">
        <h1 className="ml-[0.7%] text-hai-orange text-[5.2vw] leading-none font-rust mt-[0vw] mb-[0.6vw]">Tech Tank</h1>
        <img src="/tech-tank/footer-2024-sign-bar.png" className="ml-[0.7%] w-[30%] h-auto"/>
        <img src="/tech-tank/see-you-on-the-slopes.png" className="ml-[0.7%] w-[30%] h-auto"/>
      </div>

      {/*footer icons and register button*/}
      <div className="absolute w-[100%] bottom-0 flex justify-center items-center gap-[5vw] mb-[2vw]">
        <FooterIcon src="/tech-tank/www-icon.svg" link="https://www.aisutd.org" />
        <FooterIcon src="/tech-tank/email-icon.svg" link="mailto:president@aisociety.io" />
        <FooterIcon src="/tech-tank/insta-icon.svg" link="https://www.instagram.com/utdais" />
        <button onClick={() => window.open("https://coda.io/form/Tech-Tank-Application_dQjHEJqhY-P", "_blank")} className="
          bg-white text-hai-orange font-roboto font-bold uppercase border-hai-orange hover:scale-[1.07] shadow-md border-[3px]
          w-[28vw] h-[8vw] rounded-[1.6vw] text-[2.6vw]
          sm:w-[20vw] sm:h-[6vw] sm:rounded-[1.2vw] sm:text-[2vw]
          md:w-[12rem] md:h-[3rem] md:rounded-[0.7rem] md:text-[1.1rem]
        ">
          Register Now
        </button>
        <FooterIcon src="/tech-tank/yt-icon.svg" link="https://www.youtube.com/@artificialintelligencesoci9846" />
        <FooterIcon src="/tech-tank/linkedin-icon.svg" link="https://www.linkedin.com/company/ais-utd" />
        <FooterIcon src="/tech-tank/discord-icon.svg" link="https://www.aisutd.org/discord" />
      </div>
    </div>
  );
}

export default Footer;

function FooterIcon({ src, link })
{
  return(
  <>
    <button onClick={() => window.open(link, "_blank")} className="
      h-[5vw] w-[5vw]
      sm:h-[4vw] sm:w-[4vw]
      md:h-[3vw] md:w-[3vw]
      max-h-[2rem] max-w-[2rem]
    ">
      <img src={src} className="object-contain w-full h-full" />
    </button>
  </>
  );
}