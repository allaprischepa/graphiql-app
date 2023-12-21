import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../constants';

interface RequestState {
  endpoint: string;
}

const initialState: RequestState = {
  endpoint: API_URL,
};

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setEndpoint: (state, action: PayloadAction<string>) => {
      state.endpoint = action.payload;
    },
  },
});

export const { setEndpoint } = requestSlice.actions;
export const requestReducer = requestSlice.reducer;
