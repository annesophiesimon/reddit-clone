import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getHomePost, getPostByTerms, getPostComments } from '../../api/reddit';

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

export const fetchComments = createAsyncThunk('comments/fetchComments', async (permalink) => {
  const response = await getPostComments(permalink);
  return response;
});

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
        const loadedPosts = action.payload.map((post) => {
          post.comments = [];
          return post;
        });
        state.posts = state.posts.concat(loadedPosts);
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
      })
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export default postSlice.reducer;
