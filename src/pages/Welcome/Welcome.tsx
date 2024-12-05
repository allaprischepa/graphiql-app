import Features from '../../components/Features/Features';
import Hero from '../../components/Hero/Hero';
import Navigation from '../../components/Navigation/Navigation';
import Team from '../../components/Team/Team';

export default function Welcome() {
  return (
    <>
      <div className="welcome-nav">
        <Navigation />
      </div>
      <Hero />
      <Features />
      <Team />
    </>
  );
}
