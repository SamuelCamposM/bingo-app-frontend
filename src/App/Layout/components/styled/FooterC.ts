import { AppBar, Theme, styled } from "@mui/material";

export const AppBarFooter = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  background: theme.palette.primary.light,
  zIndex: theme.zIndex.drawer + 1,
  ".toolbar": {
    height: theme.mixins.toolbar.minHeight,
  },
  ".boxChat": {
    flexGrow: 1,
    ".botonChat": {
      color: "white",
      display: "block",
    },
  },
  ".boxOnline": { flexGrow: 0, display: "flex", alignItems: "center" },
}));
