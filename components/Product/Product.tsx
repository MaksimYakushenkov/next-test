import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Ptag } from '../Ptag/Ptag';
import { Button } from '../Button/Button';
import { declOfNum, priceRU } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import Image from 'next/image';
import { Review } from '../Review/Review';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { motion, useAnimation } from 'framer-motion';

export const Product = motion(forwardRef(({product, className, ...props}: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible: {
      opacity: 1,
      height: 'auto'
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  };

  const handleScrollToReview = () => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

    return(
      <div className={className} {...props} ref={ref}>
        <Card className={styles.product}>
          <div className={styles.logo}>
            <Image 
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
            />
          </div>
          <div
          className={styles.title}>
            {product.title}
          </div>
          <div
          className={styles.price}>
            {priceRU(product.price)}
            {product.oldPrice && <Tag color='green' className={styles.oldprice} >{priceRU(product.price - product.oldPrice)}</Tag>}
          </div>
          <div
          className={styles.credit}>
            {priceRU(product.credit)}
            <span>/мес</span>
          </div>
          <div
          className={styles.rating}>
            <Rating rating={product.reviewAvg ?? product.initialRating}/>
          </div>
          <div
          className={styles.tags}>
            {product.categories.map(category => <Tag key={category} className={styles.category} color='ghost'>{category}</Tag>)}
          </div>
          <div className={styles.priceTitle}>цена</div>
          <div className={styles.creditTitle}>в кредит</div>
          <div className={styles.rateTitle}><a href='#viewReview' onClick={handleScrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>
          <Divider className={styles.hr} />
          <div className={styles.description}>{product.description}</div>
          <div className={styles.feature}>
            {product.characteristics.map(c => (
              <div className={styles.characteristic} key={c.name}>
                <span className={styles.characteristicName}>{c.name}</span>
                <span className={styles.characteristicDotted}></span>
                <span className={styles.characteristicValue}>{c.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.advContainer}>
            {product.advantages && <div className={styles.advantages}>
              <Ptag className={styles.advTitle}>Преимущества</Ptag>
              <div>{product.advantages}</div>
            </div>}
            {product.disadvantages && <div className={styles.disadvantages}>
              <Ptag className={styles.advTitle}>Недостатки</Ptag>
              <div>{product.disadvantages}</div>
            </div>}
          </div>
          {/* //Здесь используем класс "hr2" для grid-template-ares, потому что каждый элемент с одинаковым классом будет дублем для грида. */}
          <Divider className={cn(styles.hr, styles.hr2)} />
          <div className={styles.actions}>
            <Button appearance='primary'>Узнать подробнее</Button>
            <Button
              appearance='ghost'
              arrow={isReviewOpened ? 'down' : 'right'}
              className={styles.reviewButton}
              onClick={() => setIsReviewOpened(!isReviewOpened)}
            >Читать отзывы</Button>
          </div>
        </Card>
        <motion.div
        animate={isReviewOpened ? 'visible' : 'hidden'}
        initial='hidden'
        variants={variants}
        >
          <Card ref={reviewRef}  color='blue' className={styles.reviews}>
              {product.reviews.map(r => 
                <Review key={r._id} review={r} />
              )}
              <ReviewForm productId={product._id} />
          </Card>
        </motion.div>
      </div>
    );
}));