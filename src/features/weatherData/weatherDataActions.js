import { createAsyncThunk } from '@reduxjs/toolkit';

import { getWeather } from './weatherDataApi';

// First, create the thunk
export const getWeatherData = createAsyncThunk(
  'weather/Data',
  async (payload) => {
    const response = await getWeather(payload);
    return response.data;
  }
);
