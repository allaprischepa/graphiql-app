import { useContext } from 'react';
import { getFeatures } from '../../data/getFeatures';
import { FeatureItem } from '../../types/types';
import Feature from '../Feature/Feature';
import './FeaturesList.scss';
import { langContext } from '../../languages/langContext';

function FeaturesList() {
  const {
    dispatch: { translate },
  } = useContext(langContext);

  const featureList = getFeatures(translate).map((feature: FeatureItem) => (
    <li key={feature.id} className="feature-item">
      <Feature feature={feature} />
    </li>
  ));
  return <ul className="feature-list">{featureList}</ul>;
}

export default FeaturesList;
