// Summary.tsx

import React from 'react';

function Summary() {
  return (
    <div className="flex flex-col items-center justify-center px-[2rem] py-40 bg-ais-new-soft-black">
      {/* title */}
      <h2 className="text-3xl font-bold text-ais-new-white mb-12 text-center">
        UNLOCKING THE POWER OF{' '}
        <span className="inline-block bg-ais-new-orange text-ais-new-soft-black rounded-full px-8 py-2">ARTIFICIAL INTELLIGENCE</span>
      </h2>

      {/* icons */}
      <div className="gap-[2rem] justify-center flex flex-col md:flex-row">
        <div className="text-center">
          <img src="/images/laptop-stock-image.png" alt="Icon 1" className="w-16 h-16 mb-4 mx-auto" />
          <h4 className="text-xl font-bold text-ais-new-white mb-4">AI Literacy</h4>
          <p className='text-ais-white'>Simplifying AI concepts through workshops and seminars, making AI more accessible to everyone</p>
        </div>

        <div className="text-center">
          <img src="/images/networking-stock-image.png" alt="Icon 2" className="w-16 h-16 mb-4 mx-auto" />
          <h4 className="text-xl font-bold text-ais-new-white mb-4">Networking</h4>
          <p className='text-ais-white'>Connecting with industry leaders and other professionals to expand the horizons of artificial intelligence</p>
        </div>

        <div className="text-center">
          <img src="/images/collab-stock-image.png" alt="Icon 3" className="w-16 h-16 mb-4 mx-auto" />
          <h4 className="text-xl font-bold text-ais-new-white mb-4">Collaborative Projects</h4>
          <p className='text-ais-white'>Programs for students to work on real-world AI projects, fostering practical experience and innovation</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
