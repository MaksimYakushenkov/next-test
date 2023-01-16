import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { Controller, useForm } from 'react-hook-form';

import CloseIcon from './close.svg';
import { ReviewFormInterface, ReviewSentResponce } from './ReviewForm.interface';
import { API } from '../../helpers/api';
import axios from 'axios';
import { useState } from 'react';

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm<ReviewFormInterface>();
  const [isSuccessSent, setIsSuccessSent] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  //Значение по умолчанию можно задать так
  // const { register, control, handleSubmit } = useForm<ReviewFormInterface>({
  //   defaultValues: {
  //     name: 'dsada',
  //     title: '',
  //     description: ''
  //   }
  // });

  const onSubmit = async (formData: ReviewFormInterface) => {
    try {
      const { data } = await axios.post<ReviewSentResponce>(API.review.createDemo, {
        ...formData, productId
      });

      if(data.message) {
        setIsSuccessSent(true);
        reset();
      } else {
        setError('Что-то пошло не так...');
      }

    } catch (e) {
      setError(e.message);
    }
  };

    return(
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn(styles.reviewForm, className)} {...props}>
          <Input
            {...register('name', { required: { value: true, message: 'Заполните имя!'}})}
            placeholder='Имя'
            error={errors.name}
          />
          <Input {...register('title', { required: { value: true, message: 'Заполните название!'}})} placeholder='Заголовок отзыва' error={errors.title} className={styles.title}/>
          <div className={styles.rating}>
            <span>Оценка:</span>
            <Controller
            control={control}
            name={'rating'}
            rules={
              {required: { value: true, message: 'Поставьте оценку!'}}
            }
            render={({ field }) => (
              <Rating error={errors.rating} isEditable rating={field.value} ref={field.ref} setRating={field.onChange} />
            )}
            />
          </div>
          <Textarea {...register('description', { required: { value: true, message: 'Заполните описание!'}})} placeholder='Текст отзыва' error={errors.description} className={styles.description} />
          <div className={styles.submit}>
            <Button appearance='primary' className={styles.submitButton}>Отправить</Button>
            <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
          </div>
        </div>
        {isSuccessSent && <div className={cn(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Ваш заголовок отправлен!</div>
          <div className={styles.successDescription}>Спасибо, отзыв будет опубликован после проверки.</div>
          <CloseIcon className={styles.close} onClick={() => setIsSuccessSent(false)}/>
        </div>}
        {error && <div className={cn(styles.error, styles.panel)}>
          <div className={styles.successDescription}>Что-то пошло не так, ошибка "{error}"</div>
          <CloseIcon className={styles.close} onClick={() => setError('')}/>
        </div>}
      </form>
    );
};