import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import './FormFields.scss';

interface Props {
  register: UseFormRegisterReturn<'endpointUrl'>;
  labelText: string;
  errors: FieldErrors<{ endpointUrl: string }>;
  revertText: string;
  revertEndpoint: () => void;
}

export function EndpointUrlField({
  register,
  labelText,
  errors,
  revertText,
  revertEndpoint,
}: Props) {
  return (
    <>
      <div className="api-field with-icon" data-testid="endpoint-field">
        <label htmlFor="endpoint-url">{labelText}:</label>
        <input type="text" id="endpoint-url" {...register} />
        <div
          className="revert-endpoint"
          title={revertText}
          onClick={revertEndpoint}
        />
      </div>
      {errors.endpointUrl && (
        <p className="error-message">{errors.endpointUrl.message}</p>
      )}
    </>
  );
}
