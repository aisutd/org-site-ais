import Head from 'next/head';
import DescriptionIcon from '@mui/icons-material/Description';
import * as React from 'react';
import { useRouter } from 'next/router';

const Error = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fff8f3]">
      <Head>
        <title>Error &ndash; AIS</title>
      </Head>
      {/* Error message */}
      <h1 className="text-black text-3xl mb-4"><span className="text-blue-500">Oops!</span> Page Not Found :( </h1>
      {/* Description */}
      <p className="text-lg text-gray-600 mb-8">The page you are looking for might have been removed or does not exist.</p>
      {/* Button to go back to home page */}
      <div className="hidden 2xl:block"/>
<div className="items-center md:col-span-2 md:flex md:gap-[1rem] md:pr-[2rem]">
  <div className="gap-[2rem] justify-self-start hidden md:flex lg:justify-self-center text-ais-new-soft-black font-robotoMed text-[0.9rem] leading-normal">
    <button className="text-black hover:bg-blue-700 hover:text-white border-2 border-blue-500 rounded-full px-4 py-2 transition-colors duration-300" onClick={handleGoBack}>
      Go back to home page
    </button>
  </div>
</div>


    </div>
  );
};

export default Error;
