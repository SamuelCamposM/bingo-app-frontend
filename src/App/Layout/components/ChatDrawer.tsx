import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { useAuthStore, useChatStore, useUiStore } from "../../../hooks";
import { useNavigate } from "react-router-dom"; 

export const ChatDrawer = () => {
  const { usuarios } = useChatStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const { openDrawerChat, onToogleDrawerChat } = useUiStore();

  return (
    <Drawer anchor={"right"} open={openDrawerChat} onClose={onToogleDrawerChat}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={onToogleDrawerChat}
        onKeyDown={onToogleDrawerChat}
      >
        <List>
          {usuarios
            .filter((usuario) => usuario.uid !== user.uid)
            .map((user) => (
              <ListItemButton
                key={user.uid}
                onClick={() => {
                  navigate(`chat/?uid=${user.uid}&name=${user.name}`);
                }}
              >
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={user.online ? "online" : "offline"}
                />
              </ListItemButton>
            ))}
        </List>
      </Box>
    </Drawer>
  );
};
