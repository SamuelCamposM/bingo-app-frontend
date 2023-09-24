import { useDispatch, useSelector } from "react-redux";
import {
  onSliceAddMessage,
  onSliceCargarUsuarios,
  onSliceGetMensajes,
  onSliceSelectChat,
} from "../../store";
import { Mensaje, RootState, User } from "../../store/interfaces";

export const useChatStore = () => {
  const { usuarios, chatActivo, mensajes } = useSelector(
    (state: RootState) => state.chat
  );
  const dispatch = useDispatch();

  const onCargarUsuarios = (usuarios: User[]) => {
    dispatch(onSliceCargarUsuarios(usuarios));
  };
  const onSelectChat = (chat: string) => {
    dispatch(onSliceSelectChat(chat));
  };
  const onAddMessage = (mensaje: Mensaje) => {
    dispatch(onSliceAddMessage(mensaje));
  };
  const oneGetMensajes = (mensajes: Mensaje[]) => {
    dispatch(onSliceGetMensajes(mensajes));
  };
  return {
    //*Propiedades
    usuarios,
    chatActivo,
    mensajes,
    oneGetMensajes,
    //Metodos
    onCargarUsuarios,
    onSelectChat,
    onAddMessage,
  };
};
