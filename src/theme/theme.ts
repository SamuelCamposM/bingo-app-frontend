import { createTheme } from "@mui/material";
import { red, blueGrey, blue } from "@mui/material/colors";
export const purpleTheme = () => {
  return createTheme({
    palette: {
      mode: "dark",
      primary: { main: blueGrey["A700"] },
      secondary: { main: blue["A400"] },
      error: {
        main: red[400],
      },
    },
    components: { MuiTextField: { defaultProps: { autoComplete: "off" } } },
    typography: {
      allVariants: { color: "white" },
    },
  });
};
