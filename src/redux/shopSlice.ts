import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Goods } from '../types';

type GoodState = {
  goodsList: Goods[];
  error: boolean;
  loading: boolean;
  basket: Goods[];
};

const initialState: GoodState = {
  goodsList: [],
  error: false,
  loading: false,
  basket: [],
};

// create slice

export const shopSlice = createSlice({
  name: 'commodityState',
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<Goods>): void {
      state.basket.push(action.payload);
    },
    deleteFromBasket(state, action: PayloadAction<string>): void {
      const arrBasket = state.basket;
      const idGoods = arrBasket.findIndex(item => item.id === action.payload);
      state.basket.slice(idGoods, 1);
    },
    getGoodsFetch(state): void {
      state.loading = true;
    },
    getGoodsFulfilled(state, action: PayloadAction<Goods[]>): void {
      state.error = false;
      state.loading = false;
      state.goodsList = [...action.payload];
    },
    getGoodsError(state): void {
      state.error = true;
      state.loading = false;
    },
  },
});

// export reducer
export default shopSlice.reducer;

// export actions
export const {
  addToBasket,
  getGoodsFetch,
  getGoodsFulfilled,
  getGoodsError,
  deleteFromBasket,
} = shopSlice.actions;
