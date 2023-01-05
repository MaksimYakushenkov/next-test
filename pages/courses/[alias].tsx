import { useEffect, useState } from 'react';
import { withLayout } from '../../layout/Layout';

// Библиотека для http запросов
import axios from 'axios';

// Обязательные интерфейсы для получения данных из API
import { MenuItem } from '../../interfaces/menu.interface';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { PageModel } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../interfaces/product.interface';

const firstCategory = 0;

function Course({menu, page, products}: CourseProps): JSX.Element {

  return (
    <><h1>sdas</h1>
    {menu.map(m => m.pages.map(p => <a key={p._id} href={p.alias}>{p.alias}</a>))}
    </>
  );
}

export default withLayout(Course);

export const getStaticPaths = async() => {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if(!params) {
        return {
            notFound: true
        };
    }
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });

    const { data: page } = await axios.get<PageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
    const { data: products } = await axios.post<ProductModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
        category: page.category,
        limit: 10
    });
    return {
        props: {
        menu,
        firstCategory,
        page,
        products
        }
    };
};

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
    page: PageModel;
    products: ProductModel;
}