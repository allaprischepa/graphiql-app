import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../state/store';

import { IntrospectionQuery, getIntrospectionQuery } from 'graphql';

interface QueryResponse {
  data: object;
}

interface RequestObject {
  query: string;
  variables: object;
  headers: object;
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
    getQueryResponse: builder.query<QueryResponse, RequestObject>({
      query: ({ query, variables, headers }) => ({
        url: '',
        body: JSON.stringify({
          query,
          variables,
        }),
        headers: { ...headers },
      }),
    }),
    getSchema: builder.query<IntrospectionQuery, void>({
      query: () => ({
        url: '',
        body: JSON.stringify({ query: getIntrospectionQuery() }),
      }),
    }),
  }),
});

export const { useGetQueryResponseQuery, useGetSchemaQuery } = graphqlApi;
export const graphqlApiReducer = graphqlApi.reducer;
