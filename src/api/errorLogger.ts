import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit';
import { toastError } from '../utils/toastify-utils';
import { GraphQLError } from '../types/types';

interface ErrorPayload {
  data: {
    errors: GraphQLError[];
  };
}

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const errPayload = action.payload as ErrorPayload;
    const errors = errPayload.data.errors;

    if (errors) {
      errors.forEach((error: GraphQLError) => {
        toastError(error.message);
      });
    }
  }

  return next(action);
};
