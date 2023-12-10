export type SignInForm = {
  email: string;
  password: string;
};

export type SignUpForm = SignInForm & {
  name: string;
  confirmPassword: string;
};
