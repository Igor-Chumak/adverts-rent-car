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
  [selectAdverts, selectFilterMake],
  (items, make) => {
    const adverts = items.filter(item => item.make.includes(make));
    return adverts;
    // switch (sortby) {
    //   case SORT_BY.AZ_SORT: {
    //     return contacts.sort((a, b) => a.name.localeCompare(b.name));
    //   }
    //   case SORT_BY.ZA_SORT:
    //     return contacts.sort((a, b) => b.name.localeCompare(a.name));
    //   default:
    //     return contacts;
    // }
  }
);
