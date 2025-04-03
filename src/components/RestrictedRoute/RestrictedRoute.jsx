// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// import { selectAuthIsLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = ({ component, redirectTo = '/favorites' }) => {
  // const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const isLoggedIn = false;

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};

export default RestrictedRoute;
