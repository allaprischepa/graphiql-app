import { FormHandlers, SignUpForm } from '../../types/forms';
import { UseFormRegister } from 'react-hook-form';
import { useContext, useState } from 'react';

import './FormFields.scss';
import { RU_EN } from '../../constants';
import { langContext } from '../../languages/langContext';

export function PasswordField({ register, errors }: FormHandlers) {
  const registerSignUp = register as UseFormRegister<SignUpForm>;
  const {
    dispatch: { translate },
  } = useContext(langContext);

  const [isOpenedPassword, setIsOpenedPassword] = useState(false);

  return (
    <>
      <div className="sign-field with-icon" data-testid="password-field">
        <label htmlFor="password">
          {translate(RU_EN.FORMS.FIELD.PASSWORD)}:
        </label>
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
