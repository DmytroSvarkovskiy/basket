import { call, put, takeEvery } from 'redux-saga/effects';
import { getGoodsFulfilled, getGoodsError } from './shopSlice';
import { Goods } from '../types';
import { fetchGoods } from '../api';

function* workGetGoodsPending() {
  try {
    const res: Goods[] = yield call(fetchGoods);
    yield put(getGoodsFulfilled(res));
  } catch (error) {
    yield put(getGoodsError());
  }
}

export function* goodsSaga() {
  yield takeEvery('commodityState/getGoodsFetch', workGetGoodsPending);
}
