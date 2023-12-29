import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { API_ENDPOINT, API_URL } from '../../constants';

interface RequestState {
  endpoint: string;
}

export const requestSlice = createSlice({
  name: 'request',
  initialState: (): RequestState => ({
    endpoint: localStorage.getItem(API_ENDPOINT) ?? API_URL,
  }),
  reducers: {
    setEndpoint: (state, action: PayloadAction<string>) => {
      state.endpoint = action.payload;
    },
  },
});

export const { setEndpoint } = requestSlice.actions;
export const requestReducer = requestSlice.reducer;
