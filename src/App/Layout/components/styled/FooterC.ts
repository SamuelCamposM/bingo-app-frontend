import { AppBar, Theme, styled } from "@mui/material";

export const AppBarFooter = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  color: "transparent",
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
