import { UseFormRegister } from 'react-hook-form';
import { SignUpForm, FormHandlers } from '../../types/forms';

import './FormFields.scss';

export function EmailField({ register, errors }: FormHandlers) {
  const registerSignUp = register as UseFormRegister<SignUpForm>;

  return (
    <>
      <div className="sign-field" data-testid="email-field">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" {...registerSignUp('email')}></input>
      </div>
      {errors.email && <p className="error-message">{errors.email.message}</p>}
    </>
  );
}
