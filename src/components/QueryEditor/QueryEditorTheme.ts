import { EditorView } from 'codemirror';

const defaultThemeSettings = {
  '.cm-content': {
    fontSize: '15px',
  },
  '.cm-gutters, .cm-activeLine, .cm-activeLineGutter': {
    backgroundColor: 'inherit',
    border: 'none',
  },
  '.cm-scroller': {
    overflowX: 'hidden',
  },
};
const requestThemeSettings = {
  ...defaultThemeSettings,
  '.cm-scroller': {
    width: 'max-content',
  },
};

export const defaultEditorTheme = EditorView.theme(defaultThemeSettings);
export const requestEditorTheme = EditorView.theme(requestThemeSettings);
