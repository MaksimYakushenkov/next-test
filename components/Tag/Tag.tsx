import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({size = 'regular', color, href, children, className, ...props}: TagProps): JSX.Element => {
    return(
        <span
        className={cn(styles.tag, className, {
            [styles.regular]: size == 'regular',
            [styles.large]: size == 'large',
            [styles.ghost]: color == 'ghost',
            [styles.red]: color == 'red',
            [styles.grey]: color == 'grey',
            [styles.green]: color == 'green',
            [styles.primary]: color == 'primary',
        } )}
        {...props}
        >
            {
                href
                ?
                <a href={href}>{children}</a>
                :
                <>{children}</>
            }
        </span>
    );
}