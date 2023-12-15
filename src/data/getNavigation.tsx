import { SIGN_IN, SIGN_OUT } from '../constants';
import { AppRoutes } from '../utils/enums';

export const getNavigation = (translate: (key: string) => string) => [
  { text: translate(SIGN_IN), to: AppRoutes.signIn },
  { text: translate(SIGN_OUT), to: AppRoutes.signUp },
];
