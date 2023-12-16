import { GraphQLSchema } from 'graphql';
import { useEffect } from 'react';
import DocFieldsList from '../DocFieldsList/DocFieldsList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import {
  updateHistory,
  updateTypes,
} from '../../state/documentation/documentationSlice';
import getDocTypes from '../../utils/getDocTypes';
import { DocTypes } from '../../types/types';

function Documentation({ schema }: { schema: GraphQLSchema }) {
  const dispatch = useDispatch();
  const history = useSelector(
    (state: RootState) => state.documentation.history
  );
  const { name, descr, fields } = history[history.length - 1];

  const root = schema.getQueryType();

  useEffect(() => {
    const initRoot: DocTypes = {
      name: 'Docs',
      descr:
        'A GraphQL schema provides a root type for each kind of operation.',
      fields: [
        {
          name: root?.name ?? '',
          type: root?.name ?? '',
          args: [],
          descr: root?.description ?? '',
        },
      ],
    };
    dispatch(updateHistory(initRoot));
  }, [dispatch, root?.name, root?.description]);

  useEffect(() => {
    dispatch(updateTypes(getDocTypes(schema)));
  }, [dispatch, schema]);

  return (
    <>
      <h3>{name}</h3>
      {descr && <p>{descr}</p>}
      {fields && <DocFieldsList fields={fields} />}
    </>
  );
}

export default Documentation;
