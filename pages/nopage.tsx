import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { getDemos } from './api/projects';
import { ProjectDemo } from '../lib/types';

interface DemoPageProps {
  demos: ProjectDemo[]; 
}

/**
 * A list of demoable projects.
 */
export default function NoPage({ demos }: DemoPageProps) {
  
  return (
    <div>
      <Head>
        <title>Projects &ndash; AIS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content="An overview of all our AI/ML projects, including explanations and interactive demos."
        />
      </Head>

      {/*reacg-spring gooey effect */}
      <main className="flex flex-col justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="text-center font-bold w-9/12 h-full p-10 rounded-3xl shadow-lg shadow-slate-500 m-auto mt-auto">
          <p className="text-4xl font-bold text-slate-700 sm:visible lg:invisible text-center justify-center content-center sm:pt-9 mt-[100px]">
            Coming Soon
          </p>
          <img
            src="images/Shapes/RoundCube-Blue-Glossy.png"
            className="w-30 float-right translate-x-20 translate-y-20 opacity-80 invisible lg:visible"
          />
          <img
            src="images/Shapes/SuperToroid-2.png"
            className="w-30 float-left -translate-x-3/4 -translate-y-12 opacity-90 invisible lg:visible"
          />



        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const demos = getDemos();

  return {
    props: {
      demos,
    },
  };
};
