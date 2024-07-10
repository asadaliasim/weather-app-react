import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from '../features/cards/cardsSlice';
import buyCardsSlice from '../features/buyCards/buyCardsSlice';
import articlesSlice from '../features/articles/articlesSlice';
import weatherDataSlice from '../features/weatherData/weatherDataSlice';

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    buyCards: buyCardsSlice,
    articles: articlesSlice,
    weather: weatherDataSlice,
  },
});
