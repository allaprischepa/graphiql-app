import { basicSetup, EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { MutableRefObject, useEffect, useRef } from 'react';
import { graphql } from 'cm6-graphql';
import { useDispatch } from 'react-redux';
import { defaultEditorTheme, responseEditorTheme } from './QueryEditorTheme';
import { json } from '@codemirror/lang-json';
import {
  editorSyntaxHighlight,
  specificWordsHighlight,
} from './QueryEditorHighlight';
import './QueryEditor.scss';

interface Props {
  viewRef: MutableRefObject<EditorView | null>;
  mode: 'request' | 'response' | 'default';
  text?: string;
}

export default function QueryEditor({ viewRef, mode, text }: Props) {
  const editorRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editorRef.current instanceof HTMLDivElement) {
      const requestMode = mode === 'request';
      const responseMode = mode === 'response';
      const theme = responseMode ? responseEditorTheme : defaultEditorTheme;
      const language = requestMode ? graphql() : json();
      const editable = mode !== 'response';

      const extensions = [
        basicSetup,
        EditorView.editable.of(editable),
        EditorState.tabSize.of(2),
        language,
        theme,
        editorSyntaxHighlight,
      ];

      if (responseMode)
        extensions.push(EditorView.lineWrapping, specificWordsHighlight);

      const editorView = new EditorView({
        doc: text,
        extensions,
        parent: editorRef.current,
      });

      viewRef.current = editorView;

      return () => editorView.destroy();
    }
  }, [viewRef, mode, text, dispatch]);

  return <div className="editor" ref={editorRef} />;
}
