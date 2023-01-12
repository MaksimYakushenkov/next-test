import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';

import cn from 'classnames';
import RateIcon from './rate.svg';
import { advantagesText, priceRU } from '../../helpers/helpers';
import { Htag } from '../Htag/Htag';
import { AdvantageItem } from '../AdvantageItem/AdvantageItem';
import { Ptag } from '../Ptag/Ptag';

export const Advantages = ({className, ...props}: AdvantagesProps): JSX.Element => {
    return(
      <div className={cn(styles.advantages, className)}
      {...props}>
        <Htag tag='h2'>Преимущества</Htag>
        {advantagesText.map(advantage => <AdvantageItem title={advantage.title} key={advantage.title}>{advantage.description}</AdvantageItem>)}
        <Ptag fontSize='large' className='advantages__lastP'>При завершении очередного проекта над графикой, специалист всегда задает себе вопрос о дальнейших перспективах. Отличие профессиональных дизайнеров заключается в том, что они гибкие. Сегодня разрабатывается логотип новой компании, а завтра вполне можно переключиться на иллюстрацию культовой книги.</Ptag>
      </div>
    );
}