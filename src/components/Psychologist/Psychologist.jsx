import { Link, Outlet } from 'react-router-dom';

import ReviewsItem from '../ReviewsItem/ReviewsItem';

import avatar from '../../assets/images/psychologists/sarah_davis.jpg';

import css from './Psychologist.module.css';

const Psychologist = () => {
  return (
    <li className={css.item}>
      <div className={css.inner}>
        <div className={css.foto}>
          <img className={css.img} src={avatar} alt='Psychologist' />
          <div className={css.onLine}></div>
        </div>

        <div className={css.details}>
          <div className={css.topInfo}>
            <p className={css.speciality}>Psychologist</p>
            <div className={css.spanWrapper}>
              <span className={`${css.span} ${css.rating}`}>Rating: 4.75</span>
              <span className={`${css.span} ${css.pricePerHour}`}>
                Price / 1 hour: <span className={css.price}>120$</span>
              </span>
              <button className={css.favorit}>
                <svg className={css.heartNormal} width='26' height='26'>
                  <use href='/icons/icons-sprite.svg#heart-normal'></use>
                </svg>
              </button>
            </div>
          </div>

          <h3 className={css.name}>Dr. Sarah Davis</h3>

          <div className={css.description}>
            <span className={css.descriptionSpan}>
              Experience: <span className={css.span}>12 years</span>
            </span>
            <span className={css.descriptionSpan}>
              License:{' '}
              <span className={css.span}>
                Licensed Psychologist (License #67890)
              </span>
            </span>
            <span className={css.descriptionSpan}>
              Specialization:{' '}
              <span className={css.span}>and Mood Disorders</span>
            </span>
            <span className={css.descriptionSpan}>
              Initial_consultation:{' '}
              <span className={css.span}>
                Free 45-minute initial consultation
              </span>
            </span>
          </div>

          <p className={css.text}>
            Dr. Sarah Davis is a highly experienced and licensed psychologist
            specializing in Depression and Mood Disorders. With 12 years of
            practice, she has helped numerous individuals overcome their
            depression and regain control of their lives. Dr. Davis is known for
            her empathetic and understanding approach to therapy, making her
            clients feel comfortable and supported throughout their journey to
            better mental health.
          </p>

          <button className={css.readMoreBtn} type='button'>
            Read more
          </button>

          <ReviewsItem />
        </div>
      </div>
    </li>
  );
};

export default Psychologist;
