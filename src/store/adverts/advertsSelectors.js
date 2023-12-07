import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.items;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error.message;

export const selectStatistic = state => state.adverts.statistic;

export const selectFilterMake = state => state.filters.make;
export const selectFilterRentalPrice = state => state.filters.rentalPrice;
export const selectFilterMileageFrom = state => state.filters.mileageFrom;
export const selectFilterMileageTo = state => state.filters.mileageTo;

export const selectVisibleAdverts = createSelector(
  [
    selectAdverts,
    selectFilterMake,
    selectFilterRentalPrice,
    selectFilterMileageFrom,
    selectFilterMileageTo,
  ],
  (items, make, rentalPrice, mileageFrom, mileageTo) => {
    let adverts = items || [];
    if (make) adverts = adverts.filter(item => item.make === make);
    if (rentalPrice) {
      adverts = adverts.filter(advert => {
        return Number(advert.rentalPrice.slice(1)) <= rentalPrice;
      });
    }
    if (mileageFrom) {
      adverts = adverts.filter(advert => advert.mileage > mileageFrom);
    }
    if (mileageTo) {
      adverts = adverts.filter(advert => advert.mileage < mileageTo);
    }

    console.log('adverts :>> ', adverts);
    return adverts;
  }
);
