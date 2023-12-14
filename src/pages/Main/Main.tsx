import QueryEditor from '../../components/QueryEditor/QueryEditor';
import { defaultQueryString } from '../../state/request/requestSlice';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import { useRef } from 'react';
import { EditorView } from 'codemirror';
import './Main.scss';

export default function Main() {
  const requestViewRef = useRef<EditorView | null>(null);
  const responseViewRef = useRef<EditorView | null>(null);

  return (
    <main className="graphiql-container">
      <section className="graphiql-main">
        <section className="request-section">
          <QueryEditor
            viewRef={requestViewRef}
            mode="request"
            text={defaultQueryString}
          />
          <ControlPanel
            requestViewRef={requestViewRef}
            responseViewRef={responseViewRef}
          />
        </section>
        <section className="response-section">
          <QueryEditor viewRef={responseViewRef} mode="response" />
        </section>
      </section>
    </main>
  );
}
