import { RU_EN } from '../constants';
import { AppRoutes } from '../utils/enums';

export const getNavigation = (translate: (key: string) => string) => [
  { text: translate(RU_EN.HEADER_NAV.SIGN_IN), to: AppRoutes.signIn },
  { text: translate(RU_EN.HEADER_NAV.SIGN_UP), to: AppRoutes.signUp },
];

export const getNavigationPrivate = (translate: (key: string) => string) => [
  { text: translate(RU_EN.HEADER_NAV.MAIN), to: AppRoutes.main },
];
