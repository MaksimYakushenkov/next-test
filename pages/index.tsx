import { Button, Htag, Input, Ptag, Rating, Tag, Textarea} from '../components';
import { useState } from 'react';
import { withLayout } from '../layout/Layout';

// Библиотека для http запросов
import axios from 'axios';

// Обязательные интерфейсы для получения данных из API
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';
import { API } from '../helpers/api';


function Home(): JSX.Element {
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
    <Input placeholder='Имя'/>
    <Textarea placeholder='Имя'/>
    </>
  );
}

export default withLayout(Home);

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