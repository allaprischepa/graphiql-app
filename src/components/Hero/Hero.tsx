import { useContext } from 'react';
import './Hero.scss';
import { langContext } from '../../languages/langContext';
import {
  HERO_AUTH,
  HERO_ENDPOINTS,
  HERO_RSS,
  HERO_SUBTITLE,
  RSS_HREF,
} from '../../constants';

function Hero() {
  const {
    dispatch: { translate },
  } = useContext(langContext);

  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <h1>GraphiQL</h1>
          <p className="subtitle">{translate(HERO_SUBTITLE)}</p>
          <p>{translate(HERO_AUTH)}</p>
          <p>{translate(HERO_ENDPOINTS)}</p>
          <p>
            {translate(HERO_RSS)}&nbsp;
            <a href={RSS_HREF}>RS&nbsp;School&nbsp;React&nbsp;Course.</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
