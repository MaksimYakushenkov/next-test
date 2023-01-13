import { SkillsProps } from './Skills.props';
import styles from './Skills.module.css';

import cn from 'classnames';
import { Htag } from '../Htag/Htag';
import { Tag } from '../Tag/Tag';

export const Skills = ({tags, ...props}: SkillsProps): JSX.Element => {
    return(
      <div className={styles.wrapper} {...props}>
        <Htag tag='h2'>Получаемые навыки</Htag>
        <div className={styles.skills}>
          {tags.map(tag => <Tag size='regular' color='primary' key={tag}>{tag}</Tag>)}
        </div>
      </div>
    );
}