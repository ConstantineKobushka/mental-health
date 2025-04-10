import Container from '../Container/Container';
import Psychologist from '../Psychologist/Psychologist';

import css from './Psychologists.module.css';

const Psychologists = () => {
  return (
    <main>
      <section className={css.section}>
        <Container>
          <ul className={css.list}>
            <Psychologist />
          </ul>
          <button className={css.loadMoreBtn}>Load more</button>
        </Container>
      </section>
    </main>
  );
};

export default Psychologists;
