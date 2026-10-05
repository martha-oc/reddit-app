import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },

    setStatus(state, action) {
      state.status = action.payload;
    },

    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setPosts, setStatus, setError } = postsSlice.actions;

export default postsSlice.reducer;
