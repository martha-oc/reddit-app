import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../services/redditApi";

export const fetchRedditPosts = createAsyncThunk(
  "posts/fetchRedditPosts",
  async (category = "popular") => {
    const posts = await fetchPosts(category);
    return posts;
  },
);

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRedditPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchRedditPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchRedditPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
