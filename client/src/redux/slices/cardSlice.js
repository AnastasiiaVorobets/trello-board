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
  reducers: {
    sortCardsByDate: (state, action) => {
      const { listId, direction } = action.payload;
      state.cards = state.cards.map(card => card.listId && card.listId._id === listId ? card : null)
        .filter(card => card !== null)
        .sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return direction === 'asc' ? dateA - dateB : dateB - dateA;
        }).concat(state.cards.filter(card => card.listId && card.listId._id !== listId));
    },
  },
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

export const { sortCardsByDate } = cardSlice.actions;

export default cardSlice.reducer;
