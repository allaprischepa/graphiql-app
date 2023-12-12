import { FormHandlers } from '../../types/forms';

import './FormFields.scss';

export function NameField({ register, errors }: FormHandlers) {
  return (
    <>
      <div className="field">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register('name')}></input>
      </div>
      {errors.name && <p className="error-message">{errors.name.message}</p>}
    </>
  );
}
