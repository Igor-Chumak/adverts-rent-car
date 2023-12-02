import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API_KEY = '656a28e6de53105b0dd8376e';
const PATHNAME = 'adverts/';
axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/`;
axios.defaults.headers = {};
axios.defaults.params = {};

// GET @ /adverts/[:id]
export const getAdvertThunk = createAsyncThunk(
  'adverts/fetch.get',
  async (advertId = '', thunkAPI) => {
    try {
      const { data } = await axios.get(`${PATHNAME}${advertId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: `${error.message} <- ${error.code}`,
        status: `${error.request.status}`,
      });
    }
  }
);

// export const addContactThunk = createAsyncThunk(
//   'contacts/fetch.post',
//   async (contact, thunkAPI) => {
//     try {
//       const { data } = await axios.post(PATHNAME, contact);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(`${error.message} <- ${error.code}`);
//     }
//   }
// );

// export const deleteContactThunk = createAsyncThunk(
//   'contacts/fetch.delete',
//   async (contactId, thunkAPI) => {
//     try {
//       const { data } = await axios.delete(`${PATHNAME}${contactId}`);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(`${error.message} <- ${error.code}`);
//     }
//   }
// );
