import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { ExpandMore, Inbox, Mail } from "@mui/icons-material";
import { routes } from "../../router/routes";
import { NavLink } from "react-router-dom";
export const ListSidebar = ({ openSidebar = true }) => {
  return (
    <Box sx={{ overflow: "auto" }}>
      <List>
        {routes.map(
          ({ name, path }, index) => (
            <Tooltip key={index} title={name} followCursor placement="right">
              <ListItem disablePadding>
                <NavLink
                  style={{
                    width: "100%",
                    textDecoration: "none",
                  }}
                  to={path}
                  className={({ isActive }) => {
                    if (isActive) {
                      return "grey";
                    }
                  }}
                >
                  <ListItemButton
                    sx={{
                      p: 0,
                      py: 1,
                    }}
                  >
                    <ListItemIcon
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      {index % 2 === 0 ? <Inbox /> : <Mail />}
                    </ListItemIcon>
                    <ListItemText
                      sx={{ padding: 0, margin: 0 }}
                      primary={openSidebar ? name : ""}
                    />
                  </ListItemButton>
                </NavLink>
                <IconButton
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: 0.75,
                    margin: 0,
                  }}
                >
                  <ExpandMore />
                </IconButton>
              </ListItem>
            </Tooltip>
          )
        )}
      </List>
    </Box>
  );
};
