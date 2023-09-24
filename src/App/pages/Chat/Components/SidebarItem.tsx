import { chatApi } from "../../../../api";
import { useChatStore } from "../../../../hooks";
import { User } from "../../../../store/interfaces";
import { scrollToBottom } from "../../../helpers";

export const SidebarItem = ({ usuario }: { usuario: User }) => {
  const { onSelectChat, chatActivo, oneGetMensajes } = useChatStore();

  const onClickChat = async () => {
    onSelectChat(usuario.uid);
    const res = await chatApi.get(`/mensajes/${usuario.uid}`);

    await oneGetMensajes(res.data.mensajes);
    scrollToBottom("mensajes");
  };
  return (
    <div
      className={`chat_list  ${chatActivo === usuario.uid && "active_chat"}`}
      onClick={onClickChat}
    >
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{usuario.name}</h5>
          {usuario.online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};
