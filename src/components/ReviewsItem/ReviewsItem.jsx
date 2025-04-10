import css from './ReviewsItem.module.css';

const ReviewsItem = () => {
  return (
    <>
      <ul className={css.reviewsList}>
        <li className={css.reviewsItem}>
          <div className={css.user}>
            <div className={css.userAvatar}>m</div>
            <div className={css.userInfo}>
              <h5 className={css.userName}>Michael Brown</h5>
              <p className={css.userRating}>
                <svg className={css.star} width='16' height='16'>
                  <use href='/icons/icons-sprite.svg#star'></use>
                </svg>
                <span>4.5</span>
              </p>
            </div>
          </div>
          <p className={css.userReview}>
            Dr. Davis has been a great help in managing my depression. Her
            insights have been valuable.
          </p>
        </li>

        <li className={css.reviewsItem}>
          <div className={css.user}>
            <div className={css.userAvatar}>l</div>
            <div className={css.userInfo}>
              <h5 className={css.userName}>Linda Johnson</h5>
              <p className={css.userRating}>
                <svg className={css.star} width='16' height='16'>
                  <use href='/icons/icons-sprite.svg#star'></use>
                </svg>
                <span>5.0</span>
              </p>
            </div>
          </div>
          <p className={css.userReview}>
            I'm very satisfied with Dr. Davis's therapy. She's understanding and
            empathetic.
          </p>
        </li>
      </ul>
      <button className={css.appointmentBtn} type='button'>
        Make an appointment
      </button>
    </>
  );
};

export default ReviewsItem;
