import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import formsReducer from "./Slices/formsSlice";
import cartReducer from "./Slices/cartSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    forms: formsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
