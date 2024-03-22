import React from 'react';

// PastEvent component
function PastEvent() {
  return (
    <div className="
      relative py-20 gap-[10vw] items-center justify-items-center max-w-[1400px] px-[4rem] 2xl:px-[0px] mx-auto 
      flex flex-col sm:grid sm:grid-cols-2
    ">
      {/* Left side content */}
      <div className="w-full flex flex-col justify-center">
        {/* Event title */}
        <h2 className="
          text-4xl text-hai-navy text-center font-placard-bold tracking-wide
        ">
          HACK AI
        </h2>
        {/* Event description */}
        <p className="hidden sm:block text-base text-hai-gray text-justify pt-10">
          Last April, HackAI’s fourth iteration featured various guest speakers, workshops, and activities to engage students throughout the weekend.
          <br/><br/>
          Participants had the option of competing in four different tracks: athletes, brainiacs, saints, and creatives, each with their own tailored prompts.
        </p>
        {/* Space for mobile layout */}
        <div className="h-10 hidden sm:block lg:hidden"/>
        {/* Additional event description */}
        <p className="hidden lg:block text-base text-hai-gray text-justify pb-10 font-roboto">
          <br/>
          HackAI ‘23 saw a record 600+ applications from students of various majors and featured sponsorships from Amazon Web Services (AWS), the Dallas Mavericks, Geico, and more!
        </p>
        {/* Image for desktop layout */}
        <div className="relative z-0 hidden sm:flex justify-center">
          <img className="text-center w-full md:w-9/12 z-0" src="/images/HackAI/stats.png" alt="about hackai chips"/>
        </div>
      </div>
      <img src="/images/HackAI/past_event_pic.png" alt="Image" className="object-contain"/>
      <div className="relative z-0 flex justify-center sm:hidden">
        <img className="text-center w-full md:w-9/12 z-0" src="/images/HackAI/stats.png" alt="about hackai chips" />
      </div>
    </div>
  );
}

export default PastEvent;
