import { ChakraProvider } from '@chakra-ui/react';
import Head from 'components/head';
import Theme from 'configs/theme';
import type { AppProps } from 'next/app';
import type { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={Theme}>
      <Head>
        <noscript>This page needs JavaScript enabled.</noscript>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
};

export default MyApp;
