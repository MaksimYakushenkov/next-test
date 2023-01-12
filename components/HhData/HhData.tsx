import { HhDataProps } from './HhData.props';
import styles from './HhData.module.css';
import { Card } from '../Card/Card';

import RateIcon from './rate.svg';
import { priceRU } from '../../helpers/helpers';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
    return(
      <div className={styles.hh}>
        <Card className={styles.count}>
          <h4 className={styles.title}>Всего вакансий</h4>
          <span className={styles.countValue}>{count}</span>
        </Card>
        <Card className={styles.salary}>
          <div>
            <h4 className={styles.title}>Начальный</h4>
            <span className={styles.salaryValue}>{priceRU(juniorSalary)}</span>
            <div className={styles.rate}>
              <RateIcon className={styles.filled}/>
              <RateIcon/>
              <RateIcon/>
            </div>
          </div>
          <div>
            <h4 className={styles.title}>Средний</h4>
            <span className={styles.salaryValue}>{priceRU(middleSalary)}</span>
            <div className={styles.rate}>
              <RateIcon className={styles.filled}/>
              <RateIcon className={styles.filled}/>
              <RateIcon/>
            </div>
          </div>
          <div>
            <h4 className={styles.title}>Профессионал</h4>
            <span className={styles.salaryValue}>{priceRU(seniorSalary)}</span>
            <div className={styles.rate}>
              <RateIcon className={styles.filled}/>
              <RateIcon className={styles.filled}/>
              <RateIcon className={styles.filled}/>
            </div>
          </div>
        </Card>
      </div>
    );
}