import { useDispatch } from 'react-redux';
import { graphqlApi } from '../../api/graphqlApi';
import { AppDispatch } from '../../state/store';
import { MutableRefObject } from 'react';
import { EditorView } from 'codemirror';
import './ControlPanel.scss';
import { titles } from '../../data/graphiql';
import { Languages } from '../../utils/enums';
import { prettifyGraphQLString } from '../../utils/utils';

interface Props {
  requestViewRef: MutableRefObject<EditorView | null>;
  responseViewRef: MutableRefObject<EditorView | null>;
}

export default function ControlPanel({
  requestViewRef,
  responseViewRef,
}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const replaceText = (
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

  const run = async () => {
    const queryString = requestViewRef.current?.state.doc.toString() ?? '';
    const action = graphqlApi.endpoints.getQueryResponse.initiate(queryString);
    const { data } = await dispatch(action);

    if (data) replaceText(responseViewRef, JSON.stringify(data, null, 2));
  };

  const prettify = () => {
    const queryString = requestViewRef.current?.state.doc.toString() ?? '';
    const prettified = prettifyGraphQLString(queryString);
    replaceText(requestViewRef, prettified);
  };

  return (
    <div className="control-panel">
      <button
        className="btn run"
        onClick={run}
        title={titles.runBtn[Languages.EN]}
      />
      <button
        className="btn prettify"
        onClick={prettify}
        title={titles.prettifyBtn[Languages.EN]}
      />
    </div>
  );
}
