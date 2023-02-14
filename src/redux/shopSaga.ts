import { call, put, takeEvery } from 'redux-saga/effects';
import { getGoodsFulfilled } from './shopSlice';
import { Goods } from '../types';

async function fetchGoods(
  request: string = 'https://63eb6daef1a969340db7eb45.mockapi.io/technics'
): Promise<any> {
  return (await fetch(request)).json();
}

const workGetGoodsPending = async function* () {
  const goods: Goods[] = yield call(await fetchGoods());
  yield put(getGoodsFulfilled(goods));
};

export function* goodsSaga() {
  yield takeEvery('commodityState/getGoodsFetch', workGetGoodsPending);
}
