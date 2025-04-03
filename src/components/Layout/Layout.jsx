import { Outlet } from 'react-router-dom';

import Header from '../Header/Header.jsx';

import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
