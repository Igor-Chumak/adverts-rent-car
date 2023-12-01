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
import { LOCAL_STORAGE_KEY } from 'store/contacts/constants';
import { sortbyReducer } from './contacts/sortbySlice';
import { contactsReducer } from './contacts/contactsSlice';
import { modeThemeReducer } from './theme/themeSlice';
import { filterReducer } from './contacts/filterSlice';
import { authReducer } from './auth/authSlice';

const themePersistConfig = {
  key: LOCAL_STORAGE_KEY + '_theme',
  storage,
};

const authPersistConfig = {
  key: LOCAL_STORAGE_KEY + '_auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    theme: persistReducer(themePersistConfig, modeThemeReducer),
    contacts: contactsReducer,
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
