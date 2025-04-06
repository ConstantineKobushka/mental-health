import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import Container from '../Container/Container';

import css from './Header.module.css';

const Header = () => {
  const navLinkClass = ({ isActive }) => {
    return clsx(css.menuLink, isActive && css.active);
  };

  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerWrapper}>
          <nav className={css.nav}>
            <Link className={css.logo} to='/'>
              <img src='/logo/logo.svg' alt='Logo' />
            </Link>
            <div className={css.menu}>
              <NavLink className={navLinkClass} to='/'>
                Home
              </NavLink>
              <NavLink className={navLinkClass} to='/psychologists'>
                Psychologists
              </NavLink>
              <NavLink className={navLinkClass} to='/favorites'>
                Favorites
              </NavLink>
            </div>
          </nav>
          <div className={css.auth}>
            <button className={css.logIn}>Log In</button>
            <button className={css.logUp}>Registration</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
