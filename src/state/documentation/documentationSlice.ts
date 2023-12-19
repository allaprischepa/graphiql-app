import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DocTypes } from '../../types/types';

const initRoot: DocTypes[] = [
  {
    name: 'Docs',
    descr: 'A GraphQL schema provides a root type for each kind of operation.',
    fields: [
      {
        name: '',
        type: '',
        args: [],
        descr: '',
      },
    ],
  },
];

const initialState = {
  history: initRoot,
  types: initRoot,
  isActive: false,
};

export const documentationSlice = createSlice({
  name: 'documentation',
  initialState,
  reducers: {
    updateHistory: (state, action: PayloadAction<DocTypes[]>) => {
      state.history = action.payload;
    },

    updateTypes: (state, action: PayloadAction<DocTypes[]>) => {
      state.types = action.payload;
    },

    updateIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { updateHistory, updateTypes, updateIsActive } =
  documentationSlice.actions;
export const documentationReducer = documentationSlice.reducer;
