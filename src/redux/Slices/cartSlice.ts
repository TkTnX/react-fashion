import { createSlice } from "@reduxjs/toolkit";

export type productType = {
  id: number;
  img: string;
  price: number;
  desc: string;
  brand: string;
  sizes: string[];
  count: number;
};

const calcTotalPrice = (items: productType[]) => {
  return items.reduce((acc, curr) => {
    return curr.price + acc;
  }, 0);
};

type cartSliceType = {
  cartList: productType[];
  totalPrice: number;
};

const initialState: cartSliceType = {
  cartList: [],
  totalPrice: 0,
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

      state.totalPrice += calcTotalPrice(state.cartList);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
