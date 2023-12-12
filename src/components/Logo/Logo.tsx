import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../router/router';
import './Logo.scss';

const Logo = () => {
  return (
    <NavLink
      to={AppRoutes.welcome}
      className={({ isActive }) => (isActive ? 'logo active' : 'logo')}
    >
      <img src="favicon.png" alt="logo" width={30} />
      <span>reactiveBuQLya</span>
    </NavLink>
  );
};

export default Logo;
