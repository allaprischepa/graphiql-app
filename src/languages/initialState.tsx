import { Languages } from '../utils/enums';

const getInitialState = (): {
  language: string;
} => {
  const localStorageLang = localStorage.getItem('language');
  return {
    language: localStorageLang ? localStorageLang : Languages.RU,
  };
};

export default getInitialState;
