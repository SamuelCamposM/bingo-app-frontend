import { Box, ListItem, ListItemText } from "@mui/material";
import { formatearFecha } from "../../../../helpers/date/formatearFecha";
import { Mensaje } from "../../../../store/interfaces";
import { agregarTransparencia } from "../../../../helpers";

export const OutgoingMessage = ({ msg }: { msg: Mensaje }) => {
  return (
    <ListItem
      disablePadding
      sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
    >
      <Box
        sx={{
          maxWidth: "60%",
          borderRadius: (theme) => theme.spacing(2),

          margin: (theme) => `${theme.spacing(1)} ${theme.spacing(0)}`,
          backgroundColor: (theme) =>
            agregarTransparencia(theme.palette.secondary.light, 0.2),
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
