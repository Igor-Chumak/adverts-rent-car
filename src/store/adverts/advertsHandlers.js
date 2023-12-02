import { API_ERROR } from '../constants';

export const handleGetAdverts = (state, action) => {
  // state.isLoading = false;
  state.items = action.payload;
};

// export const handleAddAdvert = (state, action) => {
//   // state.isLoading = false;
//   state.items.unshift(action.payload);
// };

// export const handleUpdateAdvert = (state, action) => {
//   // state.isLoading = false;
//   const index = state.items.findIndex(item => item.id === action.payload.id);
//   state.items[index] = action.payload;
// };

// export const handleDeleteAdvert = (state, action) => {
//   // state.isLoading = false;
//   const index = state.items.findIndex(item => item.id === action.payload.id);
//   state.items.splice(index, 1);
// };

export const handlePending = state => {
  state.isLoading = true;
  state.error.message = '';
  state.error.status = '';
};

export const handleRejected = (state, action) => {
  console.log('Adverts handler rejected :>> ', action);
  state.isLoading = false;
  // state.error = action.payload;
  switch (action.type) {
    case 'adverts/fetch.get/rejected':
      console.log('adverts/fetch.get:>> ', action.payload.status);
      state.error = {
        ...action.payload,
        ...{ message: API_ERROR.refresh[action.payload.status] },
      };
      break;
    case 'contacts/fetch.get/rejected':
      console.log('contacts/fetch.get :>> ', action.payload.status);
      state.error = {
        ...action.payload,
        ...{ message: API_ERROR.getContacts[action.payload.status] },
      };
      break;
    case 'contacts/add.post/rejected':
      console.log('contacts/add.post :>> ', action.payload.status);
      state.error = {
        ...action.payload,
        ...{ message: API_ERROR.createContacts[action.payload.status] },
      };
      break;
    case 'contacts/fetch.delete/rejected':
      console.log('contacts/fetch.delete :>> ', action.payload.status);
      state.error = {
        ...action.payload,
        ...{ message: API_ERROR.deleteContacts[action.payload.status] },
      };
      break;
    case 'contacts/update.patch/rejected':
      console.log('contacts/update.patch :>> ', action.payload.status);
      state.error = {
        ...action.payload,
        ...{ message: API_ERROR.updateContacts[action.payload.status] },
      };
      break;
    //
    default:
      console.log('default action.type :>> ', action.type);
      state.error = action.payload;
  }
};

export const handleFulfilled = state => {
  state.isLoading = false;
};
