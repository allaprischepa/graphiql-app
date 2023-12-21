import { Field } from '../../types/types';
import DocField from '../DocField/DocField';
import './DocFieldsList.scss';

export interface DocFieldsProps {
  fields: Field[];
}

function DocFieldsList({ fields }: DocFieldsProps) {
  const docFields = fields.map((field) => (
    <li key={field.name} data-testid="doc-field">
      <DocField field={field} />
    </li>
  ));

  return <ul className="fields">{docFields}</ul>;
}

export default DocFieldsList;
