import { Link } from 'react-router-dom';

import Container from '../Container/Container';

import img from '../../assets/images/hero/hero.jpg';
import img2x from '../../assets/images/hero/hero@2x.jpg';

import css from './Hero.module.css';

const Hero = () => {
  return (
    <main>
      <section className={css.section}>
        <Container>
          <div className={css.inner}>
            <div className={css.content}>
              <h1 className={css.title}>
                The road to the <span className={css.titleSpan}>depths</span> of
                the human soul
              </h1>
              <p className={css.text}>
                We help you to reveal your potential, overcome challenges and
                find a guide in your own life with the help of our experienced
                psychologists.
              </p>
              <Link className={css.link} to='psychologists'>
                Get started
                <svg className={css.arrowGet} width='20' height='15'>
                  <use href='/icons/icons-sprite.svg#arrow-get'></use>
                </svg>
              </Link>
            </div>
            <div className={css.image}>
              <picture className={css.pictureImg}>
                <source
                  media='(min-width: 320px)'
                  srcSet={`${img} 1x, ${img2x} 2x`}
                  type='image/jpg'
                />
                <img
                  className={css.img}
                  src={img}
                  alt='Psychologists'
                  loading='lazy'
                />
              </picture>
              <div className={css.decorUser}>
                <svg className={css.twoUsers} width='20' height='15'>
                  <use href='/icons/icons-sprite.svg#two-users'></use>
                </svg>
              </div>
              <div className={css.decorQuestion}>
                <svg className={css.question} width='20' height='15'>
                  <use href='/icons/icons-sprite.svg#question'></use>
                </svg>
              </div>
              <div className={css.decorPrice}>
                <div className={css.decorPriceInner}>
                  <div className={css.decorPriceDecor}>
                    <svg className={css.icon} width='20' height='15'>
                      <use href='/icons/icons-sprite.svg#check-orange'></use>
                    </svg>
                  </div>
                  <div className={css.decorPriceContent}>
                    <p className={css.decorPriceText}>
                      Experienced psychologists
                    </p>
                    <span className={css.decorPriceSpan}>15,000</span>
                  </div>
                </div>
              </div>
              <div className={css.decorBg}></div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Hero;
