import { useDispatch } from 'react-redux';
import { graphqlApi } from '../../api/graphqlApi';
import { AppDispatch } from '../../state/store';
import { MutableRefObject } from 'react';
import { EditorView } from 'codemirror';
import './ControlPanel.scss';
import { titles } from '../../data/graphiql';
import { Languages } from '../../utils/enums';

interface Props {
  requestViewRef: MutableRefObject<EditorView | null>;
  responseViewRef: MutableRefObject<EditorView | null>;
}

export default function ControlPanel({
  requestViewRef,
  responseViewRef,
}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const run = async () => {
    const queryString = requestViewRef.current?.state.doc.toString() ?? '';
    console.log('queryString', queryString);
    const action = graphqlApi.endpoints.getQueryResponse.initiate(queryString);
    const { data } = await dispatch(action);

    if (data && responseViewRef.current) {
      console.log(JSON.stringify(data));
      const transaction = {
        changes: {
          from: 0,
          to: responseViewRef.current.state.doc.length,
          insert: JSON.stringify(data),
        },
      };
      responseViewRef.current.dispatch(transaction);
    }
  };

  return (
    <div className="control-panel">
      <button className="run" onClick={run} title={titles.run[Languages.EN]} />
    </div>
  );
}
