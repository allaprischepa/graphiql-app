import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { requestReducer } from './request/requestSlice';
import { useSelector } from 'react-redux';
import { graphqlApi, graphqlApiReducer } from '../api/graphqlApi';

const rootReducer = combineReducers({
  request: requestReducer,
  graphqlApi: graphqlApiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(graphqlApi.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

type Keys = 'request';

export function useAppSelector<K extends Keys, SK extends keyof RootState[K]>(
  key: K,
  sliceKey: SK
): RootState[K][SK] {
  return useSelector((state: RootState) => state[key][sliceKey]);
}
