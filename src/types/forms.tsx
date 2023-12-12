import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';

export type SignInForm = {
  email: string;
  password: string;
};

export type SignUpForm = SignInForm & {
  name: string;
  confirmPassword: string;
};

export type FormHandlers = {
  register: UseFormRegister<SignUpForm>;
  errors: FieldErrors<SignUpForm>;
};
