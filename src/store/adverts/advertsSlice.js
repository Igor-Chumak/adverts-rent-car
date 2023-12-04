import { createSlice } from '@reduxjs/toolkit';
import { getAdvertThunk } from 'store/adverts/operationsAPI';
import {
  handleFulfilled,
  handleGetAdverts,
  handlePending,
  handleRejected,
} from './advertsHandlers';

const initialState = {
  items: [],
  isLoading: false,
  error: {
    message: '',
    status: '',
  },
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAdvertThunk.fulfilled, handleGetAdverts)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

function isRejectedAction(action) {
  return action.type.endsWith('/rejected');
}

function isPendingAction(action) {
  return action.type.endsWith('/pending');
}

export const advertsReducer = advertsSlice.reducer;
