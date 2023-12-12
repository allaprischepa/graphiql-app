import { FormHandlers } from '../../types/forms';

import { useState } from 'react';

import './FormFields.scss';

export function PasswordFieldConfirm({ register, errors }: FormHandlers) {
  const [isOpenedPassword, setIsOpenedPassword] = useState(false);

  return (
    <>
      <div className="field">
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input
          type={isOpenedPassword ? 'text' : 'password'}
          id="confirmPassword"
          {...register('confirmPassword')}
        ></input>
        <div
          className={
            isOpenedPassword ? 'password-opened-eye' : 'password-closed-eye'
          }
          onClick={() => setIsOpenedPassword(!isOpenedPassword)}
        ></div>
      </div>
      {errors.confirmPassword && (
        <p className="error-message">{errors.confirmPassword.message}</p>
      )}
    </>
  );
}
