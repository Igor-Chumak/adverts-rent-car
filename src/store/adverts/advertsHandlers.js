import { API_ERROR } from '../constants';

export const handlePending = state => {
  state.isLoading = true;
  state.error.message = '';
  state.error.status = '';
};

export const handleFulfilled = state => {
  state.isLoading = false;
};

export const handleGetAllAdverts = (state, { payload }) => {
  state.statistic.totalAds = payload.length;

  state.statistic.makeList = payload
    .map(i => i.make)
    .reduce((acc, i) => {
      if (!acc.includes(i)) acc.push(i);
      return acc;
    }, [])
    .sort((a, b) => a.localeCompare(b));

  state.statistic.priceList = payload
    .map(i => Math.ceil(+i.rentalPrice.slice(1) / 10) * 10)
    .reduce((acc, i) => {
      if (!acc.includes(i)) acc.push(i);
      return acc;
    }, [])
    .sort((a, b) => a - b);
};

export const handleGetAdverts = (state, action) => {
  state.items.push(...action.payload);
};

export const handleRejected = (state, action) => {
  console.log('Adverts handler rejected :>> ', action);
  state.isLoading = false;
  switch (action.type) {
    case 'adverts/fetch.get/rejected':
      console.log('adverts/fetch.get:>> ', action.payload.status);
      state.error = {
        ...action.payload,
        ...{ message: API_ERROR.getAdverts[action.payload.status] },
      };
      break;
    case 'adverts/fetchAll.get/rejected':
      console.log('adverts/fetch.get:>> ', action.payload.status);
      state.error = {
        ...action.payload,
        ...{ message: API_ERROR.getAdverts[action.payload.status] },
      };
      break;
    //
    default:
      console.log('default action.type :>> ', action.type);
      state.error = action.payload;
  }
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
