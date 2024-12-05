import { MemberItem } from '../../types/types';
import './Member.scss';

export interface MemberProps {
  member: MemberItem;
}

function Member({ member }: MemberProps) {
  const { name, photo, github, href, text } = member;

  return (
    <>
      <div className="thumb">
        <img src={photo} />
      </div>
      <div className="description">
        <h3>{name}</h3>
        <p>
          {text}
          <br />
          <a href={href}>{github}</a>
        </p>
      </div>
    </>
  );
}

export default Member;
