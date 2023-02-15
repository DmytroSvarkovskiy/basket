import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import shopReduser from './shopSlice';
import { goodsSaga } from './shopSaga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'basket',
  storage,
  whitelist: ['basket'],
};

const saga = createSagaMiddleware();

export const store = configureStore({
  // connect reducer
  reducer: {
    commodityState: persistReducer(persistConfig, shopReduser),
  },
  // connect middleware
  middleware: [saga],
});

saga.run(goodsSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
