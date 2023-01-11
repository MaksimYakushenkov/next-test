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