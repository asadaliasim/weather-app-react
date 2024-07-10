import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCards } = cardsSlice.actions;

export default cardsSlice.reducer;
