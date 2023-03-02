import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPostComments } from '../../api/reddit';

const initialState = {
  comments: [],
  isError: false,
  isSuccess: false,
  isCommentsLoading: false,
  message: ''
};

export const fetchComments = createAsyncThunk('comments/fetchComments', async (permalink) => {
  const response = await getPostComments(permalink);
  console.log(response);
  return response;
});

export const commentsSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isCommentsLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isCommentsLoading = false;
        state.isSuccess = true;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.isSuccess = false;
        state.isCommentsLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export default commentsSlice.reducer;
