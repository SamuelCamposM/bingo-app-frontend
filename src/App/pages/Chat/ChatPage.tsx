import { useLocation } from "react-router-dom";
import { Messages } from "./Components";

import "./index.css";
import { useCallback, useEffect } from "react";

import queryString from "query-string";
import { useChatStore } from "../../../hooks";
import { chatApi } from "../../../api";
export const Chat = () => {
  const { onSelectChat, oneGetMensajes } = useChatStore();
  const location = useLocation();

  const {
    uid = "",
    // name = ""
  } = queryString.parse(location.search) as {
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

  return <Messages />;
};

export default Chat;
