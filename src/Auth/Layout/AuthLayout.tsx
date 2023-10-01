import { Box } from "@mui/material";
import bgImage from "../../assets/dog4.jpg";
import { memo } from "react";
import { LoginBox } from "../components/styled/LoginBox";

export const AuthLayout = memo(
  ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
      <LoginBox>
        <Box className="imgBx">
          <img src={bgImage} alt="Imagen Fondo" />
        </Box>
        <Box className="contentBx">
          <Box className="formBx">
            <h2>Login</h2>
            {children}
          </Box>
        </Box>
      </LoginBox>
    );
  }
);
