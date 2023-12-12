import { FormHandlers } from '../../types/forms';
import './FormFields.scss';

export function EmailField({ register, errors }: FormHandlers) {
  return (
    <>
      <div className="field">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" {...register('email')}></input>
      </div>
      {errors.email && <p className="error-message">{errors.email.message}</p>}
    </>
  );
}
