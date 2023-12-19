import { useDispatch } from 'react-redux';
import { graphqlApi } from '../../api/graphqlApi';
import { AppDispatch } from '../../state/store';
import { MutableRefObject, useContext } from 'react';
import { EditorView } from 'codemirror';
import './ControlPanel.scss';
import {
  parseJsonFromString,
  prettifyGraphQLString,
  replaceEditorText,
} from '../../utils/utils';
import { toastError } from '../../utils/toastify-utils';
import {
  headerNameValidation,
  headerValueValidation,
} from '../../utils/headersValidationRules';
import { Schema, ValidationError } from 'yup';
import { langContext } from '../../languages/langContext';
import { EXECUTE_QUERY, PRETTIFY_QUERY } from '../../constants';

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
  const {
    dispatch: { translate },
  } = useContext(langContext);

  const parseJsonFromEditorValue = (
    viewRef: MutableRefObject<EditorView | null>
  ) => {
    const str = viewRef.current?.state.doc.toString() ?? '';
    return parseJsonFromString(str);
  };

  const validateWithSchema = async (
    value: string,
    schema: Schema
  ): Promise<{ error: null | string }> =>
    schema
      .validate(value, { abortEarly: false })
      .then(() => ({ error: null }))
      .catch((err: ValidationError) => ({ error: err.message }));

  const run = async () => {
    const query = requestViewRef.current?.state.doc.toString() ?? '';

    const { object: variables, error: varsError } =
      parseJsonFromEditorValue(variablesViewRef);
    const { object: headers, error: headersError } =
      parseJsonFromEditorValue(headersViewRef);

    if (varsError)
      return toastError(`Variables are invalid JSON: ${varsError.message}`);
    if (headersError)
      return toastError(`Headers are invalid JSON: ${headersError.message}`);

    for (const [name, value] of Object.entries(headers)) {
      const { error: nameErr } = await validateWithSchema(
        name,
        headerNameValidation
      );
      if (nameErr)
        return toastError(`Header name "${name}" is invalid: ${nameErr}`);

      const { error: valueErr } = await validateWithSchema(
        value,
        headerValueValidation
      );
      if (valueErr)
        return toastError(`Header value "${value}" is invalid: ${valueErr}`);
    }

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
        title={translate(EXECUTE_QUERY)}
        data-testid={RUN_BTN_TEST_ID}
      />
      <button
        className="ctrl-btn prettify"
        onClick={prettify}
        title={translate(PRETTIFY_QUERY)}
        data-testid={PRETTIFY_BTN_TEST_ID}
      />
    </div>
  );
}
