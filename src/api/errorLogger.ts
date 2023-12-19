import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit';
import { toastError } from '../utils/toastify-utils';

interface ErrorPayload {
  data?: {
    errors?: Error[];
  };
}

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const errPayload = action.payload as ErrorPayload;
    const defaultError =
      'Something went wrong. Please, try again later or choose another endpoint.';
    const errors = errPayload.data?.errors;

    if (errors) {
      errors.forEach((error: Error) => toastError(error.message));
    } else {
      toastError(defaultError);
    }
  }

  return next(action);
};
