import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { intro } from '../../data/graphiql';
import { commentOutString } from '../../utils/utils';
import { Languages } from '../../utils/enums';

const queryExample = `

  query Characters {
    characters {
        results {
            name
        }
    }
  }
`;
export const defaultQueryString =
  commentOutString(intro[Languages.EN]) + queryExample;

interface RequestState {
  endpoint: string;
}

const initialState: RequestState = {
  endpoint: 'https://rickandmortyapi.com/graphql',
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
