import * as yup from 'yup';
import { getTranslatedMsg } from './utils';
import { ENDPOINT_VALIDATION_MSG, REQUIRED_MSG, RU_EN } from '../constants';

export const validMessages = {
  name: {
    required: () => getTranslatedMsg(RU_EN.VALID.NAME.REQUIRED),
    max: () => getTranslatedMsg(RU_EN.VALID.NAME.MAX),
    startLetter: () => getTranslatedMsg(RU_EN.VALID.NAME.START_LETTER),
  },
  email: {
    required: () => getTranslatedMsg(RU_EN.VALID.EMAIL.REQUIRED),
    valid: () => getTranslatedMsg(RU_EN.VALID.EMAIL.VALID),
  },
  password: {
    required: () => getTranslatedMsg(RU_EN.VALID.PASSWORD.REQUIRED),
    min: () => getTranslatedMsg(RU_EN.VALID.PASSWORD.MIN),
    hasNumber: () => getTranslatedMsg(RU_EN.VALID.PASSWORD.HAS_NUMBER),
    hasLetter: () => getTranslatedMsg(RU_EN.VALID.PASSWORD.HAS_LETTER),
    hasSpecial: () => getTranslatedMsg(RU_EN.VALID.PASSWORD.HAS_SPECIAL),
  },
  confirmPassword: {
    required: () => getTranslatedMsg(RU_EN.VALID.CONFIRM.REQUIRED),
    matchPassword: () => getTranslatedMsg(RU_EN.VALID.CONFIRM.MATCH_PASSWORD),
  },
};

export const name = yup
  .string()
  .required(validMessages.name.required)
  .max(32, validMessages.name.max)
  .matches(/^\p{Letter}/u, validMessages.name.startLetter);

export const email = yup
  .string()
  .required(validMessages.email.required)
  .email(validMessages.email.valid);

const password = yup
  .string()
  .required(validMessages.password.required)
  .min(8, validMessages.password.min)
  .matches(/\p{Number}/gu, validMessages.password.hasNumber)
  .matches(/\p{Letter}/gu, validMessages.password.hasLetter)
  .matches(/\p{Symbol}|\p{Punctuation}/gu, validMessages.password.hasSpecial);

const confirmPassword = yup
  .string()
  .required(validMessages.confirmPassword.required)
  .oneOf([yup.ref('password')], validMessages.confirmPassword.matchPassword);

export const validationSchemaSignUp = yup.object().shape({
  name: name,
  email: email,
  password: password,
  confirmPassword: confirmPassword,
});

export const validationSchemaSignIn = yup.object().shape({
  email: email,
  password: password,
});

export const validationSchemaEndpoint = yup.object().shape({
  endpointUrl: yup
    .string()
    .required(() => getTranslatedMsg(REQUIRED_MSG))
    .url(() => getTranslatedMsg(ENDPOINT_VALIDATION_MSG)),
});
