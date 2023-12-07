import { API_ERROR, LIST_PRICE_STEP } from '../constants';

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
    .map(
      i =>
        Math.ceil(+i.rentalPrice.slice(1) / LIST_PRICE_STEP) * LIST_PRICE_STEP
    )
    .reduce((acc, i) => {
      if (!acc.includes(i)) acc.push(i);
      return acc;
    }, [])
    .sort((a, b) => a - b);
};

export const handleGetAdverts = (state, action) => {
  state.items.push(...action.payload);
  state.isLoadMoreVisible = action.payload.length < 12 ? false : true;
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
