import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MenuState, PageItem } from "../interfaces";

export const rowDefault: PageItem = {
  nombre: "",
  tipo: "categoria",
  icono: "string",
  subCategorias: [],
  subSubCategorias: [],
  orden: 1,
  createdAt: "",
  updatedAt: "",
};
const initialState: MenuState = {
  openModal: false,
  rows: [],
  rowActive: rowDefault,
};
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    getSliceDataMenu: (state, action: PayloadAction<PageItem[]>) => {
      state.rows = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getSliceDataMenu } = menuSlice.actions;
