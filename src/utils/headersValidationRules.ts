import * as yup from 'yup';
import {
  HEADER_VALIDATION_MSG,
  TYPE_STRING_VALIDATION_MSG,
} from '../constants';
import { getTranslatedMsg } from './utils';

export const headerNameValidation = yup
  .string()
  .ensure()
  .matches(
    /^[a-zA-Z0-9\-\_]+$/,
    () => `${getTranslatedMsg(HEADER_VALIDATION_MSG)}: - and _`
  )
  .typeError(() => getTranslatedMsg(TYPE_STRING_VALIDATION_MSG));

export const headerValueValidation = yup
  .string()
  .ensure()
  .matches(
    /^[a-zA-Z0-9\_ :;.,\\\/"'?!(){}[\]@<>=\-+*#$&`|~^%]*$/,
    () =>
      `${getTranslatedMsg(HEADER_VALIDATION_MSG)}:
      _ :;.,\/"'?!(){}[]@<>=-+*#$&\`|~^%`
  )
  .typeError(() => getTranslatedMsg(TYPE_STRING_VALIDATION_MSG));
