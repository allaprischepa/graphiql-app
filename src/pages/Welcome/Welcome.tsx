import { Link } from 'react-router-dom';
import { AppRoutes } from '../../router/router';
import Features from '../../components/Features/Features';
import Hero from '../../components/Hero/Hero';
import Team from '../../components/Team/Team';

export default function Welcome() {
  return (
    <>
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
      <Hero />
      <Features />
      <Team />
    </>
  );
}
