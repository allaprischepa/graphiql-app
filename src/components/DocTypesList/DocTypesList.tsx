import { DocTypes } from '../../types/types';
import DocType from '../DocType/DocType';
import './DocTypesList.scss';

export interface DocTypesProps {
  types: DocTypes[];
}

function DocTypesList({ types }: DocTypesProps) {
  const docTypes = types.map((type) => (
    <li className="list-item" key={type.name} data-testid="doc-type">
      <DocType key={type.name} type={type.name} />
    </li>
  ));

  return <ul className="fields">{docTypes}</ul>;
}

export default DocTypesList;
