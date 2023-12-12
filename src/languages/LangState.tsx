import { useReducer } from 'react';
import en from './lang/en';
import ru from './lang/ru';
import { LangStateProps } from '../types/types';
import langReducer from './langReducer';
import { langContext } from './langContext';
// import initialState from './initialState';
import { LangActionType, Languages } from '../utils/enums';

function LangState({ children, initialState }: LangStateProps) {
  const [state, dispatch] = useReducer(langReducer, initialState);

  const setLanguage = (lang: string) => {
    localStorage.setItem('language', lang);

    dispatch({
      type: LangActionType.SET_LANGUAGE,
      payload: lang,
    });
  };

  const translate = (key: string) => {
    const { language } = state;

    let langData: { [key: string]: string } = {};

    if (language === Languages.EN) {
      langData = en;
    } else if (language === Languages.RU) {
      langData = ru;
    }

    return langData[key];
  };

  return (
    <langContext.Provider
      value={{ state, dispatch: { setLanguage, translate } }}
    >
      {children}
    </langContext.Provider>
  );
}

export default LangState;
