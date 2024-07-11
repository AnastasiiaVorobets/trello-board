import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await api.get('/cards');
  return response.data;
});

export const createCard = createAsyncThunk('cards/createCard', async ({ listId, title }) => {
  const timestamp = new Date().toISOString();
  const response = await api.post('/cards', { listId, title, timestamp });
  return response.data;
});

export const deleteCard = createAsyncThunk('cards/deleteCard', async (cardId) => {
  await api.delete(`/cards/${cardId}`);
  return cardId;
});

export const moveCard = createAsyncThunk('cards/moveCard', async ({ cardId, destinationListId }) => {
  const response = await api.patch(`/cards/${cardId}/move`, { listId: destinationListId });
  return response.data;
});

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.loading = false;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createCard.fulfilled, (state, action) => {
        state.cards.push(action.payload);
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.cards = state.cards.filter(card => card._id !== action.payload);
      })
      .addCase(moveCard.fulfilled, (state, action) => {
        const updatedCard = action.payload;
        const existingCardIndex = state.cards.findIndex(card => card._id === updatedCard._id);
        if (existingCardIndex !== -1) {
          state.cards[existingCardIndex] = updatedCard;
        }
      });
  },
});

export const { moveCardLocal } = cardSlice.actions;

export default cardSlice.reducer;
