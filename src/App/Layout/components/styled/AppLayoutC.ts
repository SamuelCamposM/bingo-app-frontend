import { styled } from "@mui/system";
import { Box } from "@mui/material";
export const LayoutBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  height: `100vh`,
  overflow: "hidden",
});

export const ContentBox = styled(Box)({
  flexGrow: 1,
  overflow: "auto",
});
