import { Link } from 'react-router-dom';
import { AppRoutes } from '../../router/router';

export default function Main() {
  return (
    <>
      <h1>Main Page</h1>
      <ul>
        <li>
          <Link to={AppRoutes.signIn}>Sign In</Link>
        </li>
        <li>
          <Link to={AppRoutes.signUp}>Sign Up</Link>
        </li>
        <li>
          <Link to={AppRoutes.welcome}>Welcome</Link>
        </li>
      </ul>
    </>
  );
}
