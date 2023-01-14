import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { KeyboardEvent, useState } from 'react';

import SearchIcon from './SearchButtonIcon.svg';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props}: SearchProps): JSX.Element => {
const [search, setSearch] = useState<string>('');

// Router для перехода по страницам
const router = useRouter();

const goToSearch = () => {
  router.push({
    pathname: '/search',
    query: {
      q: search,
    }
  });
};

//KeyboardEvent импортируем из Реакта
const handleKeyDown = (e: KeyboardEvent) => {
  if(e.key == 'Enter') {
    goToSearch();
  }
};

return(
  <div className={cn(styles.search, className)} {...props}>
    <Input 
    className={styles.search__input}
    placeholder='Поиск...'
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    onKeyDown={handleKeyDown}
    />
    <Button
    appearance='primary'
    className={styles.search__button}
    onClick={goToSearch}
    >
      <SearchIcon />
    </Button>
  </div>
);
};