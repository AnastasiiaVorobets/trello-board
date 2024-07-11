import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

export const fetchLists = createAsyncThunk('lists/fetchLists', async () => {
  const response = await api.get('/lists');
  return response.data;
});

export const createList = createAsyncThunk('lists/createList', async ({ title }) => {
  const response = await api.post('/lists', { title });
  return response.data;
});

export const deleteList = createAsyncThunk('lists/deleteList', async (listId) => {
  await api.delete(`/lists/${listId}`);
  return listId;
});

const listSlice = createSlice({
  name: 'lists',
  initialState: {
    lists: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLists.fulfilled, (state, action) => {
        state.lists = action.payload;
        state.loading = false;
      })
      .addCase(fetchLists.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createList.fulfilled, (state, action) => {
        state.lists.push(action.payload);
      })
      .addCase(deleteList.fulfilled, (state, action) => {
        state.lists = state.lists.filter(list => list._id !== action.payload);
      });
  },
});

export default listSlice.reducer;
