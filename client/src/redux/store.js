import { configureStore } from '@reduxjs/toolkit';
import listReducer from './slices/listSlice';
import cardReducer from './slices/cardSlice';

const store = configureStore({
  reducer: {
    lists: listReducer,
    cards: cardReducer,
  },
});

export default store;
