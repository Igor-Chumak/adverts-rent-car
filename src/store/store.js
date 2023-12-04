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
import { modeThemeReducer } from './theme/themeSlice';
import { filterReducer } from './filter/filterSlice';
import { advertsReducer } from './adverts/advertsSlice';

const themePersistConfig = {
  key: LOCAL_STORAGE_KEY + '_theme',
  storage,
};

// const favoritePersistConfig = {
//   key: LOCAL_STORAGE_KEY + '_favorite',
//   storage,
// whitelist: ['refresh'],
// };

export const store = configureStore({
  reducer: {
    theme: persistReducer(themePersistConfig, modeThemeReducer),
    adverts: advertsReducer,
    // favorite: persistReducer(favoritePersistConfig, favoriteReducer),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
