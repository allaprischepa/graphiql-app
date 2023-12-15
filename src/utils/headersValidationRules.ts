import * as yup from 'yup';

export const headerNameValidation = yup
  .string()
  .matches(
    /^[a-zA-Z0-9\-\_]+$/,
    `It can contain only alphanumeric characters and the following special characters: - and _`
  );

export const headerValueValidation = yup
  .string()
  .matches(
    /^[a-zA-Z0-9\_ :;.,\\\/"'?!(){}[\]@<>=\-+*#$&`|~^%]*$/,
    `It contain only alphanumeric characters and the following special characters: _ :;.,\/"'?!(){}[]@<>=-+*#$&\`|~^%`
  );
