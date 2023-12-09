import { basicSetup, EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { MutableRefObject, useEffect, useRef } from 'react';
import { graphql } from 'cm6-graphql';
import { useDispatch } from 'react-redux';

interface Props {
  viewRef: MutableRefObject<EditorView | null>;
  mode: 'request' | 'response';
  text?: string;
}

export default function QueryEditor({ viewRef, mode, text }: Props) {
  const editorRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editorRef.current instanceof HTMLDivElement) {
      const editorView = new EditorView({
        doc: text,
        extensions: [
          basicSetup,
          EditorView.editable.of(mode === 'request'),
          EditorState.tabSize.of(2),
          EditorView.lineWrapping,
          graphql(),
        ],
        parent: editorRef.current,
      });

      viewRef.current = editorView;

      return () => editorView.destroy();
    }
  }, [viewRef, mode, text, dispatch]);

  return <div className="editor" ref={editorRef} />;
}
