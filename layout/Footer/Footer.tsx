import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';

// Удобная библиотека форматирования даты
import { format } from 'date-fns';

export const Footer = ( {className, ...props }: FooterProps): JSX.Element => {
    
    return(
        <div className={cn(className, styles.footer)} {...props}>
            <p className={styles.footer__paragraph}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</p>
            <a className={styles.footer__link} href="#">Пользовательское соглашение</a>
            <a className={styles.footer__link} href="#">Политика конфиденциальности</a>
        </div>
    );
};