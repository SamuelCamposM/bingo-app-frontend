import { ChatSelect, InboxPeople, Messages } from "./Components";

import "./index.css";
export const Chat = () => {
  return (
    <div className="inbox_msg">
      <InboxPeople />
      {true ? <ChatSelect /> : <Messages />}
    </div>
  );
};

export default Chat;
