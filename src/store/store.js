import { configureStore } from '@reduxjs/toolkit';

import weatherDataSlice from '../features/weatherData/weatherDataSlice';

export const store = configureStore({
  reducer: {
    weather: weatherDataSlice,
  },
});
