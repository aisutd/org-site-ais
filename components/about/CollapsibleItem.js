
import React, { useState } from "react";

const CollapsibleItem = ({ title, sampleText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-4">
      <div
        className="cursor-pointer flex justify-center text-3xl font-bold text-[#3e6eff] hover:text-[#361cff]"
        onClick={toggleCollapse}
      >
        <div className="flex justify-between items-center">
          <div>
            {title}
          </div>
          <div className="ml-2 text-xl">
            {isExpanded ? (
              <img src="/about-programs-downarrow.png" alt="Down Arrow" className="h-3"/> // Down arrow
            ) : (
              <img src="/about-programs-sidearrow.png" alt="Side Arrow" className="h-6"/> // Side arrow
            )}
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="text-xl text-[#293039]">
          {sampleText}
        </div>
      )}
    </div>
  );
};

export default CollapsibleItem;
