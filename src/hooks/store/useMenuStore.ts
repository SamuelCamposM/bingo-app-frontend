import { useDispatch, useSelector } from "react-redux";
import { getSliceDataMenu } from "../../store";
import { RootState } from "../../store/interfaces";
import { getPages } from "../../App/Layout/helpers";

export const useMenuStore = () => {
  const { openModal, rowActive, rows } = useSelector(
    (state: RootState) => state.menu
  );

  const dispatch = useDispatch();

  const getDataMenu = async () => {
    const res = await getPages();
    const { data } = res.data;
    console.log({ res });

    dispatch(getSliceDataMenu(data));
  };

  return {
    //Propiedades
    openModal,
    rowActive,
    rows,
    //Metodos
    getDataMenu,
  };
};
