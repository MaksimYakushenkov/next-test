import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { Button, Htag, Ptag, Rating, Tag} from '../components';
import { useEffect, useState } from 'react';
import { withLayout } from '../layout/Layout';

// Библиотека для http запросов
import axios from 'axios';

// Обязательные интерфейсы для получения данных из API
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';


function Home({menu}: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(3);

  return (
    <>
    <Htag tag="h1">Текст</Htag>
    <Button appearance="primary" className='sdada' arrow='right'>Текст</Button>
    <Button appearance="ghost" arrow='right'>Текст</Button>
    <Ptag >sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa dasdas das dsa dsad asd as</Ptag>
    <Ptag fontSize='medium'>sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa dasdas das dsa dsad asd as</Ptag>
    <Ptag fontSize='large'>sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa dasdas das dsa dsad asd as</Ptag>
    <Tag size='regular' color='red'>Red</Tag>
    <Tag size='large' color='green'>Green</Tag>
    <Tag size='large' color='primary' href='#'>Href Primary</Tag>
    <Rating rating={rating} setRating={setRating} isEditable />
    <ul>
      {menu.map(m => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}
    </ul>
    </>
  );
}

export default withLayout(Home);

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