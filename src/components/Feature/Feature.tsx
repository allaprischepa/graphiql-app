import { FeatureItem } from '../../types';

export interface FeatureProps {
  feature: FeatureItem;
}

function Feature({ feature }: FeatureProps) {
  const { icon, text } = feature;

  return (
    <>
      <img src={icon} alt="feature" width={30} />
      <div>{text}</div>
    </>
  );
}

export default Feature;
