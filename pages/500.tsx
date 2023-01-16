import Head from 'next/head';
import { withLayout } from '../layout/Layout';
import { Htag } from '../components';


function InternalServerError(): JSX.Element {

  return (
    <>
      <Head>
      <title>Внутренняя ошибка</title>
      <meta name="description" content="Внутренняя ошибка" />
      </Head>
      <Htag tag="h1">500 | Внутренняя ошибка</Htag>
    </>
  );
}

export default withLayout(InternalServerError);