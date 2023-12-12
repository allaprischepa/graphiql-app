import { Link } from 'react-router-dom';
import { AppRoutes } from '../../router/router';
import './Navigation.scss';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to={AppRoutes.signIn} className="btn">
          Sign In
        </Link>
      </li>
      <li>
        <Link to={AppRoutes.signUp} className="btn">
          Sign Up
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
