import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import formsReducer from "./Slices/formsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    forms: formsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
