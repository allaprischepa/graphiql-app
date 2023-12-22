import { EditorView } from 'codemirror';
import { MutableRefObject } from 'react';
import { ParseJsonResult } from '../types/types';
import { Languages } from './enums';
import en from '../languages/lang/en';
import ru from '../languages/lang/ru';

export const commentOutString = (str: string) => {
  return str
    .split('\n')
    .map((s) => `#${s}`)
    .join('\n');
};

export const sanitizeString = (str: string) => {
  return str
    .split('\n')
    .filter((s) => s[0] !== '#')
    .filter((s) => s.trim().length > 0)
    .join('\n');
};

export const replaceEditorText = (
  editorViewRef: MutableRefObject<EditorView | null>,
  text: string
) => {
  if (editorViewRef.current) {
    const transaction = {
      changes: {
        from: 0,
        to: editorViewRef.current.state.doc.length,
        insert: text,
      },
    };
    editorViewRef.current.dispatch(transaction);
  }
};

const setTabs = (str: string) => {
  let tabCount = 0;

  return str
    .split('\n')
    .map((subStr) => {
      if (subStr.includes('}') && tabCount > 0) tabCount--;
      const newSubStr = '\t'.repeat(tabCount) + subStr;
      if (subStr.includes('{')) tabCount++;

      return newSubStr;
    })
    .join('\n');
};

export const prettifyGraphQLString = (str: string) => {
  let newStr = sanitizeString(str.trim());
  newStr = newStr
    .replaceAll(/(\s+)/g, ' ')
    .replaceAll(/(\s*\(\s*)/g, '(')
    .replaceAll(/(\s*\)\s*)/g, ') ')
    .replaceAll(/(\s*{\s*)/g, ' {\n')
    .replaceAll(/(\s*})/g, '\n}')
    .replaceAll(/(\w+)\s+(?=\w)/g, '$1\n')
    .replaceAll(/(\s+)(query)/g, '$2')
    .replaceAll(/(query)(\s+)/g, '$1 ')
    .replaceAll(/(query\s+{)/g, '{');
  newStr = setTabs(newStr);

  return newStr;
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const parseJsonFromString = (str: string): ParseJsonResult => {
  let object: Record<string, unknown> = {};
  let error = null;

  if (str.length > 0) {
    try {
      object = JSON.parse(str);
    } catch (err) {
      if (err instanceof Error) error = err;
      else throw err;
    }
  }

  return { object, error };
};

export const getTranslatedMSg = (CONSTANT: keyof typeof en) => {
  const lang = localStorage.getItem('language') ?? Languages.RU;
  const langData = lang === Languages.EN ? en : ru;

  return langData[CONSTANT] ?? '';
};
