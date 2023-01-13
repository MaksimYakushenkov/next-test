import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';

import cn from 'classnames';
import { Htag } from '../Htag/Htag';
import { AdvantageItem } from '../AdvantageItem/AdvantageItem';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return(
      <div className={cn(styles.advantages)}
    >
        <Htag tag='h2'>Преимущества</Htag>
        {advantages?.map(advantage => <AdvantageItem title={advantage.title} key={advantage._id}>{advantage.description}</AdvantageItem>)}
      </div>
    );
}