// import { createSelector } from '@reduxjs/toolkit';
// import { SORT_BY } from '../constants';

export const selectAdverts = state => state.adverts.items;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error.message;

export const selectFilter = state => state.filter;

export const selectSortBy = state => state.sortby;

// export const selectVisibleAdverts = createSelector(
//   [selectContacts, selectFilter, selectSortBy],
//   (items, filter, sortby) => {
//     const contacts = items.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//     switch (sortby) {
//       case SORT_BY.AZ_SORT: {
//         return contacts.sort((a, b) => a.name.localeCompare(b.name));
//       }
//       case SORT_BY.ZA_SORT:
//         return contacts.sort((a, b) => b.name.localeCompare(a.name));
//       default:
//         return contacts;
//     }
//   }
// );
