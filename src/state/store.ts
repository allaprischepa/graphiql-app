import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { requestReducer } from './request/requestSlice';
import { useSelector } from 'react-redux';
import { graphqlApi, graphqlApiReducer } from '../api/graphqlApi';
import { rtkQueryErrorLogger } from '../api/errorLogger';
import { authReducer } from '../services/authSlice';

const rootReducer = combineReducers({
  request: requestReducer,
  graphqlApi: graphqlApiReducer,
  auth: authReducer,
});

export const configureAppStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(graphqlApi.middleware, rtkQueryErrorLogger),
  });

export const store = configureAppStore();

export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

type Keys = 'request' | 'auth';

export function useAppSelector<K extends Keys, SK extends keyof RootState[K]>(
  key: K,
  sliceKey: SK
): RootState[K][SK] {
  return useSelector((state: RootState) => state[key][sliceKey]);
}
