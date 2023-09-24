import { useChatStore } from "../../../hooks";
import { ChatSelect, InboxPeople, Messages } from "./Components";

import "./index.css";
export const Chat = () => {
  const { chatActivo } = useChatStore();
  return (
    <>
      <InboxPeople />
      {chatActivo ? <Messages /> : <ChatSelect />}{" "}
    </>
  );
};

export default Chat;
