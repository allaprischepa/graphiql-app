import TeamList from '../TeamList/TeamList';
import './Team.scss';

function Team() {
  return (
    <section className="team-section">
      <div className="container">
        <h2>Our team</h2>
        <div>
          <TeamList />
        </div>
      </div>
    </section>
  );
}

export default Team;
