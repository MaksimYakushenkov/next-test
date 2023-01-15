import { ReviewProps } from './Review.props';
import styles from './Review.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';

import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

import UserIcon from './user.svg';
import { Rating } from '../Rating/Rating';
import { Divider } from '../Divider/Divider';

export const Review = ({review, className, ...props}: ReviewProps): JSX.Element => {
  const {name, title, description, createdAt, rating, } = review;

    return(
      <>
      <div className={cn(styles.review, className)}>
        <UserIcon className={styles.icon} />
        <div className={styles.title}>
          <span className={styles.name}>{name}:&nbsp;&nbsp;</span>
          <span>{title}</span>
        </div>
        <div className={styles.date}>{format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}</div>
        <div className={styles.rating}><Rating rating={rating}/></div>
        <div className={styles.description}>{description}</div>
      </div>
      <Divider />
      </>

    );
}