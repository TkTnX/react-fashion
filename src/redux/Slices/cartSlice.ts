import { createSlice } from "@reduxjs/toolkit";

export type productType = {
  id: number;
  img: string;
  price: number;
  desc: string;
  brand: string;
  sizes: string[];
  count: number;
  color: string;
};

type cartSliceType = {
  cartList: productType[];
  totalPrice: number;
};

const initialState: cartSliceType = {
  cartList: [],
  totalPrice: 0,
};

const calculateTotalPrice = (item: productType[]) => {
  return item.reduce((sum: number, item) => {
    return sum + item.price * item.count;
  }, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findItem = state.cartList.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.cartList.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calculateTotalPrice(state.cartList);
    },
    minusItem: (state, action) => {
      const findItem = state.cartList.find(
        (item) => item.id === action.payload
      );

      if (findItem && findItem.count > 1) {
        findItem.count--;
      }

      state.totalPrice = calculateTotalPrice(state.cartList);
    },
    deleteItem: (state, action) => {
      state.cartList = state.cartList.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = calculateTotalPrice(state.cartList);
    },
  },
});

export const { addToCart, minusItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
