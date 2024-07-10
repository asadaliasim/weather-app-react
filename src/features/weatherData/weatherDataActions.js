import { createAsyncThunk } from '@reduxjs/toolkit';

import { getWeather } from './weatherDataApi';

// First, create the thunk
export const getWeatherData = createAsyncThunk(
  'weather/Data',
  async (cityName) => {
    const response = await getWeather(cityName);
    return response.data;
  }
);
