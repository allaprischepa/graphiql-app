import FeaturesList from '../FeaturesList/FeaturesList';
import './Features.scss';

function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>Features</h2>
        <FeaturesList />
      </div>
    </section>
  );
}

export default Features;
