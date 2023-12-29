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
import {
  EXECUTE_QUERY,
  HEADER_NAME,
  HEADER_VALUE,
  INVALID_HEADERS_ERR_MSG,
  INVALID_VARIABLES_ERR_MSG,
  IS_INVALID,
  PRETTIFY_QUERY,
} from '../../constants';

export const RUN_BTN_TEST_ID = 'run-btn';
export const PRETTIFY_BTN_TEST_ID = 'prettify-btn';

interface Props {
  requestViewRef: MutableRefObject<EditorView | null>;
  responseViewRef: MutableRefObject<EditorView | null>;
  variablesViewRef: MutableRefObject<EditorView | null>;
  headersViewRef: MutableRefObject<EditorView | null>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ControlPanel({
  requestViewRef,
  responseViewRef,
  variablesViewRef,
  headersViewRef,
  setIsLoading,
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
    value: unknown,
    schema: Schema
  ): Promise<{ error: null | string }> =>
    schema
      .validate(value, { abortEarly: false })
      .then(() => ({ error: null }))
      .catch((err: ValidationError) => ({ error: err.message }));

  const run = async () => {
    const query = requestViewRef.current?.state.doc.toString() ?? '';
    const invalidVarsMsg = translate(INVALID_VARIABLES_ERR_MSG);
    const invalidHdrsMsg = translate(INVALID_HEADERS_ERR_MSG);
    const hdrsName = translate(HEADER_NAME);
    const hdrsValue = translate(HEADER_VALUE);
    const isInvalid = translate(IS_INVALID);

    const { object: variables, error: varsError } =
      parseJsonFromEditorValue(variablesViewRef);
    const { object: headers, error: headersError } =
      parseJsonFromEditorValue(headersViewRef);

    if (varsError) return toastError(`${invalidVarsMsg}: ${varsError.message}`);
    if (headersError)
      return toastError(`${invalidHdrsMsg}: ${headersError.message}`);

    for (const [name, value] of Object.entries(headers)) {
      const { error: nameErr } = await validateWithSchema(
        name,
        headerNameValidation
      );
      if (nameErr)
        return toastError(`${hdrsName} "${name}" ${isInvalid}: ${nameErr}`);

      const { error: valueErr } = await validateWithSchema(
        value,
        headerValueValidation
      );
      if (valueErr)
        return toastError(`${hdrsValue} "${value}" ${isInvalid}: ${valueErr}`);
    }

    replaceEditorText(responseViewRef, '');
    setIsLoading(true);

    const action = graphqlApi.endpoints.getQueryResponse.initiate({
      query,
      variables,
      headers,
    });

    const { data } = await dispatch(action);

    setIsLoading(false);
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
