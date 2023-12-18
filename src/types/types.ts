import { ReactNode } from 'react';
import { LangActionType } from '../utils/enums';

export interface NavigationLinkProps {
  text: string;
  to: string;
}

export interface NavigationItem {
  id: number;
  text: string;
  to: string;
}

export interface FeatureItem {
  id: number;
  icon: string;
  text: string;
}

export interface MemberItem {
  id: number;
  photo: string;
  name: string;
  github: string;
  href: string;
  text: string;
  isTeamlead: boolean;
}

export interface LanguageState {
  language: string;
}

export interface LangStateProps {
  children: ReactNode;
  initialState: {
    language: string;
  };
}

export interface SetLangAction {
  type: typeof LangActionType.SET_LANGUAGE;
  payload: string;
}

export interface ContextProps {
  state: LanguageState;
  dispatch: {
    setLanguage: (lang: string) => void;
    translate: (key: string) => string;
  };
}
