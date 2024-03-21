import React from 'react';

// Define the props interface for SplitContent component
interface SplitContentProps {
  topImageSrc: string; // Source of the top image
  topBodyText: string; // Text for the top body
  bottomImageSrc: string; // Source of the bottom image
  bottomTitle: string; // Title for the bottom section
  bottomBodyText: string; // Text for the bottom body
}

// SplitContent component
const SplitContent: React.FC<SplitContentProps> = ({
  topImageSrc,
  topBodyText,
  bottomImageSrc,
  bottomTitle,
  bottomBodyText,
}) => {
  return (
    // Main container for SplitContent component
    <div className="flex flex-col items-center justify-center bg-ais-off-white relative pb-20 max-w-[1400px] sm:px-[4rem] 2xl:px-[0px] mx-auto">
      {/* Absolute positioned images */}
      <img
        src="/images/Shapes/home_square_star.png"
        alt="Image 1"
        className="absolute bottom-10 right-5 h-64 w-64 z-0 hidden sm:block"
      />

      <img
        src="/images/Shapes/team_yellow_star.png"
        alt="Image 1"
        className="absolute top-0 left-0 h-40 w-40 z-50 hidden md:block"
      />

      {/* Title section */}
      <div className="flex items-center mb-8 font-placard-bold tracking-wide">
        {/* First down arrow */}
        <span className="text-3xl font-bold mr-10 text-ais-new-med-blue">&#8595;</span>
        {/* Title */}
        <h1 className="text-3xl text-ais-new-med-blue text-center">Learn ML and AI from Zero to Hero</h1>
        {/* Second down arrow */}
        <span className="text-3xl font-bold ml-10 text-ais-new-med-blue">&#8595;</span>
      </div>

      {/* Top region */}
      <div className="flex items-center mb-12">
        <div className="relative">
          {/* Top image */}
          <img src={topImageSrc} alt="Top Image" className="h-auto hidden md:block"/>
          {/* Gradient overlay */}
          <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-r from-transparent to-ais-new-beige"></div>
        </div>
        {/* Top body text */}
        <div className="text-left relative z-10 md:w-1/3">
          <h2 className="text-3xl font-placard-bold tracking-widest text-ais-new-med-blue mb-2 text-center md:-ml-8 md:text-start">
            MACHINE <br className="hidden md:block"/>LEARNING <br className="hidden md:block"/>MONDAYS
          </h2>
          <div className="md:pt-16 ml-4 text-ais-new-med-blue">
            <p>{topBodyText}</p>
          </div>
        </div>
      </div>

      {/* Bottom region */}
      <div className="flex items-center">
        {/* Bottom body text */}
        <div className="text-left text-ais-new-med-blue">
          <h2 className="text-3xl font-placard-bold tracking-widest md:mb-16 text-center sm:text-start">{bottomTitle}</h2>
          <p>{bottomBodyText}</p>
        </div>
        {/* Bottom image */}
        <img src={bottomImageSrc} alt="Bottom Image" className="w-1/3 h-auto ml-8 z-10 hidden sm:block sm:opacity-0 md:w-2/3 md:opacity-100" />
      </div>
    </div>
  );
};

export default SplitContent;
