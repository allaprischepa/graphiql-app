import * as yup from 'yup';
import { getTranslatedMSg } from './utils';
import { ENDPOINT_VALIDATION_MSG, REQUIRED_MSG } from '../constants';

export const validMessages = {
  name: {
    required: 'enter your name',
    max: 'at most 32 characters',
    startLetter: 'start with letter',
  },
  email: {
    required: 'enter your e-mail',
  },
  password: {
    required: 'enter your password',
    min: 'at least 8 characters',
    hasNumber: 'at least 1 number',
    hasLetter: 'at least 1 letter',
    hasSpecial: 'at least 1 special character',
  },
  confirmPassword: {
    required: 'confirm your password',
    matchPassword: 'passwords must match',
  },
};

export const name = yup
  .string()
  .required(validMessages.name.required)
  .max(32, validMessages.name.max)
  .matches(/^\p{Letter}/u, validMessages.name.startLetter);

export const email = yup
  .string()
  .email()
  .required(validMessages.email.required);

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
    .required(() => getTranslatedMSg(REQUIRED_MSG))
    .url(() => getTranslatedMSg(ENDPOINT_VALIDATION_MSG)),
});
