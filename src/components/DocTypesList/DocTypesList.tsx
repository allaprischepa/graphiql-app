import { DocTypes } from '../../types/types';
import DocType from '../DocType/DocType';

export interface DocTypesProps {
  types: DocTypes[];
}

function DocTypesList({ types }: DocTypesProps) {
  const docTypes = types.map((type) => (
    <li key={type.name}>
      <DocType key={type.name} type={type.name} />
    </li>
  ));

  return <ul className="fields">{docTypes}</ul>;
}

export default DocTypesList;
