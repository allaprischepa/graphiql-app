import { features } from '../../data/features';
import { FeatureItem } from '../../types';
import Feature from '../Feature/Feature';
import './FeaturesList.scss';

function FeaturesList() {
  const featureList = features.map((feature: FeatureItem) => (
    <li key={feature.id} className="feature-item">
      <Feature feature={feature} />
    </li>
  ));
  return <ul className="feature-list">{featureList}</ul>;
}

export default FeaturesList;
