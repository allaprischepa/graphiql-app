import './DocField.scss';
import DocType from '../DocType/DocType';
import DocArgsList from '../DocArgsList/DocArgsList';
import { Field } from '../../types/types';

export interface FieldProps {
  field: Field;
}

function DocField({ field }: FieldProps) {
  const { name, args, type, descr } = field;

  return (
    <div className="field" key={name}>
      <span className="field">{name}</span>
      {!!args.length && (
        <>
          <span className="additional">(</span>
          <DocArgsList args={args} />
          <span className="additional">)</span>
        </>
      )}
      <span className="additional">:&nbsp;</span>
      <DocType type={type} />
      {descr && args.length === 0 && <p>{descr}</p>}
    </div>
  );
}

export default DocField;
