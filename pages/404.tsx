import Head from 'next/head';
import { withLayout } from '../layout/Layout';
import { Htag } from '../components';


function NotFound(): JSX.Element {

  return (
    <>
      <Head>
      <title>Страница не найдена</title>
      <meta name="description" content="Страница не найдена" />
      </Head>
      <Htag tag="h1">404 | Страница не найдена</Htag>
    </>
  );
}

export default withLayout(NotFound);