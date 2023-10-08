export interface PageItem {
  _id?: string;
  nombre: string;
  tipo: "categoria" | "subCategoria" | "subSubCategoria";
  icono: string;
  subCategorias: string[];
  subSubCategorias: string[];
  orden: number;
  createdAt: string;
  updatedAt: string;
}

export interface MenuState {
  rows: PageItem[];
  openModal: Boolean;
  rowActive: PageItem;
}
