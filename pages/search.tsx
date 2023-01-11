import { Htag } from '../components';
import { withLayout } from '../layout/Layout';

// Библиотека для http запросов
import axios from 'axios';

// Обязательные интерфейсы для получения данных из API
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';


function Search(): JSX.Element {

  return (
    <>
    <Htag tag="h1">Search</Htag>
    </>
  );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}