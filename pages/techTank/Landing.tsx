import * as React from 'react';
import { Typography } from '@mui/material';

export default function Landing() {
  return (
    <>
      <div className="flex flex-col items-center gap-[15vh] pt-[5rem] bg-hai-beige">
        <img src="/tech-tank/tech-tank-ski.png" className="
          object-contain -mt-[10vh] med:-mt-[15vh] h-[100vh] w-[160%] z-10
        "/>
        <img id="mountain background" src="/tech-tank/big-mountains.png" className="
          absolute z-0 w-[200%] object-cover med:object-fill
          mt-[33vh] xs:mt-[38vh] sm:mt-[43vh]
          h-[calc(67vh+106rem-160vw)] xs:h-[calc(62vh+82rem-90vw)] sm:h-[calc(57vh+84rem-90vw)] md:h-[calc(57vh+114rem-125vw)] med:h-[calc(57vh+96rem-90vw)] lg:h-[calc(57vh+90rem-70vw)] xl:h-[calc(57vh+60rem-30vw)]
          [mask-image:linear-gradient(rgba(0,0,0,1)90%,rgba(0,0,0,0.5))]
        "/>
        <button onClick={() => window.open("https://coda.io/form/Tech-Tank-Application_dQjHEJqhY-P", "_blank")}
          className="
            -mt-[30vh] med:-mt-[25vh]
            w-[16rem] h-[4rem] bg-white hover:scale-[1.07]
            text-hai-orange font-roboto text-[1.3rem] font-bold uppercase z-10
            rounded-[0.8rem] border-[3px] border-hai-orange shadow-md"
        >
          Register Now
        </button>
      </div>
    </>
  );
}
