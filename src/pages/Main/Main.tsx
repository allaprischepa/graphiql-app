import QueryEditor from '../../components/QueryEditor/QueryEditor';
import { defaultQueryString } from '../../state/request/requestSlice';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import { useRef } from 'react';
import { EditorView } from 'codemirror';
import './Main.scss';

export const TEST_ID = 'main-page';
export const REQUEST_SECTION_TEST_ID = 'request-section';
export const RESPONSE_SECTION_TEST_ID = 'response-section';

export default function Main() {
  const requestViewRef = useRef<EditorView | null>(null);
  const responseViewRef = useRef<EditorView | null>(null);

  return (
    <main className="graphiql-container" data-testid={TEST_ID}>
      <section className="graphiql-main">
        <section
          className="request-section"
          data-testid={REQUEST_SECTION_TEST_ID}
        >
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
        <section
          className="response-section"
          data-testid={RESPONSE_SECTION_TEST_ID}
        >
          <QueryEditor viewRef={responseViewRef} mode="response" />
        </section>
      </section>
    </main>
  );
}
