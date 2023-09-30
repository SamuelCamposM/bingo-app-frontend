import * as React from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Menu,
} from "@mui/material";
import { LogoDev, MenuTwoTone } from "@mui/icons-material";
import { useAuthStore } from "../../../hooks";
import { NavLink } from "react-router-dom";
import { routes } from "../../router/routes";
import { AppBarHeader } from "./styled";

export const Appbar = () => {
  const { onStartLogout } = useAuthStore();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBarHeader position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="toolbar">
          <LogoDev className="logoEmpresaDesktop" />

          <Typography variant="h6" noWrap className="textoEmpresaDesktop">
            EMPRESA
          </Typography>
          <Box className="boxMenuMobile">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              className="botonMenuMobile"
            >
              <MenuTwoTone />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {routes
                .filter(({ ocultar }) => !ocultar)
                .map(({ to, name }) => (
                  <NavLink key={name} to={to}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{name}</Typography>
                    </MenuItem>
                  </NavLink>
                ))}
            </Menu>
          </Box>
          <LogoDev className="logoEmpresaMobile" />
          <Typography variant="h5" noWrap className="textoEmpresaMobile">
            EMPRESA
          </Typography>
          <Box className="boxMenuDesktop">
            {routes
              .filter(({ ocultar }) => !ocultar)
              .map(({ to, name }) => (
                <NavLink
                  onClick={handleCloseNavMenu}
                  style={{ textDecoration: "none" }}
                  key={name}
                  to={to}
                >
                  <Button className="enlaceBotonDesktop">{name}</Button>
                </NavLink>
              ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
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
      </Container>
    </AppBarHeader>
  );
};
