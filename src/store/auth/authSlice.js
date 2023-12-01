import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';
import {
  handleLogIn,
  handleLogOut,
  handleRefresh,
  handleRefreshPending,
  handleRefreshRejected,
  handleRegister,
} from './authHandlers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegister)
      .addCase(logIn.fulfilled, handleLogIn)
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.fulfilled, handleRefresh)
      .addCase(refreshUser.rejected, handleRefreshRejected);
  },
});

export const authReducer = authSlice.reducer;
