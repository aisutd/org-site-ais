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
    <div className="flex flex-col items-center justify-center py-20 px-40 bg-ais-off-white relative">
      {/* absolutes */}
      <img
        src="/home_square_star.png"
        alt="Image 1"
        className="absolute bottom-20 right-5 h-64 w-64 z-0"
      />

      <img
        src="/team_yellow_star.png"
        alt="Image 1"
        className="absolute top-40 left-20 h-40 w-40 z-50"
      />

      {/* title */}
      <div className="flex items-center mb-8">
        <span className="text-2xl font-bold mr-10 text-ais-new-med-blue">&#8595;</span> {/* First down arrow */}
        <h1 className="text-2xl font-bold text-ais-new-med-blue">Learn ML and AI from Zero to Hero</h1> {/* Title text */}
        <span className="text-2xl font-bold ml-10 text-ais-new-med-blue">&#8595;</span> {/* Second down arrow */}
      </div>

      {/* top region */}
      <div className="flex items-center mb-12 ">
        <div className="relative w-3/4">
          <img src={topImageSrc} alt="Top Image" className="w-full h-auto" />
          <div className="absolute top-0 right-0 h-full w-1/4 bg-gradient-to-r from-transparent to-ais-white"></div>
        </div>
        <div className="text-left relative z-10">
          <h2 className="text-3xl font-bold text-ais-new-med-blue mb-2 -ml-8">MACHINE</h2>
          <h2 className="text-3xl font-bold text-ais-new-med-blue mb-2 -ml-8">LEARNING</h2>
          <h2 className="text-3xl font-bold text-ais-new-med-blue -ml-8">MONDAYS</h2>
          <div className="pt-16 ml-4 text-ais-new-med-blue">
            <p>{topBodyText}</p>
          </div>
        </div>
      </div>

      {/* bottom region */}
      <div className="flex items-center">
        <div className="text-left text-ais-new-med-blue">
          <h2 className="text-3xl font-bold mb-16">{bottomTitle}</h2>
          <p>{bottomBodyText}</p>
        </div>
        <img src={bottomImageSrc} alt="Bottom Image" className="w-3/4 h-auto ml-8 z-10" />
      </div>
    </div>
  );
};

export default SplitContent;
