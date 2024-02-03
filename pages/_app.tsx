import { Switch } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import 'tailwindcss/tailwind.css';
import localFont from "@next/font/local";
import SiteLayout from '../components/common/SiteLayout';

const placard = localFont({
  src: [
    {
      path: "../public/fonts/PlacardNext/PlacardNextRegular.ttf"
    }
  ]
});

const placardBold = localFont({
  src: [
    {
      path: "../public/fonts/PlacardNext/PlacardNextBold.ttf"
    }
  ]
});

const roboto = localFont({
  src: [
    {
      path: "../public/fonts/Roboto/Roboto-Regular.ttf"
    }
  ]
});

const robotoBold = localFont({
  src: [
    {
      path: "../public/fonts/Roboto/Roboto-Bold.ttf"
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
          <title>Home &ndash; AIS</title>
          <link rel="icon" href="/images/square-logo-dark.jpg" type="image/jpg" sizes="any"/>
          {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>*/}
      </Head>
      <style>{`
        :root {
          /* ... */
          --placard: ${placard.style.fontFamily};
          --placard-bold: ${placardBold.style.fontFamily};
          --roboto: ${roboto.style.fontFamily};
          --roboto-bold: ${robotoBold.style.fontFamily};
        }
      `}</style>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </>
  );
}