import { useDispatch } from 'react-redux';
import { graphqlApi } from '../../api/graphqlApi';
import { AppDispatch } from '../../state/store';
import { MutableRefObject } from 'react';
import { EditorView } from 'codemirror';
import './ControlPanel.scss';
import { titles } from '../../data/graphiql';
import { Languages } from '../../utils/enums';
import {
  parseJsonFromString,
  prettifyGraphQLString,
  replaceEditorText,
} from '../../utils/utils';
import { toastError } from '../../utils/toastify-utils';

export const RUN_BTN_TEST_ID = 'run-btn';
export const PRETTIFY_BTN_TEST_ID = 'prettify-btn';

interface Props {
  requestViewRef: MutableRefObject<EditorView | null>;
  responseViewRef: MutableRefObject<EditorView | null>;
  variablesViewRef: MutableRefObject<EditorView | null>;
  headersViewRef: MutableRefObject<EditorView | null>;
}

export default function ControlPanel({
  requestViewRef,
  responseViewRef,
  variablesViewRef,
  headersViewRef,
}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const run = async () => {
    const query = requestViewRef.current?.state.doc.toString() ?? '';
    const variablesString =
      variablesViewRef.current?.state.doc.toString() ?? '';
    const headersString = headersViewRef.current?.state.doc.toString() ?? '';

    const { object: variables, error: varsError } =
      parseJsonFromString(variablesString);
    const { object: headers, error: headersError } =
      parseJsonFromString(headersString);

    if (varsError)
      return toastError(`Variables are invalid JSON: ${varsError.message}`);
    if (headersError)
      return toastError(`Headers are invalid JSON: ${headersError.message}`);

    const action = graphqlApi.endpoints.getQueryResponse.initiate({
      query,
      variables,
      headers,
    });

    const { data } = await dispatch(action);

    if (data) replaceEditorText(responseViewRef, JSON.stringify(data, null, 2));
  };

  const prettify = () => {
    const queryString = requestViewRef.current?.state.doc.toString() ?? '';
    const prettified = prettifyGraphQLString(queryString);
    replaceEditorText(requestViewRef, prettified);
  };

  return (
    <div className="control-panel">
      <button
        className="ctrl-btn run"
        onClick={run}
        title={titles.runBtn[Languages.EN]}
        data-testid={RUN_BTN_TEST_ID}
      />
      <button
        className="ctrl-btn prettify"
        onClick={prettify}
        title={titles.prettifyBtn[Languages.EN]}
        data-testid={PRETTIFY_BTN_TEST_ID}
      />
    </div>
  );
}
