import { Link } from 'react-router-dom';
import { AppRoutes } from '../../router/router';

export default function Welcome() {
  return (
    <>
      <h1>Welcome Page</h1>
      <ul>
        <li>
          <Link to={AppRoutes.signIn}>Sign In</Link>
        </li>
        <li>
          <Link to={AppRoutes.signUp}>Sign Up</Link>
        </li>
        <li>
          <Link to={AppRoutes.main}>Main</Link>
        </li>
      </ul>
    </>
  );
}
