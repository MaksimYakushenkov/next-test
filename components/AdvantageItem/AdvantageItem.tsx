import { AdvantageItemProps } from './AdvantageItem.props';
import styles from './AdvantageItem.module.css';
import cn from 'classnames';

import CheckIcon from './checkIcon.svg';

export const AdvantageItem = ({title, className, children, ...props}: AdvantageItemProps): JSX.Element => {
    return(
        <div className={cn(styles.advantage, className)}
          {...props}
        >
          <div className={styles.title}>
            <CheckIcon />
            <p className={styles.titleText}>{title}</p>
          </div>
          <div className={styles.description}>
            <p className={styles.descriptionText}>
            {children}
            </p>
          </div>
        </div>
    );
}