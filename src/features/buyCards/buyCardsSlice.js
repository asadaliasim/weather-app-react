import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buyCards: [],
};

export const buySlice = createSlice({
  name: 'buyCards',
  initialState,
  reducers: {
    setBuy: (state, action) => {
      state.buyCards = [...state.buyCards, action.payload];
    },
    setRemove: (state, action) => {
      state.buyCards = state.buyCards.filter(
        (card) => card.name !== action.payload.name
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBuy, setRemove } = buySlice.actions;

export default buySlice.reducer;
