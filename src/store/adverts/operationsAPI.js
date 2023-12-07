import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LIMIT_PAGE_API } from 'store/constants';

const API_KEY = '656a28e6de53105b0dd8376e';
const PATHNAME = 'adverts';
axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/`;
axios.defaults.headers = {};
axios.defaults.params = {};

// GET @ /adverts/[:id]
export const getAdvertThunk = createAsyncThunk(
  'adverts/fetch.get',
  async (payload, thunkAPI) => {
    const { advertId = '', page = '', make = '' } = payload;
    const searchParams = new URLSearchParams({
      limit: LIMIT_PAGE_API,
      page,
      make,
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
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${PATHNAME}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: `${error.message} <- ${error.code}`,
        status: `${error.request.status}`,
      });
    }
  }
);
