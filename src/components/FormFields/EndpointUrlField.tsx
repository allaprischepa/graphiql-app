import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import './FormFields.scss';

interface Props {
  register: UseFormRegisterReturn<'endpointUrl'>;
  labelText: string;
  errors: FieldErrors<{ endpointUrl: string }>;
}

export function EndpointUrlField({ register, labelText, errors }: Props) {
  return (
    <>
      <div className="api-field">
        <label htmlFor="endpoint-url">{labelText}:</label>
        <input type="text" id="endpoint-url" {...register} />
      </div>
      {errors.endpointUrl && (
        <p className="error-message">{errors.endpointUrl.message}</p>
      )}
    </>
  );
}
