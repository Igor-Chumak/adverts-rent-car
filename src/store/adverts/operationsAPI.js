import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API_KEY = '656a28e6de53105b0dd8376e';
const PATHNAME = 'adverts';
axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/`;
axios.defaults.headers = {};
axios.defaults.params = {};

// GET @ /adverts/[:id]
export const getAdvertThunk = createAsyncThunk(
  'adverts/fetch.get',
  async (payload, thunkAPI) => {
    const { advertId = '', page = '' } = payload;
    const searchParams = new URLSearchParams({
      limit: 12,
      page,
    });

    try {
      const { data } = await axios.get(
        `${PATHNAME}${advertId}?${searchParams}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: `${error.message} <- ${error.code}`,
        status: `${error.request.status}`,
      });
    }
  }
);

export const getAllAdvertThunk = createAsyncThunk(
  'adverts/fetchAll.get',
  async (payload, thunkAPI) => {
    const { advertId = '', page = 1 } = payload;
    const searchParams = new URLSearchParams({
      limit: 12,
      page,
    });

    try {
      const { data } = await axios.get(
        `${PATHNAME}${advertId}?${searchParams}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: `${error.message} <- ${error.code}`,
        status: `${error.request.status}`,
      });
    }
  }
);
