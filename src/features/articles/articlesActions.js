import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticles } from './articlesApi';

// First, create the thunk
export const getArticlesData = createAsyncThunk(
  'articles/getArticles',
  async (payload) => {
    const response = await getArticles(payload);
    return response.data;
  }
);
