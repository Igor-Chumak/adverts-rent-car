import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { LOCAL_STORAGE_KEY } from 'store/constants';
import { sortbyReducer } from './contacts/sortbySlice';
// import { contactsReducer } from './contacts/contactsSlice';
import { modeThemeReducer } from './theme/themeSlice';
import { filterReducer } from './contacts/filterSlice';
import { advertsReducer } from './adverts/advertsSlice';

const themePersistConfig = {
  key: LOCAL_STORAGE_KEY + '_theme',
  storage,
};

// const refreshPersistConfig = {
//   key: LOCAL_STORAGE_KEY + '_refresh',
//   storage,
//   whitelist: ['refresh'],
// };

export const store = configureStore({
  reducer: {
    // refresh: persistReducer(refreshPersistConfig, refreshReducer),
    theme: persistReducer(themePersistConfig, modeThemeReducer),
    // contacts: contactsReducer,
    adverts: advertsReducer,
    filter: filterReducer,
    sortby: sortbyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
