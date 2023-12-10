import * as yup from 'yup';

const name = yup
  .string()
  .required('enter your name')
  .max(32, 'at most 32 characters')
  .matches(/^\p{Letter}/u, 'start with letter');

const email = yup.string().email().required('enter your e-mail');

const password = yup
  .string()
  .required('enter your password')
  .min(8, 'at least 8 characters')
  .matches(/\p{Number}/gu, 'at least 1 number')
  .matches(/\p{Letter}/gu, 'at least 1 letter')
  .matches(/\p{Symbol}|\p{Punctuation}/gu, 'at least 1 special character');

const confirmPassword = yup
  .string()
  .required('confirm your password')
  .oneOf([yup.ref('password')], 'passwords must match');

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
