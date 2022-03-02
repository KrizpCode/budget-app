import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '../components/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
