import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const PATHNAME = 'contacts/';

// GET @ /contacts/[:id]
export const getContactsThunk = createAsyncThunk(
  'contacts/fetch.get',
  async (contactId = '', thunkAPI) => {
    try {
      const { data } = await axios.get(`${PATHNAME}${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: `${error.message} <- ${error.code}`,
        status: `${error.request.status}`,
      });
    }
  }
);

// POST @ /contacts
export const addContactThunk = createAsyncThunk(
  'contacts/add.post',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post(PATHNAME, contact);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: `${error.message} <- ${error.code}`,
        status: `${error.request.status}`,
      });
    }
  }
);

// upDate @ /contacts/:id
export const updateContactThunk = createAsyncThunk(
  'contacts/update.patch',
  async ({ name, number, id }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`${PATHNAME}${id}`, { name, number });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: `${error.message} <- ${error.code}`,
        status: `${error.request.status}`,
      });
    }
  }
);

// DELETE @ /contacts/:id
export const deleteContactThunk = createAsyncThunk(
  'contacts/fetch.delete',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`${PATHNAME}${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: `${error.message} <- ${error.code}`,
        status: `${error.request.status}`,
      });
    }
  }
);
