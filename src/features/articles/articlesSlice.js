import { createSlice } from '@reduxjs/toolkit';
import { getArticlesData } from './articlesActions';

const initialState = {
  articles: [],
  isArticlesLoading: false,
  isArticlesRejected: false,
  isArticlesFullfilled: false,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getArticlesData.fulfilled, (state, action) => {
      state.isArticlesLoading = false;
      state.isArticlesRejected = false;
      state.isArticlesFullfilled = true;
      state.articles = action.payload;
    });
    builder.addCase(getArticlesData.pending, (state, action) => {
      state.isArticlesLoading = true;
      state.isArticlesRejected = false;
      state.isArticlesFullfilled = false;
    });
    builder.addCase(getArticlesData.rejected, (state, action) => {
      state.isArticlesLoading = false;
      state.isArticlesRejected = true;
      state.isArticlesFullfilled = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
