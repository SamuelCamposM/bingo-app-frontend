import { Box } from "@mui/material";
import bgImage from "./bg.jpeg";
import { LoginBox } from "../components/styled/LoginBox";

export const AuthLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <LoginBox component={"section"}>
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
};
