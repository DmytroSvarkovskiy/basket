import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Goods } from '../types';
import { toast } from 'react-toastify';

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
    addToBasket(state, action: PayloadAction<string>): void {
      const selectedProductIndx = state.goodsList.findIndex(
        item => item.id === action.payload
      );
      state.basket.unshift(state.goodsList[selectedProductIndx]);
      toast.success('the product has been added to the basket');
    },
    deleteFromBasket(state, action: PayloadAction<string>): void {
      const idGoods = state.basket.findIndex(
        item => item.id === action.payload
      );
      state.basket.splice(idGoods, 1);
      toast.info('the product has been removed from the basket');
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
