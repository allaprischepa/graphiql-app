import { Arg } from '../../types/types';
import DocType from '../DocType/DocType';
import './DocArg.scss';

export interface DocArgProps {
  arg: Arg;
}

function DocArg({ arg }: DocArgProps) {
  const { name, type } = arg;

  return (
    <div>
      <span className="arg">{name}:&nbsp;</span>
      <DocType type={type} />
    </div>
  );
}

export default DocArg;
