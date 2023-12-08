import { Link } from 'react-router-dom';
import { AppRoutes } from '../../router/router';
import Features from '../../components/Features/Features';
import Hero from '../../components/Hero/Hero';
import Team from '../../components/Team/Team';
import './Welcom.scss';

export default function Welcome() {
  return (
    <>
      <div className="header">
        <div className="container">
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
            {/* <li>
          <Link to={AppRoutes.main}>Main</Link>
        </li> */}
          </ul>
        </div>
      </div>
      <Hero />
      <Features />
      <Team />
    </>
  );
}
