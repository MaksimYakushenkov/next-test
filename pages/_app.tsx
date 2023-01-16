import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';

Router.events.on('routeChangeComplete', (url: string) => {
  if(typeof window !=='undefined') {
    ym('hit', url);
  }
});

export default function App({ Component, pageProps, router }: AppProps): JSX.Element {

  return <>
  <Head>
    <title>Тест НЕКСТJS</title>
    <meta name="description" content="Первое некст джиес" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://mc.yandex.ru"/>
    <link rel="icon" href="/favicon.ico" />
    <meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
    <meta property='og:locale' content='ru_RU' />
  </Head>
  <YMInitializer
    accounts={[]} //id счетиков
    options={{ webvisor: false, defer: true }} // вкл/выкл вебвизор (нагрузка на сервер), defer - откладывем загрузку метрики
    version='2' // версия счетчика
  />
  <Component {...pageProps} />
  </>;
}
