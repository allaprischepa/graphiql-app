import { FormHandlers } from '../../types/forms';

import { useState } from 'react';

import './FormFields.scss';

export function PasswordField({ register, errors }: FormHandlers) {
  const [isOpenedPassword, setIsOpenedPassword] = useState(false);

  return (
    <>
      <div className="field" data-testid="password-field">
        <label htmlFor="password">Password:</label>
        <input
          type={isOpenedPassword ? 'text' : 'password'}
          id="password"
          {...register('password')}
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
