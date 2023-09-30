import { AppBar, Theme, styled } from "@mui/material";

export const AppBarHeader = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  background: theme.palette.primary.main,

  ".toolbar": {
    height: theme.mixins.toolbar.minHeight,
  },

  ".logoEmpresaDesktop": {
    mr: 1,
    display: "none",
    color: theme.palette.getContrastText(theme.palette.primary.main),
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  ".logoEmpresaMobile": {
    mr: 1,
    display: "flex",
    color: theme.palette.getContrastText(theme.palette.primary.main),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  ".textoEmpresaDesktop": {
    mr: 2,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: theme.palette.getContrastText(theme.palette.primary.main),
    textDecoration: "none",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  ".textoEmpresaMobile": {
    mr: 2,
    flexGrow: 1,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: theme.palette.getContrastText(theme.palette.primary.main),
    textDecoration: "none",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  ".boxMenuMobile": {
    flexGrow: 1,
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    ".botonMenuMobile": {
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
    ".menuMobile": {
      display: "block",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  },
  ".boxMenuDesktop": {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },

    ".enlaceBotonDesktop": {
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
  },
}));
