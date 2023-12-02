import { createSlice } from '@reduxjs/toolkit';
import {
  getAdvertThunk,
  // addContactThunk,
  // deleteContactThunk,
  // updateContactThunk,
} from 'store/adverts/operationsAPI';
import {
  // handleAddAdvert,
  // handleDeleteAdvert,
  handleFulfilled,
  handleGetAdverts,
  handlePending,
  handleRejected,
  // handleUpdateAdvert,
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
      // .addCase(addContactThunk.fulfilled, handleAddAdvert)
      // .addCase(deleteContactThunk.fulfilled, handleDeleteAdvert)
      // .addCase(updateContactThunk.fulfilled, handleUpdateAdvert)
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
