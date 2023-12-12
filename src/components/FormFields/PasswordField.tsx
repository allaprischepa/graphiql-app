import { FormHandlers } from '../../types/forms';

import { useState } from 'react';

export function PasswordField({ register, errors }: FormHandlers) {
  const [isOpenedPassword, setIsOpenedPassword] = useState(false);

  return (
    <>
      <div className="field">
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
        ></div>
      </div>
      {errors.password && (
        <p className="error-message">{errors.password.message}</p>
      )}
    </>
  );
}
