import React from 'react';

interface SplitContentProps {
  topImageSrc: string;
  topTitle: string;
  topBodyText: string;
  bottomImageSrc: string;
  bottomTitle: string;
  bottomBodyText: string;
}

const SplitContent: React.FC<SplitContentProps> = ({
  topImageSrc,
  topTitle,
  topBodyText,
  bottomImageSrc,
  bottomTitle,
  bottomBodyText,
}) => {
  return (
    <div className="flex flex-col p-20 bg-gray-300">
      {/* Top Region */}
      <div className="flex items-center mb-12">
        {/* Image on the left */}
        <img src={topImageSrc} alt="Top Image" className="w-1/2 h-auto mr-8" />
        {/* Text on the right */}
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-4">{topTitle}</h2>
          <p>{topBodyText}</p>
        </div>
      </div>

      {/* Bottom Region */}
      <div className="flex items-center">
      <div className="text-right">
          <h2 className="text-2xl font-bold mb-4">{bottomTitle}</h2>
          <p>{bottomBodyText}</p>
        </div>
        {/* Image on the right */}
        <img src={bottomImageSrc} alt="Bottom Image" className="w-1/2 h-auto ml-8" />
        {/* Text on the left */}
      </div>
    </div>
  );
};

export default SplitContent;
