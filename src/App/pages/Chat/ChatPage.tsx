import { useLocation } from "react-router-dom";

import { useCallback, useEffect } from "react";

import queryString from "query-string";
import { chatApi } from "../../../api";
import { scrollToBottomAnimated } from "../../helpers";

import { IncomingMessage, OutgoingMessage, SendMessage } from "./Components";
import { useChatStore, useAuthStore } from "../../../hooks";
import { Divider } from "@mui/material";
import { BoxChat, TypographyChatActive } from "./style";

export const ChatPage = () => {
  const { onSelectChat, oneGetMensajes } = useChatStore();
  const location = useLocation();

  const { uid = "", name = "" } = queryString.parse(location.search) as {
    uid: string;
    name: string;
  };
  const getChat = useCallback(async (uid: string) => {
    onSelectChat(uid);
    const res = await chatApi.get(`/mensajes/${uid}`);

    await oneGetMensajes(res.data.mensajes);
  }, []);

  useEffect(() => {
    if (uid !== "") {
      getChat(uid);
    }
  }, [uid]);
  const { mensajes } = useChatStore();
  const { user } = useAuthStore();
  useEffect(() => {
    if (mensajes.length !== 0) {
      scrollToBottomAnimated("mensajes");
    }
  }, [mensajes]);

  return (
    <>
      <Divider>
        <TypographyChatActive
          variant="subtitle2"
          color="primary"
          textAlign={"center"}
          fontWeight={"700"}
        >
          {name}
        </TypographyChatActive>
      </Divider>

      <BoxChat id="mensajes">
        {mensajes.map((msg) =>
          user.uid === msg.para ? (
            <IncomingMessage msg={msg} key={msg._id} />
          ) : (
            <OutgoingMessage msg={msg} key={msg._id} />
          )
        )}

        {/* <!-- Historia Fin --> */}
      </BoxChat>
      <SendMessage name={name} />
    </>
  );
};

export default ChatPage;
