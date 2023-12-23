import { FormHandlers, SignUpForm } from '../../types/forms';
import { UseFormRegister } from 'react-hook-form';
import { useState } from 'react';

import './FormFields.scss';

export function PasswordField({ register, errors }: FormHandlers) {
  const registerSignUp = register as UseFormRegister<SignUpForm>;

  const [isOpenedPassword, setIsOpenedPassword] = useState(false);

  return (
    <>
      <div className="sign-field with-icon" data-testid="password-field">
        <label htmlFor="password">Password:</label>
        <input
          type={isOpenedPassword ? 'text' : 'password'}
          id="password"
          {...registerSignUp('password')}
        ></input>
        <div
          className={
            isOpenedPassword ? 'password-opened-eye' : 'password-closed-eye'
          }
          onClick={() => setIsOpenedPassword(!isOpenedPassword)}
          data-testid="password-eye"
        ></div>
      </div>
      {errors.password && (
        <p className="error-message">{errors.password.message}</p>
      )}
    </>
  );
}
