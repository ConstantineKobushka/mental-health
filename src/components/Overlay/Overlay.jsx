import css from './Overlay.module.css';

const Overlay = ({ children }) => {
  return <div className={css.overlay}>{children}</div>;
};

export default Overlay;
