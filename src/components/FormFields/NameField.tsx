import { useContext } from 'react';
import { FormHandlersSignUp } from '../../types/forms';

import './FormFields.scss';
import { langContext } from '../../languages/langContext';
import { RU_EN } from '../../constants';

export function NameField({ register, errors }: FormHandlersSignUp) {
  const {
    dispatch: { translate },
  } = useContext(langContext);

  return (
    <>
      <div className="sign-field" data-testid="name-field">
        <label htmlFor="name">{translate(RU_EN.FORMS.FIELD.NAME)}:</label>
        <input type="text" id="name" {...register('name')}></input>
      </div>
      {errors.name && <p className="error-message">{errors.name.message}</p>}
    </>
  );
}
