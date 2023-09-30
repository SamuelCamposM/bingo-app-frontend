import { Avatar, Box, ListItem, ListItemText } from "@mui/material";
import { formatearFecha } from "../../../../helpers/date/formatearFecha";
import { Mensaje } from "../../../../store/interfaces";
import { agregarTransparencia } from "../../../../helpers";

export const IncomingMessage = ({ msg }: { msg: Mensaje }) => {
  return (
    <ListItem
      disablePadding
      sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}
    >
      <Avatar
        src="https://ptetutorials.com/images/user-profile.png"
        sx={{ mx: 1 }}
      />
      <Box
        sx={{
          maxWidth: "60%",
          borderRadius: (theme) => theme.spacing(2),

          margin: (theme) => `${theme.spacing(1)} ${theme.spacing(0)}`,
          backgroundColor: (theme) =>
            agregarTransparencia(theme.palette.primary.light, 0.2),
        }}
      >
        <ListItemText
          sx={{ px: 1 }}
          primary={msg.mensaje}
          secondary={formatearFecha(msg.createdAt)}
        />
      </Box>
    </ListItem>
  );
};
