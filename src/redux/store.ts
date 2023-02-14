import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import shopReduser from './shopSlice';
import { goodsSaga } from './shopSaga';

const saga = createSagaMiddleware();

const store = configureStore({
  // connect reducer
  reducer: {
    commodityState: shopReduser,
  },
  // connect middleware
  middleware: [saga],
});
saga.run(goodsSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
