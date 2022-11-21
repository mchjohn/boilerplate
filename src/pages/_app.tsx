import Head from 'next/head';
import type { AppProps } from 'next/app';

import GlobalStyles from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Advanced React - Boilerplate</title>

        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />

        <link rel="manifest" href="/manifest.json" />

        <meta
          name="description"
          content="Simple project boiler plate with TypeScript, React, NextJs, Styled Components"
        />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}
