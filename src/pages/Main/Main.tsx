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
    <div className="graphiql">
      <div className="request-section">
        <QueryEditor
          viewRef={requestViewRef}
          mode="request"
          text={defaultQueryString}
        />
        <ControlPanel
          requestViewRef={requestViewRef}
          responseViewRef={responseViewRef}
        />
      </div>
      <div className="response-section">
        <QueryEditor viewRef={responseViewRef} mode="response" />
      </div>
    </div>
  );
}
