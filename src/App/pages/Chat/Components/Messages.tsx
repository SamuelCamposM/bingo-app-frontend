import { useAuthStore, useChatStore } from "../../../../hooks";
import { IncomingMessage, OutgoingMessage, SendMessage } from "./";
export const Messages = () => {
  const { mensajes } = useChatStore();
  const { user } = useAuthStore();

  return (
    <div className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div className="msg_history" id="mensajes">
        {mensajes.map((msg) =>
          user.uid === msg.para ? (
            <IncomingMessage key={msg._id} msg={msg} />
          ) : (
            <OutgoingMessage key={msg._id} msg={msg} />
          )
        )}
      </div>
      {/* <!-- Historia Fin --> */}
      <SendMessage />
    </div>
  );
};
