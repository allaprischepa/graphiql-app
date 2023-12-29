import { useContext } from 'react';
import { MemberItem } from '../../types/types';
import Member from '../Member/Member';
import { TEAM_LEAD } from '../../constants';
import { langContext } from '../../languages/langContext';
import { getTeam } from '../../data/getTeam';
import './TeamList.scss';

function TeamList() {
  const {
    dispatch: { translate },
  } = useContext(langContext);

  const memberList = getTeam(translate).map((member: MemberItem) => (
    <li
      key={member.id}
      className={member.isTeamlead ? 'member teamlead' : 'member'}
      data-teamlead={translate(TEAM_LEAD)}
    >
      <Member member={member} />
    </li>
  ));

  return <ul className="team">{memberList}</ul>;
}

export default TeamList;
