import { createSlice } from '@reduxjs/toolkit';
import { getAdvertThunk, getAllAdvertThunk } from 'store/adverts/operationsAPI';
import {
  handleFulfilled,
  handleGetAdverts,
  handleGetAllAdverts,
  handlePending,
  handleRejected,
} from './advertsHandlers';

const initialState = {
  items: [],
  statistic: {
    totalAds: 0,
    priceList: [],
    makeList: [],
  },
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
      .addCase(getAllAdvertThunk.fulfilled, handleGetAllAdverts)
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
