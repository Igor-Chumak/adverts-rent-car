import { API_ERROR } from './constants';

export const handleGetContacts = (state, action) => {
  // state.isLoading = false;
  state.items = action.payload;
};

export const handleAddContact = (state, action) => {
  // state.isLoading = false;
  state.items.unshift(action.payload);
};

export const handleUpdateContact = (state, action) => {
  // state.isLoading = false;
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items[index] = action.payload;
};

export const handleDeleteContact = (state, action) => {
  // state.isLoading = false;
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1);
};

export const handlePending = state => {
  state.isLoading = true;
  state.error.message = '';
  state.error.status = '';
};

export const handleRejected = (state, action) => {
  console.log('Contacts handler rejected :>> ', action);
  state.isLoading = false;
  // state.error = action.payload;
  switch (action.type) {
    case 'auth/refresh/rejected':
      console.log('auth/refresh :>> ', action.payload.status);
      state.error = {
        ...action.payload,
        ...{ message: API_ERROR.refresh[action.payload.status] },
      };
      break;
    case 'auth/register/rejected':
      console.log('auth/register :>> ', action.payload.status);
      state.error = {
        ...action.payload,
        ...{ message: API_ERROR.signup[action.payload.status] },
      };
      break;
    case 'auth/login/rejected':
      console.log('auth/login :>> ', action.payload.status);
      state.error = {
        ...action.payload,
        ...{ message: API_ERROR.login[action.payload.status] },
      };
      break;
    case 'auth/logout/rejected':
      console.log('auth/logout :>> ', action.payload.status);
      state.error = {
        ...action.payload,
        ...{ message: API_ERROR.logout[action.payload.status] },
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
