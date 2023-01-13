import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { PageCategory } from '../interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: PageCategory.Courses},
  {route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: PageCategory.Services},
  {route: 'books', name: 'Книги', icon: <BooksIcon />, id: PageCategory.Books},
  {route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: PageCategory.Products}
];

export const priceRU = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export const advantagesText = '<p>При завершении очередного проекта над графикой, специалист всегда задает себе вопрос о дальнейших перспективах. Отличие профессиональных дизайнеров заключается в том, что они гибкие. Сегодня разрабатывается логотип новой компании, а завтра вполне можно переключиться на иллюстрацию культовой книги.</p>';