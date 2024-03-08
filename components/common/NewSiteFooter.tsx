import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Box, Button, TextField, Typography } from '@mui/material';
import "@fontsource/hind-siliguri";

function NewSiteFooter()
{
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
  
    <div className="bg-ais-new-beige mx-auto py-20 sm:px-[5vw] md:px-20 relative text-black">
      <div className="text-center items-center justify-between flex flex-col gap-[1.25rem] sm:flex-row sm:text-left">
        <div>
          <Typography className="font-placard text-5xl font-bold tracking-widest">
            HackAI
          </Typography>
          <Typography className="font-roboto text-lg">
            Demystifying Artificial Intelligence
          </Typography>
        </div>
        
        <div className="flex flex-col font-roboto text-md text-center gap-1">
          Connect with us!
          <div className="flex gap-2 place-items-center">
            <button
              onClick={() => window.open("https://www.aisutd.org", "_blank")}
              className="h-[1.5rem] w-[1.5rem]"
            >
              <img src="/images/Logos/ai_brain.svg" className="object-contain"/>
            </button>
            <button
              onClick={() => window.open("https://www.instagram.com/utdais", "_blank")}
              className="h-[1.5rem] w-[1.5rem]"
            >
              <img src="/images/instalogo.png" className="object-contain"/>
            </button>
            <button
              onClick={() => window.open("https://www.aisutd.org/discord", "_blank")}
             className="h-[1.5rem] w-[1.5rem]"
            >
            <img src="/images/Logos/bluediscord.png" className="object-contain"/>
            </button>
            <button
              onClick={() => window.open("https://www.linkedin.com/company/ais-utd", "_blank")}
              className="h-[1.5rem] w-[1.5rem]"
            >
              <img src="/images/linkedinlogo.png" className="object-contain"/>
            </button>
            <button
              onClick={() => window.open("https://www.youtube.com/@artificialintelligencesoci9846", "_blank")}
              className="h-[1.5rem] w-[1.5rem]"
            >
              <img src="/images/ytlogo.png" className="object-contain"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewSiteFooter;