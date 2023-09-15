import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { agregarTransparencia } from "../../../helpers/agregarTransparencia";

export const LoginBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  ".imgBx": {
    "@media (max-width: 768px)": {
      position: "absolute",
      width: "100%",
      top: 0,
      left: 0,
    },
    position: "relative",
    width: "50%",
    height: "100%",
    ":before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      background: `linear-gradient(225deg, ${theme.palette.primary.light}, ${theme.palette.secondary.dark})`,
      zIndex: 1,
      mixBlendMode: "screen",
    },
    " img": {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },
  ".contentBx": {
    "@media (max-width: 768px)": { width: "100%", zIndex: 1 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "100%",
    ".formBx": {
      "@media (max-width: 768px)": {
        padding: "40px",
        width: "100%",
        background: agregarTransparencia(theme.palette.secondary.dark, 0.9),
        margin: "40px",
      },
      width: "50%",
      h2: {
        fontWeight: "600",
        fontSize: "1.5rem",
        textTransform: "uppercase",
        marginBottom: "20px",
        borderBottom: `4px solid ${theme.palette.error.light}`,
        display: "inline-block",
        letterSpacing: "1px",
      },
    },
  },
}));
