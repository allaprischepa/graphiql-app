import { LanguageState, SetLangAction } from '../types/types';
import { LangActionType } from '../utils/enums';

const langReducer = (
  state: LanguageState,
  action: SetLangAction
): LanguageState => {
  switch (action.type) {
    case LangActionType.SET_LANGUAGE:
      return {
        language: action.payload,
      };
    default:
      return state;
  }
};

export default langReducer;
