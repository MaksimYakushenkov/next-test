

// Библиотека для http запросов
import axios from 'axios';

// Обязательные интерфейсы для получения данных из API
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Htag } from '../../components';
import { API } from '../../helpers/api';
import { firstLevelMenu } from '../../helpers/helpers';
import { MenuItem } from '../../interfaces/menu.interface';
import { withLayout } from '../../layout/Layout';


function Type({ firstCategory }: TypeProps): JSX.Element {

  return (
    <>
    <Htag tag="h1">Type {firstCategory}</Htag>
    </>
  );
}

export default withLayout(Type);

export const getStaticPaths = async() => {
  return {
      paths: firstLevelMenu.map(m => '/' + m.route),
      fallback: true
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if(!params) {
    return {
        notFound: true
    };
}
const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);

  if(!firstCategoryItem) {
    return {
        notFound: true
    };
  }
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory: firstCategoryItem.id
  });
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    }
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}