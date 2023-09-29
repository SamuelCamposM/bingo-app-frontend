import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "../interfaces";

const initialState: UiState = {
  openDrawerChat: false,
};
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    onSliceToogleDrawerChat: (state) => {
      state.openDrawerChat = !state.openDrawerChat;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSliceToogleDrawerChat } = uiSlice.actions;
