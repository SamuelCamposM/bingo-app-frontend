import { createTheme } from "@mui/material";
import { red, blueGrey, purple } from "@mui/material/colors";
import { User } from "../store/interfaces";
export const purpleTheme = (user: User) => {
  return createTheme({
    palette: {
      mode: "dark",
      primary: { main: purple[400] },
      secondary: { main: blueGrey[400] },
      error: {
        main: red[400],
      },
    },
    typography: {
      allVariants: { color: "white" },
    },
  });
};
