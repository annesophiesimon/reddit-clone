import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

export const voteSlice = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    }
  }
});

export const { increment, decrement } = voteSlice.actions;

export default voteSlice.reducer;
