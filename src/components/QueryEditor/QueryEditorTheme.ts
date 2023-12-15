import { EditorView } from 'codemirror';

const defaultThemeSettings = {
  '&.cm-editor.cm-focused': {
    outline: 'none',
  },
  '.cm-content': {
    fontSize: '15px',
  },
  '.cm-gutters, .cm-activeLine, .cm-activeLineGutter': {
    backgroundColor: 'inherit',
    border: 'none',
  },
  '.cm-scroller': {
    overflowX: 'hidden',
    width: 'max-content',
  },
};

const responseThemeSettings = {
  ...defaultThemeSettings,
  '.cm-scroller': {
    width: 'auto',
  },
};

export const defaultEditorTheme = EditorView.theme(defaultThemeSettings);
export const responseEditorTheme = EditorView.theme(responseThemeSettings);
