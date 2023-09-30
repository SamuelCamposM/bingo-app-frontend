import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "../interfaces";

const initialState: UiState = {
  openDrawerChat: false,
  openDrawerSidebar: false,
};
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    onSliceToogleDrawerChat: (state) => {
      state.openDrawerChat = !state.openDrawerChat;
    },
    onSliceToogleSidebarChat: (state) => {
      state.openDrawerSidebar = !state.openDrawerSidebar;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSliceToogleDrawerChat, onSliceToogleSidebarChat } =
  uiSlice.actions;
