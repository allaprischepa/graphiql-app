import * as yup from 'yup';
import { Languages } from './enums';
import en from '../languages/lang/en';
import ru from '../languages/lang/ru';
import {
  HEADER_VALIDATION_MSG,
  TYPE_STRING_VALIDATION_MSG,
} from '../constants';

const getTranslatedMSg = (type?: string) => {
  const lang = localStorage.getItem('language') ?? Languages.RU;
  const langData = lang === Languages.EN ? en : ru;

  return type === 'typeString'
    ? langData[TYPE_STRING_VALIDATION_MSG]
    : langData[HEADER_VALIDATION_MSG];
};

export const headerNameValidation = yup
  .string()
  .ensure()
  .matches(/^[a-zA-Z0-9\-\_]+$/, () => `${getTranslatedMSg()}: - and _`)
  .typeError(() => getTranslatedMSg('typeString'));

export const headerValueValidation = yup
  .string()
  .ensure()
  .matches(
    /^[a-zA-Z0-9\_ :;.,\\\/"'?!(){}[\]@<>=\-+*#$&`|~^%]*$/,
    () => `${getTranslatedMSg()}: _ :;.,\/"'?!(){}[]@<>=-+*#$&\`|~^%`
  )
  .typeError(() => getTranslatedMSg('typeString'));
