import { configureStore, combineReducers } from '@reduxjs/toolkit';
import voteReducer from '../features/vote/voteSlice';
import postReducer from '../features/post/postSlice';
import subredditReducer from '../features/subreddit/subredditSlice';
import commentReducer from '../features/comments/commentSlice';

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  vote: voteReducer,
  post: postReducer,
  subreddit: subredditReducer,
  comment: commentReducer
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};
