import { IntrospectionQuery, buildClientSchema } from 'graphql';
import { Suspense, useEffect } from 'react';
import DocFieldsList from '../DocFieldsList/DocFieldsList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import {
  updateHistory,
  updateTypes,
} from '../../state/documentation/documentationSlice';
import getDocTypes from '../../utils/getDocTypes';
import { DocTypes } from '../../types/types';
import DocTypesList from '../DocTypesList/DocTypesList';
import './Documentation.scss';
import DocSubtitle from '../DocSubtitle/DocSubtitle';
import './Documentation.scss';
import DocNav from '../DocNav/DocNav';
import { useGetDocSchemaQuery } from '../../api/graphqlApi';
import Loader from '../Loader/Loader';

interface IntrospectionQueryResp {
  data: { data: IntrospectionQuery };
  isLoading: boolean;
  isError: boolean;
}

function Documentation() {
  const dispatch = useDispatch();
  const history = useSelector(
    (state: RootState) => state.documentation.history
  );
  const { name, descr, fields } = history[history.length - 1];

  const types = useSelector((state: RootState) => state.documentation.types);

  const { data, isLoading, isError } =
    useGetDocSchemaQuery<IntrospectionQueryResp>();

  useEffect(() => {
    const schema = data?.data ? buildClientSchema(data.data) : null;
    const root = schema?.getQueryType();
    const initRoot: DocTypes[] = [
      {
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
      },
    ];
    dispatch(updateHistory(initRoot));
    dispatch(updateTypes(schema === null ? [] : getDocTypes(schema)));
  }, [dispatch, data]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="documentation">
          {isLoading && <Loader />}
          {isError && <p>Schema not found</p>}
          {data && (
            <>
              <DocNav />
              <h3>{name}</h3>
              {descr && <p>{descr}</p>}
              {fields && (
                <>
                  {name === 'Docs' ? (
                    <DocSubtitle text="Root Types" icon="types.svg" />
                  ) : (
                    <DocSubtitle text="Fields" icon="fields.svg" />
                  )}
                  <DocFieldsList fields={fields} />
                </>
              )}
              {name === 'Docs' && types && (
                <>
                  <DocSubtitle text="All Schema Types" icon="root.svg" />
                  <DocTypesList types={types} />
                </>
              )}
            </>
          )}
        </div>
      </Suspense>
    </>
  );
}

export default Documentation;
