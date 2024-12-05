import { useContext } from 'react';
import TeamList from '../TeamList/TeamList';
import { langContext } from '../../languages/langContext';
import { TITLE_TEAM } from '../../constants';
import './Team.scss';

function Team() {
  const {
    dispatch: { translate },
  } = useContext(langContext);

  return (
    <section className="team-section">
      <div className="container">
        <h2>{translate(TITLE_TEAM)}</h2>
        <div>
          <TeamList />
        </div>
      </div>
    </section>
  );
}

export default Team;
