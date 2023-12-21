import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit';
import { toastError } from '../utils/toastify-utils';
import { Languages } from '../utils/enums';
import en from '../languages/lang/en';
import ru from '../languages/lang/ru';
import { DEFAULT_QUERY_ERR_MSG, QUERY_ERR_MSG_PREFIX } from '../constants';

interface ErrorPayload {
  data?: {
    errors?: Error[];
  };
}

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const errPayload = action.payload as ErrorPayload;
    const lang = localStorage.getItem('language') ?? Languages.RU;
    const langData = lang === Languages.EN ? en : ru;
    const defaultError = langData[DEFAULT_QUERY_ERR_MSG];
    const errors = errPayload.data?.errors;

    if (errors) {
      const errPrefix = langData[QUERY_ERR_MSG_PREFIX];
      errors.forEach((error: Error) =>
        toastError(`${errPrefix}: ${error.message}`)
      );
    } else {
      toastError(defaultError);
    }
  }

  return next(action);
};
