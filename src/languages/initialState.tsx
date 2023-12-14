import { Languages } from '../utils/enums';

const localStorageLang = localStorage.getItem('language');

const initialState = {
  language: localStorageLang ? localStorageLang : Languages.RU,
};

export default initialState;
