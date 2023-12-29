import { useContext } from 'react';
import FeaturesList from '../FeaturesList/FeaturesList';
import './Features.scss';
import { langContext } from '../../languages/langContext';
import { TITLE_FEATURES } from '../../constants';

function Features() {
  const {
    dispatch: { translate },
  } = useContext(langContext);

  return (
    <section className="features">
      <div className="container">
        <h2>{translate(TITLE_FEATURES)}</h2>
        <FeaturesList />
      </div>
    </section>
  );
}

export default Features;
