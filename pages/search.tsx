import { Htag } from '../components';
import { withLayout } from '../layout/Layout';

// Библиотека для http запросов
import axios from 'axios';

// Обязательные интерфейсы для получения данных из API
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';
import { API } from '../helpers/api';


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
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
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