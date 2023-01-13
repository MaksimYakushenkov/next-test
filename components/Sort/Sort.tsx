import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.css';

import SortIcon from './sortIcon.svg';

import cn from 'classnames';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
    return(
      <div 
      className={cn(styles.sort, className)} 
      {...props}
      >
        <span
        className={cn(styles.sortValue, {
          [styles.active]: sort == SortEnum.Rating
        })}
        onClick={() => setSort(SortEnum.Rating)}
        >
          <SortIcon className={styles.sortIcon} />
          По рейтингу
        </span>
        <span
        className={cn(styles.sortValue, {
          [styles.active]: sort == SortEnum.Price
        })}
        onClick={() => setSort(SortEnum.Price)}
        >
          <SortIcon className={styles.sortIcon} />
          По цене
        </span>
      </div>
    );
}