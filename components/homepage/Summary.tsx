// Summary.tsx

import React from 'react';

function Summary() {
  return (
    <div className="flex flex-col items-center justify-center px-20 py-40 bg-ais-new-soft-black">
      {/* title */}
      <h2 className="text-3xl font-bold text-white mb-12">
        UNLOCKING THE POWER OF{' '}
        <span className="inline-block bg-ais-new-orange text-ais-new-soft-black rounded-full px-8 py-2">ARTIFICIAL INTELLIGENCE</span>
      </h2>

      {/* icons */}
      <div className="flex justify-center px-24">
        <div className="text-center mr-16">
          <img src="/supertoroid.png" alt="Icon 1" className="w-16 h-16 mb-4 mx-auto" />
          <h4 className="text-xl font-bold text-white mb-4">Title 1</h4>
          <p className='text-ais-white'>Lorem ipsum dolor sit amet consectetur. Dictum ut id nam dictumst feugiat aliquam augue senectus. </p>
        </div>

        <div className="text-center mr-16">
          <img src="/supertoroid.png" alt="Icon 2" className="w-16 h-16 mb-4 mx-auto" />
          <h4 className="text-xl font-bold text-white mb-4">Title 2</h4>
          <p className='text-ais-white'>Lorem ipsum dolor sit amet consectetur. Dictum ut id nam dictumst feugiat aliquam augue senectus. </p>
        </div>

        <div className="text-center">
          <img src="/supertoroid.png" alt="Icon 3" className="w-16 h-16 mb-4 mx-auto" />
          <h4 className="text-xl font-bold text-white mb-4">Title 3</h4>
          <p className='text-ais-white'>Lorem ipsum dolor sit amet consectetur. Dictum ut id nam dictumst feugiat aliquam augue senectus. </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
