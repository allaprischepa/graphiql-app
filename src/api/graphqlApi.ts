import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../state/store';

import { IntrospectionQuery, getIntrospectionQuery } from 'graphql';

const schemaQuery = `{
  __schema {
    types {
      kind
      name
      description
      fields {
        name
        description
        type {
          name
          kind
        }
      }
      inputFields {
        name
        description
        type {
          name
          kind
        }
      }
      interfaces {
        name
        kind
      }
      enumValues {
        name
        description
      }
    }
    directives {
      name
      description
      locations
      args {
        name
        description
        type {
          name
          kind
        }
        defaultValue
      }
    }
  }
}`;

interface SchemaResponse {
  data: {
    __schema: object;
  };
}

interface QueryResponse {
  data: object;
}

interface RequestObject {
  query: string;
  variables: object;
}

const dynamicBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const endpoint = (api.getState() as RootState).request.endpoint;
  const baseSettings = {
    baseUrl: endpoint,
    method: 'POST',
    prepareHeaders: (headers: Headers) => {
      headers.set('Content-Type', 'application/json');
    },
  };

  return fetchBaseQuery(baseSettings)(args, api, extraOptions);
};

export const graphqlApi = createApi({
  reducerPath: 'graphqlApi',
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    getSchema: builder.query<SchemaResponse, void>({
      query: () => ({
        url: '',
        body: JSON.stringify({
          query: schemaQuery,
        }),
      }),
    }),
    getQueryResponse: builder.query<QueryResponse, RequestObject>({
      query: ({ query, variables }) => ({
        url: '',
        body: JSON.stringify({
          query,
          variables,
        }),
      }),
    }),
    getDocSchema: builder.query<IntrospectionQuery, void>({
      query: () => ({
        url: '',
        body: JSON.stringify({ query: getIntrospectionQuery() }),
      }),
      keepUnusedDataFor: 9999,
    }),
  }),
});

export const {
  useGetSchemaQuery,
  useGetQueryResponseQuery,
  useGetDocSchemaQuery,
} = graphqlApi;
export const graphqlApiReducer = graphqlApi.reducer;
