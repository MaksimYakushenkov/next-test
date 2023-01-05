import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <>
  <Head>
        <title>Тест НЕКСТJS</title>
        <meta name="description" content="Первое некст джиес" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
  <Component {...pageProps} />
  </>;
}
