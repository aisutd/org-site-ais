// Summary.tsx

import React from 'react';

function Summary() {
  return (
    <div className="flex flex-col items-center justify-center p-20 bg-ais-dark-gray">
      {/* Main Title */}
      <h2 className="text-3xl font-bold text-white mb-12">
        UNLOCKING THE POWER OF{' '}
        <span className="inline-block bg-yellow-400 rounded px-2 py-1">ARTIFICIAL INTELLIGENCE</span>
      </h2>

      {/* Icons */}
      <div className="flex justify-center">
        {/* Icon 1 */}
        <div className="text-center mr-4">
          <img src="/supertoroid.png" alt="Icon 1" className="w-16 h-16 mb-4 mx-auto" />
          <h4 className="text-xl font-bold text-white">Title 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Dictum ut id nam dictumst feugiat aliquam augue senectus. </p>
        </div>

        {/* Icon 2 */}
        <div className="text-center mr-4">
          <img src="/supertoroid.png" alt="Icon 2" className="w-16 h-16 mb-4 mx-auto" />
          <h4 className="text-xl font-bold text-white">Title 2</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Dictum ut id nam dictumst feugiat aliquam augue senectus. </p>
        </div>

        {/* Icon 3 */}
        <div className="text-center">
          <img src="/supertoroid.png" alt="Icon 3" className="w-16 h-16 mb-4 mx-auto" />
          <h4 className="text-xl font-bold text-white">Title 3</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Dictum ut id nam dictumst feugiat aliquam augue senectus. </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
