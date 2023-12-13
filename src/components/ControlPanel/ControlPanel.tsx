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
}

export default function ControlPanel({
  requestViewRef,
  responseViewRef,
  variablesViewRef,
}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const run = async () => {
    const query = requestViewRef.current?.state.doc.toString() ?? '';
    const variablesString =
      variablesViewRef.current?.state.doc.toString() ?? '';
    const { object: variables, error } = parseJsonFromString(variablesString);

    if (error)
      return toastError(`Variables are invalid JSON: ${error.message}`);

    const action = graphqlApi.endpoints.getQueryResponse.initiate({
      query,
      variables,
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
        className="btn run"
        onClick={run}
        title={titles.runBtn[Languages.EN]}
        data-testid={RUN_BTN_TEST_ID}
      />
      <button
        className="btn prettify"
        onClick={prettify}
        title={titles.prettifyBtn[Languages.EN]}
        data-testid={PRETTIFY_BTN_TEST_ID}
      />
    </div>
  );
}
