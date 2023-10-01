import { AppBar, Theme, styled } from "@mui/material";

export const AppBarHeader = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  background: theme.palette.primary.main,
  // background: `linear-gradient(45deg, ${theme.palette.success.dark} 30%, ${theme.palette.secondary.main} 90%)`,
  zIndex: theme.zIndex.drawer + 1,
  paddingLeft: 24,
  ".toolbar": {
    height: theme.mixins.toolbar.minHeight,
    display: "flex",
    justifyContent: "space-between",
  },
  ".boxEmpresa": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ".logoEmpresa": {
      mr: 1,
      color: theme.palette.getContrastText("#000"),
    },
    ".textoEmpresa": {
      mr: 2,
      fontFamily: "monospace",
      fontWeight: 700,
      letterSpacing: ".3rem",
      color: theme.palette.getContrastText("#000"),
      textDecoration: "none",
    },
  },
}));
