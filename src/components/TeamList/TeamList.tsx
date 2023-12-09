import { team } from '../../data/team';
import { MemberItem } from '../../types/types';
import Member from '../Member/Member';
import './TeamList.scss';

function TeamList() {
  const memberList = team.map((member: MemberItem) => (
    <li
      key={member.id}
      className={member.isTeamlead ? 'member teamlead' : 'member'}
    >
      <Member member={member} />
    </li>
  ));

  return <ul className="team">{memberList}</ul>;
}

export default TeamList;
