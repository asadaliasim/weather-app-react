import { createSlice } from '@reduxjs/toolkit';
import { getWeatherData } from './weatherDataActions';

const initialState = {
  weather: {},
  isWeatherDataLoading: false,
  isWeatherDataRejected: false,
  isWeatherDataFullfilled: false,
};

export const weatherDataSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherData.fulfilled, (state, action) => {
      state.isWeatherDataLoading = false;
      state.isWeatherDataRejected = false;
      state.isWeatherDataFullfilled = true;
      state.weather = action.payload;
    });
    builder.addCase(getWeatherData.pending, (state, action) => {
      state.isWeatherDataLoading = true;
      state.isWeatherDataRejected = false;
      state.isWeatherDataFullfilled = false;
    });
    builder.addCase(getWeatherData.rejected, (state, action) => {
      state.isWeatherDataLoading = false;
      state.isWeatherDataRejected = true;
      state.isWeatherDataFullfilled = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setWeather } = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
