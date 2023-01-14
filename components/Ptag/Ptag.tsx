import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({fontSize = 'regular', children, className, ...props}: PtagProps): JSX.Element => {
    return(
        <p
        className={cn(styles.paragraph, className, {
            [styles.regular]: fontSize == 'regular',
            [styles.medium]: fontSize == 'medium',
            [styles.large]: fontSize == 'large',
        } )}
        {...props}
        >
            {children}
        </p>
    );
};