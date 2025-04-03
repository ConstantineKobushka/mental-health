import { Link, NavLink } from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link className={css.logo} to='/'>
          <img src='/logo/logo.svg' alt='Logo' />
        </Link>
        <div className={css.menu}>
          <NavLink className={css.menuLink} to='/'>
            Home
          </NavLink>
          <NavLink className={css.menuLink} to='/psychologists'>
            Psychologists
          </NavLink>
          <NavLink className={css.menuLink} to='/favorites'>
            Favorites
          </NavLink>
        </div>
      </nav>
      <div className={css.auth}>
        <button className={css.logIn}>Log In</button>
        <button className={css.logUp}>Registration</button>
      </div>
    </header>
  );
};

export default Header;
