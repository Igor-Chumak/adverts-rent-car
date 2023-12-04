import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { items: [] },
  reducers: {
    addToFavorites(state, action) {
      state.items.push(action.payload);
    },
    removeFromFavorites(state, action) {
      return {
        ...state,
        items: state.favorites.filter(i => i.id !== action.payload),
      };
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
