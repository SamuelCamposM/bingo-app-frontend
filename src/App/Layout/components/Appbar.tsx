import * as React from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Tooltip,
  MenuItem,
  Menu,
} from "@mui/material";
import { LogoDev, MenuTwoTone } from "@mui/icons-material";
import { useAuthStore, useUiStore } from "../../../hooks";
import { AppBarHeader } from "./styled";

export const Appbar = () => {
  const { onStartLogout } = useAuthStore();
  const { onToogleSidebarChat } = useUiStore();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBarHeader position="sticky">
      <Toolbar
        disableGutters
        className="toolbar"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={onToogleSidebarChat}
        >
          <MenuTwoTone />
        </IconButton>

        <Box className="boxEmpresa">
          <LogoDev className="logoEmpresa" />
          <Typography variant="h6" noWrap className="textoEmpresa">
            EMPRESA
          </Typography>
        </Box>
        <Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar alt="Remy Sharp" src="" />
            </IconButton>
          </Tooltip>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={onStartLogout}>
              <Typography color={"error"} textAlign="center">
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBarHeader>
  );
};
