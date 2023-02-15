import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getHomePost, getPostByTerms } from '../../api/reddit';

const initialState = {
  posts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (subreddit, thunkAPI) => {
  try {
    const response = await getHomePost(subreddit);
    return response;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const fetchPostsByTerm = createAsyncThunk('posts/fetchPostsByTerms', async (term) => {
  const response = await getPostByTerms(term);
  return response;
});

// add fetch posts by term

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchPostsByTerm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPostsByTerm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(fetchPostsByTerm.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});
export default postSlice.reducer;
