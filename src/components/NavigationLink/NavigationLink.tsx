import { Link } from 'react-router-dom';
import { NavigationLinkProps } from '../../types/types';

function NavigationLink({ text, to }: NavigationLinkProps) {
  return (
    <li>
      <Link to={to} className="btn">
        {text}
      </Link>
    </li>
  );
}

export default NavigationLink;
