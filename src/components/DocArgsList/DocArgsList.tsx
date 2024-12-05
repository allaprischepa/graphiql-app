import { Arg } from '../../types/types';
import DocArg from '../DocArg/DocArg';
import './DocArgsList.scss';

export interface DocArgsProps {
  args: Arg[];
}

function DocArgsList({ args }: DocArgsProps) {
  const docArgs = args.map((arg) => (
    <li key={arg.name}>
      <DocArg arg={arg} />
    </li>
  ));

  return <ul className="args">{docArgs}</ul>;
}

export default DocArgsList;
