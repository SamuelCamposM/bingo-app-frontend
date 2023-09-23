import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../../interfaces";

const initialState: AuthState = {
  status: "checking",
  user: {}, // You might want to replace this with a proper initial value
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onSlicechecking: (state /* action */) => {
      state.status = "checking";
      state.errorMessage = undefined;
    },
    onSliceLogin: (state, action: PayloadAction<User>) => {
      state.status = "authenticated";
      state.user = action.payload;
      state.errorMessage = undefined;
    },
    onSliceLogout: (state, action: PayloadAction<string | undefined>) => {
      state.status = "not-authenticated";
      state.user = {}; // You might want to replace this with a proper initial value
      state.errorMessage = action.payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onSlicechecking,
  onSliceLogin,
  onSliceLogout,
  clearErrorMessage,
} = authSlice.actions;
