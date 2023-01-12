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

export const advantagesText = [
  {
    title: 'Мобильность специалиста',
    description: 'Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.'
  },
  {
    title: 'Индивидуальный график работы',
    description: 'Если освоить программы и найти заказы по графическому дизайну, вскоре окажется, что вставать в 6:00 вовсе не обязательно. Когда у человека вечером продуктивность выше, надо этим пользоваться.'
  },
  {
    title: 'Контроль дохода',
    description: 'Прохождения собеседований в крупные компании могут принести свои плоды. В случае с профессией графического дизайна вполне возможна работа на рынке фриланса. Специалист сам выбирает регион, с кем работать и сколько работать. В связи с этим получится точно контролировать доход в большую или меньшую сторону.'
  },
  {
    title: 'Выбор работы',
    description: 'Пользователи сети, которые знают Photoshop, не обязательно должны выполнять одну работу. Профессия графического дизайнера дает возможность отойти от обычных проектов и повысить скил в других компьютерных программах.'
  },
];