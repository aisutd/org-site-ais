import * as React from 'react';

function MobileSponsors() {
  return (
    <div className="w-full bg-techTank-yellow py-8 px-4 flex flex-col items-center gap-y-6">

      <h2 className="text-4xl text-stroke font-bold font-sailors text-[#2B764E]">
        INDUSTRY SPONSORS
      </h2>

      <div className="w-full flex flex-row justify-center items-start gap-x-[5%] md:gap-x-[10%]">
        
        <div className="flex flex-col items-center text-center">
          <img 
            src="/techTank2025/paul-pfp.jpeg" 
            alt="Paul Stubenbordt"
            className="w-[28vw] h-[28vw] max-w-[150px] max-h-[150px] rounded-full object-cover"
          />
          <div className="mt-2 text-[#2B764E] font-sailors">
            <p className="text-lg font-bold">
              Paul Stubenbordt
            </p>
            <p className="text-base">
              Owner, Denali Creative
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img 
            src="/techTank2025/jacqueline-pfp.jpeg" 
            alt="Jacqueline Karlin"
            className="w-[28vw] h-[28vw] max-w-[150px] max-h-[150px] rounded-full object-cover"
          />
          <div className="mt-2 text-[#2B764E] font-sailors">
            <p className="text-lg font-bold">
              Jacqueline Karlin
            </p>
            <p className="text-base">
              Ventures Advisor, PayPal
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img 
            src="/techTank2025/duri-pfp.jpeg" 
            alt="Duri Chitayat"
            className="w-[28vw] h-[28vw] max-w-[150px] max-h-[150px] rounded-full object-cover"
          />
          <div className="mt-2 text-[#2B764E] font-sailors">
            <p className="text-lg font-bold">
              Duri Chitayat
            </p>
            <p className="text-base">
              Advisor, WithUrban, LLC
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MobileSponsors;