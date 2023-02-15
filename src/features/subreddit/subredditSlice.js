import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSubreddit } from '../../api/reddit';

const initialState = {
  subreddits: [],
  isError: false,
  isSuccess: false,
  isCategoriesLoading: false,
  message: ''
};

export const fetchSubreddit = createAsyncThunk('subreddit/fetchSubreddit', async (_, thunkAPI) => {
  try {
    const response = await getSubreddit();
    return response;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const subredditSlice = createSlice({
  name: 'subreddit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddit.pending, (state) => {
        state.isCategoriesLoading = true;
      })
      .addCase(fetchSubreddit.fulfilled, (state, action) => {
        state.isCategoriesLoading = false;
        state.isSuccess = true;
        state.subreddits = action.payload;
      })
      .addCase(fetchSubreddit.rejected, (state, action) => {
        state.isSuccess = false;
        state.isCategoriesLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export default subredditSlice.reducer;
