export type SignInForm = {
  email: string;
  password: string;
};

export type SignUpForm = SignInForm & {
  password: string;
  confirmPassword: string;
};
