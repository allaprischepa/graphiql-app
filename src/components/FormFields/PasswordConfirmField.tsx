import { FormHandlersSignUp } from '../../types/forms';
import { useContext, useState } from 'react';

import './FormFields.scss';
import { langContext } from '../../languages/langContext';
import { RU_EN } from '../../constants';

export function PasswordFieldConfirm({ register, errors }: FormHandlersSignUp) {
  const [isOpenedPassword, setIsOpenedPassword] = useState(false);
  const {
    dispatch: { translate },
  } = useContext(langContext);

  return (
    <>
      <div
        className="sign-field with-icon"
        data-testid="confirm-password-field"
      >
        <label htmlFor="confirmPassword">
          {translate(RU_EN.FORMS.FIELD.CONFIRM_PASSWORD)}:
        </label>
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
          data-testid="confirm-password-eye"
        ></div>
      </div>
      {errors.confirmPassword && (
        <p className="error-message">{errors.confirmPassword.message}</p>
      )}
    </>
  );
}
