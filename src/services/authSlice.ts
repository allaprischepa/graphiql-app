import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IS_USER_LOGGED_IN } from '../constants';

interface authState {
  isUserLoggedIn: boolean;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: (): authState => {
    return {
      isUserLoggedIn: Boolean(localStorage.getItem(IS_USER_LOGGED_IN)),
    };
  },
  reducers: {
    setIsUserLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isUserLoggedIn = action.payload;
    },
  },
});

export const { setIsUserLoggedIn } = authSlice.actions;
export const authReducer = authSlice.reducer;
