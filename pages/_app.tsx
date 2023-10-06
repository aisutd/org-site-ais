import { Switch } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import 'tailwindcss/tailwind.css';
import localFont from '@next/font/local';
import SiteLayout from '../components/common/SiteLayout';

const roboto = localFont({
  src: [
    {
      path: "../public/fonts/Roboto/Roboto-Regular.ttf"
    }
  ]
});

const robotoMed = localFont({
  src: [
    {
      path: "../public/fonts/Roboto/Roboto-Medium.ttf"
    }
  ]
});

/**
 * A wrapper for the root website component.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </Head>
      <style jsx global>{`
        :root {
          /* ... */
          --roboto: ${roboto.style.fontFamily};
          --robotoMed: ${robotoMed.style.fontFamily};
        }
      `}</style>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </>
  );
}
