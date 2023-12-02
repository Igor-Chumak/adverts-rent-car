export const LOCAL_STORAGE_KEY = 'rentcar';

export const SORT_BY = {
  NONE: 'none',
  AZ_SORT: 'azsort',
  ZA_SORT: 'zasort',
};

export const API_ERROR = {
  refresh: {
    101: 'Unable to fetch user',
    401: 'Missing header with authorization token',
  },
  getAdverts: {
    404: 'There is no such adverts in collection',
    500: 'Server error',
  },
  getContacts: {
    401: 'Missing header with authorization token',
    404: 'There is no such user collection',
    500: 'Server error',
  },
  createContacts: {
    400: 'Error creating contact',
    401: 'Missing header with authorization token',
  },
  deleteContacts: {
    401: 'Missing header with authorization token',
    404: 'There is no such user collection',
    500: 'Server error',
  },
  updateContacts: {
    400: 'Contact update failed',
    401: 'Missing header with authorization token',
  },
};
