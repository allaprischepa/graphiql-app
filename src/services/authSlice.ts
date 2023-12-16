import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface authState {
  isUserLoggedIn: boolean;
}

const initialState: authState = {
  isUserLoggedIn: Boolean(localStorage.getItem('token')),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsUserLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isUserLoggedIn = action.payload;
    },
  },
});

export const { setIsUserLoggedIn } = authSlice.actions;
export const authReducer = authSlice.reducer;
