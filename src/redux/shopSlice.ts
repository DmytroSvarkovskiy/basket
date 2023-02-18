import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Goods } from '../types';
import { toast } from 'react-toastify';
import { QuantityType, GoodState } from '../types';

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
    // add to basket function
    addToBasket(state, action: PayloadAction<string>): void {
      // we are looking for an index
      const selectedProductIndx = state.goodsList.findIndex(
        item => item.id === action.payload
      );
      // add product
      state.basket.unshift({
        ...state.goodsList[selectedProductIndx],
        quantity: 1,
      });
      toast.success('the product has been added to the basket');
    },
    // change the quantity of the product in the basket
    changeQuantity(state, action: PayloadAction<QuantityType>) {
      // we are looking for an index
      const indexEl = state.basket.findIndex(
        item => item.id === action.payload.id
      );
      // we check which action needs to be performed and perform it
      action.payload.operation === 'plus'
        ? (state.basket[indexEl].quantity += 1)
        : (state.basket[indexEl].quantity -= 1);
    },
    // removing the product from the shopping cart
    deleteFromBasket(state, action: PayloadAction<string>): void {
      // we are looking for an index
      const indxGoods = state.basket.findIndex(
        item => item.id === action.payload
      );
      // removing the product
      state.basket.splice(indxGoods, 1);
    },
    // request to the server
    getGoodsFetch(state): void {
      state.loading = true;
    },
    // in case of a successful response
    getGoodsFulfilled(state, action: PayloadAction<Goods[]>): void {
      state.error = false;
      state.loading = false;
      state.goodsList = [...action.payload];
    },
    // in case of successful error
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
  changeQuantity,
} = shopSlice.actions;
