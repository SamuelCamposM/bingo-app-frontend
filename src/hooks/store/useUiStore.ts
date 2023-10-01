import { useDispatch, useSelector } from "react-redux";
import {
  onSliceToogleDrawerChat,
  onSliceToogleSidebar,
  onSliceToogleSidebarMobile,
} from "../../store";
import { RootState } from "../../store/interfaces";

export const useUiStore = () => {
  const { openDrawerChat, openDrawerSidebar, openDrawerSidebarMobile } =
    useSelector((state: RootState) => state.ui);

  const dispatch = useDispatch();

  const onToogleDrawerChat = () => {
    dispatch(onSliceToogleDrawerChat());
  };

  const onToogleSidebar = () => {
    dispatch(onSliceToogleSidebar());
  };
  const onToogleSidebarMobile = () => {
    dispatch(onSliceToogleSidebarMobile());
  };

  return {
    // PROPIEDADES
    openDrawerChat,
    openDrawerSidebar,
    openDrawerSidebarMobile,
    // METODOS
    onToogleDrawerChat,
    onToogleSidebar,
    onToogleSidebarMobile,
  };
};
