import { ButtonIconProps, icons } from "./ButtonIcon.props";
import styles from './ButtonIcon.module.css';

//чтобы задать классы
import cn from 'classnames';

//чтобы задать дефолтное значение пропса, нужно прописать здесь props = value
export const ButtonIcon = ({ appearance, icon, className, ...props }: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];

    return(
        <button
        className={cn(styles.buttonIcon, className, {
            [styles.primary]: appearance == 'primary',
            [styles.white]: appearance == 'white'
        })}
        {...props}
        >
          <IconComp />
        </button>
    );
};