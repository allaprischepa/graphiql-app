import * as yup from 'yup';
import {
  HEADER_VALIDATION_MSG,
  TYPE_STRING_VALIDATION_MSG,
} from '../constants';
import { getTranslatedMSg } from './utils';

export const headerNameValidation = yup
  .string()
  .ensure()
  .matches(
    /^[a-zA-Z0-9\-\_]+$/,
    () => `${getTranslatedMSg(HEADER_VALIDATION_MSG)}: - and _`
  )
  .typeError(() => getTranslatedMSg(TYPE_STRING_VALIDATION_MSG));

export const headerValueValidation = yup
  .string()
  .ensure()
  .matches(
    /^[a-zA-Z0-9\_ :;.,\\\/"'?!(){}[\]@<>=\-+*#$&`|~^%]*$/,
    () =>
      `${getTranslatedMSg(HEADER_VALIDATION_MSG)}:
      _ :;.,\/"'?!(){}[]@<>=-+*#$&\`|~^%`
  )
  .typeError(() => getTranslatedMSg(TYPE_STRING_VALIDATION_MSG));
