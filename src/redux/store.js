import { configureStore } from '@reduxjs/toolkit';
import { contactsSlise } from './slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter']
}
  
const myContactsReducer  = persistReducer(
  persistConfig,
  contactsSlise.reducer,
)

export const store = configureStore({
  reducer: {
       contacts: myContactsReducer,

  },
  
 middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);