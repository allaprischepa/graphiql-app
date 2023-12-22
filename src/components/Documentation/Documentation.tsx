import { IntrospectionQuery, buildClientSchema } from 'graphql';
import { Suspense, useContext, useEffect } from 'react';
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
import { useGetSchemaQuery } from '../../api/graphqlApi';
import Loader from '../Loader/Loader';
import {
  DOC_DESCR,
  DOC_SUBTITLE_ALL_SHEME,
  DOC_SUBTITLE_FIELDS,
  DOC_SUBTITLE_ROOT,
  DOC_TITLE,
} from '../../constants';
import { langContext } from '../../languages/langContext';

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

  const { data, isLoading } = useGetSchemaQuery<IntrospectionQueryResp>();

  const {
    dispatch: { translate },
  } = useContext(langContext);

  useEffect(() => {
    const schema = data?.data ? buildClientSchema(data.data) : null;
    const root = schema?.getQueryType();
    const initRoot: DocTypes[] = [
      {
        name: translate(DOC_TITLE),
        descr: translate(DOC_DESCR),
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
  }, [dispatch, data, translate]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="documentation">
          {isLoading && <Loader />}
          {data && (
            <>
              <DocNav />
              <h3 data-testid="doc-title">{name}</h3>
              {descr && <p>{descr}</p>}
              {fields && (
                <>
                  {name === translate(DOC_TITLE) ? (
                    <DocSubtitle
                      text={translate(DOC_SUBTITLE_ROOT)}
                      icon="types.svg"
                    />
                  ) : (
                    <DocSubtitle
                      text={translate(DOC_SUBTITLE_FIELDS)}
                      icon="fields.svg"
                    />
                  )}
                  <DocFieldsList fields={fields} />
                </>
              )}
              {name === translate(DOC_TITLE) && types && (
                <>
                  <DocSubtitle
                    text={translate(DOC_SUBTITLE_ALL_SHEME)}
                    icon="root.svg"
                  />
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
