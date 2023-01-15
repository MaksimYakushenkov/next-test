import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import LogoIcon from '../logo.svg';
import cn from 'classnames';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { motion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const Header = ({className, ...props }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,

      },
    },
    closed: {
      opacity: 0,
      x: '100%'
    }
  };
    
    return(
        <header className={cn(styles.header, className)} {...props}>
          <LogoIcon />
          <ButtonIcon appearance='white' icon='burger' onClick={() => setIsOpened(!isOpened)} />
          <motion.div
            className={styles.mobileMenu}
            variants={variants}
            initial='closed'
            animate={isOpened ? 'opened' : 'closed'}
          >
            <Sidebar />
            <ButtonIcon className={styles.closeButton} onClick={() => setIsOpened(!isOpened)} appearance='white' icon='close' />
          </motion.div>
        </header>
    );
};