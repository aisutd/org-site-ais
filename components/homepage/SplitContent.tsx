import React from 'react';

interface SplitContentProps {
  topImageSrc: string;
  topBodyText: string;
  bottomImageSrc: string;
  bottomTitle: string;
  bottomBodyText: string;
}

const SplitContent: React.FC<SplitContentProps> = ({
  topImageSrc,
  topBodyText,
  bottomImageSrc,
  bottomTitle,
  bottomBodyText,
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-ais-off-white relative pb-20 px-[4rem] lg:px-[10rem]">
      {/* absolutes */}
      <img
        src="/home_square_star.png"
        alt="Image 1"
        className="absolute bottom-10 right-5 h-64 w-64 z-0 hidden sm:block"
      />

      <img
        src="/team_yellow_star.png"
        alt="Image 1"
        className="absolute top-0 left-0 h-40 w-40 z-50 hidden md:block"
      />

      {/* title */}
      <div className="flex items-center mb-8 font-placard-bold tracking-wide">
        <span className="text-3xl font-bold mr-10 text-ais-new-med-blue">&#8595;</span> {/* First down arrow */}
        <h1 className="text-3xl text-ais-new-med-blue text-center">Learn ML and AI from Zero to Hero</h1> {/* Title text */}
        <span className="text-3xl font-bold ml-10 text-ais-new-med-blue">&#8595;</span> {/* Second down arrow */}
      </div>

      {/* top region */}
      <div className="flex items-center mb-12">
        <div className="relative">
          <img src={topImageSrc} alt="Top Image" className="h-auto hidden md:block"/>
          <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-r from-transparent to-ais-new-beige"></div>
        </div>
        <div className="text-left relative z-10 md:w-1/3">
          <h2 className="text-3xl font-placard-bold tracking-widest text-ais-new-med-blue mb-2 text-center md:-ml-8 md:text-start">
            MACHINE <br className="hidden md:block"/>LEARNING <br className="hidden md:block"/>MONDAYS
          </h2>
          <div className="md:pt-16 ml-4 text-ais-new-med-blue">
            <p>{topBodyText}</p>
          </div>
        </div>
      </div>

      {/* bottom region */}
      <div className="flex items-center">
        <div className="text-left text-ais-new-med-blue">
          <h2 className="text-3xl font-placard-bold tracking-widest md:mb-16 text-center sm:text-start">{bottomTitle}</h2>
          <p>{bottomBodyText}</p>
        </div>
        <img src={bottomImageSrc} alt="Bottom Image" className="w-1/3 h-auto ml-8 z-10 hidden sm:block sm:opacity-0 md:w-2/3 md:opacity-100" />
      </div>
    </div>
  );
};

export default SplitContent;
