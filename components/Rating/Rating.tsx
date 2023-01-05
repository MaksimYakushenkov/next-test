import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './Star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedRating = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                className={cn(styles.star, 
                    {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable,
                    })}
                onMouseEnter={() => changeDisplay(i + 1)}
                onMouseLeave={() => changeDisplay(rating)}
                onClick={() => handleChangeRating(i+1)}
                tabIndex={isEditable ? 0 : -1}
                onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                />
            );
        });
        setRatingArray(updatedRating);
    };

    const changeDisplay = (i: number) => {
        if(!isEditable) {
            return;
        }
        constructRating(i);
    };

    const handleChangeRating = (i: number) => {
        if(!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if(e.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };

    return(
        <div {...props}>
            {
                ratingArray.map((r, i) => {
                    return (<span key={i}>{r}</span>);
                })
            }
        </div>
    );
};