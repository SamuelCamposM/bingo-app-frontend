import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { ExpandMore, Inbox, Mail } from "@mui/icons-material";
import { routes } from "../../router/routes";
import { useUiStore } from "../../../hooks";
import { NavLink } from "react-router-dom";

const drawerWidthClose = 97;
const drawerWidthOpen = 240;
export const DrawerSidebar = () => {
  const { openDrawerSidebar } = useUiStore();
  return (
    <Drawer
      variant="permanent"
      sx={{
        transitionDuration: ".3s",
        transitionProperty: "width",
        width: openDrawerSidebar ? drawerWidthOpen : drawerWidthClose,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          transitionDuration: ".3s",
          transitionProperty: "width",
          width: openDrawerSidebar ? drawerWidthOpen : drawerWidthClose,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {routes.map(({ name, path }, index) => (
            <Tooltip key={name} title={name} followCursor placement="right">
              <ListItem disablePadding>
                <NavLink
                  style={{ width: "100%" }}
                  to={path}
                  className={({ isActive }) => {
                    if (isActive) {
                      return "red";
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
                      primary={openDrawerSidebar ? name : ""}
                    />
                  </ListItemButton>
                </NavLink>
                <IconButton
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                    margin: 0,
                  }}
                >
                  <ExpandMore />
                </IconButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};
