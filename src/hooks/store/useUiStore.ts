import { useDispatch, useSelector } from "react-redux";
import { onSliceToogleDrawerChat, onSliceToogleSidebarChat } from "../../store";
import { RootState } from "../../store/interfaces";

export const useUiStore = () => {
  const { openDrawerChat, openDrawerSidebar } = useSelector(
    (state: RootState) => state.ui
  );

  const dispatch = useDispatch();

  const onToogleDrawerChat = () => {
    dispatch(onSliceToogleDrawerChat());
  };

  const onToogleSidebarChat = () => {
    dispatch(onSliceToogleSidebarChat());
  };
  return {
    // PROPIEDADES
    openDrawerChat,
    openDrawerSidebar,
    // METODOS
    onToogleDrawerChat,
    onToogleSidebarChat,
  };
};
