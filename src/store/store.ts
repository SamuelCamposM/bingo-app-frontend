import { configureStore } from "@reduxjs/toolkit";
import { chatSlice } from "./chat/chatSlice";
import { authSlice } from "./auth/authSlice";
import { uiSlice } from "./ui/uiSlice";
import { menuSlice } from "./menu/menuSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    chat: chatSlice.reducer,
    ui: uiSlice.reducer,
    menu: menuSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
