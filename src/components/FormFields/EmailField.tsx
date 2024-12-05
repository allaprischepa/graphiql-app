import { UseFormRegister } from 'react-hook-form';
import { SignUpForm, FormHandlers } from '../../types/forms';

import './FormFields.scss';
import { useContext } from 'react';
import { langContext } from '../../languages/langContext';
import { RU_EN } from '../../constants';

export function EmailField({ register, errors }: FormHandlers) {
  const registerSignUp = register as UseFormRegister<SignUpForm>;
  const {
    dispatch: { translate },
  } = useContext(langContext);

  return (
    <>
      <div className="sign-field" data-testid="email-field">
        <label htmlFor="email">{translate(RU_EN.FORMS.FIELD.EMAIL)}:</label>
        <input type="email" id="email" {...registerSignUp('email')}></input>
      </div>
      {errors.email && <p className="error-message">{errors.email.message}</p>}
    </>
  );
}
