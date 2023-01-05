import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';

//чтобы задать классы
import cn from 'classnames';

//чтобы задать дефолтное значение пропса, нужно прописать здесь props = value
export const Button = ({ appearance, children, arrow = 'none', className, ...props }: ButtonProps): JSX.Element => {
    return(
        <button
        className={cn(styles.button, className, {
            [styles.primary]: appearance == 'primary',
            [styles.ghost]: appearance == 'ghost'
        })}
        {...props}
        >
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down',
                [styles.right]: arrow == 'right',
            })}><ArrowIcon /></span>}
            
        </button>
    );
};