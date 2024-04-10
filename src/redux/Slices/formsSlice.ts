import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type formSliceType = {
  registerForm: boolean;
  loginForm: boolean;
  loginAccount: boolean;
};

const initialState: formSliceType = {
  registerForm: false,
  loginForm: false,
  loginAccount: false,
};

const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    openRegisterForm: (state, action) => {
      state.registerForm = action.payload;
    },
    openLoginForm: (state, action) => {
      state.loginForm = action.payload;
    },
    openAccount: (state, action) => {
      state.loginAccount = action.payload;
    },
  },
});

export const registerFormSelector = (state: RootState) =>
  state.forms.registerForm;
export const loginFormSelector = (state: RootState) => state.forms.loginForm;
export const openAccountSelector = (state: RootState) =>
  state.forms.loginAccount;

export const { openRegisterForm, openLoginForm, openAccount } =
  formSlice.actions;
export default formSlice.reducer;
