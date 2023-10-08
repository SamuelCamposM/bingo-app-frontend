import { useLocation } from "react-router-dom";

import { useCallback, useEffect } from "react";

import queryString from "query-string";
import { chatApi } from "../../../api";
import { scrollToBottomAnimated } from "../../helpers";

import { IncomingMessage, OutgoingMessage, SendMessage } from "./Components";
import { useChatStore, useAuthStore } from "../../../hooks";
import { Box, Divider, Typography } from "@mui/material";

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
      <Typography
        variant="subtitle2"
        sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" } }}
        color="primary"
        textAlign={"center"}
        fontWeight={"700"}
      >
        {name}
      </Typography>
      <Divider />
      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto",
        }}
        id="mensajes"
      >
        {mensajes.map((msg) =>
          user.uid === msg.para ? (
            <IncomingMessage msg={msg} key={msg._id} />
          ) : (
            <OutgoingMessage msg={msg} key={msg._id} />
          )
        )}

        {/* <!-- Historia Fin --> */}
      </Box>
      <SendMessage name={name} />
    </>
  );
};

export default ChatPage;
