import QueryEditor from '../../components/QueryEditor/QueryEditor';
import { defaultQueryString } from '../../state/request/requestSlice';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import { useRef } from 'react';
import { EditorView } from 'codemirror';
import './Main.scss';
import EditorTools from '../../components/EditorTools/EditorTools';
import Header from '../../components/Header/Header';

export const TEST_ID = 'main-page';
export const REQUEST_SECTION_TEST_ID = 'request-section';
export const RESPONSE_SECTION_TEST_ID = 'response-section';

export default function Main() {
  const requestViewRef = useRef<EditorView | null>(null);
  const responseViewRef = useRef<EditorView | null>(null);
  const variablesViewRef = useRef<EditorView | null>(null);
  const headersViewRef = useRef<EditorView | null>(null);

  return (
    <>
      <Header />
      <main className="graphiql-container" data-testid={TEST_ID}>
        <section className="graphiql-main">
          <section
            className="request-section"
            data-testid={REQUEST_SECTION_TEST_ID}
          >
            <div className="editor-section">
              <QueryEditor
                viewRef={requestViewRef}
                mode="request"
                text={defaultQueryString}
              />
              <ControlPanel
                requestViewRef={requestViewRef}
                responseViewRef={responseViewRef}
                variablesViewRef={variablesViewRef}
                headersViewRef={headersViewRef}
              />
            </div>
            <div className="tools-section">
              <EditorTools
                variablesViewRef={variablesViewRef}
                headersViewRef={headersViewRef}
              />
            </div>
          </section>
          <section
            className="response-section"
            data-testid={RESPONSE_SECTION_TEST_ID}
          >
            <QueryEditor viewRef={responseViewRef} mode="response" />
          </section>
        </section>
      </main>
    </>
  );
}
