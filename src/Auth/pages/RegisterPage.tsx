import { TextField, Box, Typography } from "@mui/material";
import { useAuthStore, useForm } from "../../hooks";
import Button from "@mui/material/Button";
import { AuthLayout } from "../Layout/AuthLayout";
import { useMemo, useEffect } from "react";
import { required } from "../../helpers";
import { Link } from "react-router-dom";

interface RegisterInterface {
  [key: string]: string | string[];
  name: string;
  email: string;
  password: string;
  password2: string;
}

export const RegisterPage = () => {
  const initialValues = useMemo<RegisterInterface>(
    () => ({
      name: "",
      email: "",
      password: "",
      password2: "",
    }),
    []
  );

  const config = useMemo(
    () => ({
      name: [required],
      email: [required],
      password: [
        required,
        (a: string | string[], b: RegisterInterface) => {
          if (a !== b.password2) {
            return "Las contraseñas no coinciden";
          }
          return "";
        },
      ],
      password2: [
        required,
        (a: string | string[], b: RegisterInterface) => {
          if (a !== b.password) {
            return "Las contraseñas no coinciden";
          }
          return "";
        },
      ],
    }),
    []
  );
  const { onStartRegister, errorMessage } = useAuthStore();
  const {
    formValues,
    errorValues,
    handleChange,
    setisSubmited,
    isFormInvalid,
    handleBlur,
    isFormInvalidSubmit,
  } = useForm(initialValues, config);
  const { email, name, password, password2 } = formValues;
  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisSubmited(true);
    if (isFormInvalidSubmit(formValues)) {
      return;
    }
    onStartRegister({ email, name, password });
  };
  useEffect(() => {
    if (errorMessage !== undefined) {
      console.log(errorMessage);
    }
  }, [errorMessage]);

  return (
    <AuthLayout>
      <form onSubmit={loginSubmit}>
        <h2> {isFormInvalid ? "Invalido" : "valido"}</h2>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={handleChange}
          name="name"
          error={errorValues.name.length > 0}
          helperText={errorValues.name.join(" - ")}
          onBlur={handleBlur}
        />
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={handleChange}
          name="email"
          error={errorValues.email.length > 0}
          helperText={errorValues.email.join(" - ")}
          onBlur={handleBlur}
        />
        <TextField
          fullWidth
          label="Password"
          value={password}
          onChange={handleChange}
          name="password"
          error={errorValues.password.length > 0}
          helperText={errorValues.password.join(" - ")}
          onBlur={handleBlur}
        />
        <TextField
          fullWidth
          label="Confirmar Password"
          value={password2}
          onChange={handleChange}
          name="password2"
          error={errorValues.password2.length > 0}
          helperText={errorValues.password2.join(" - ")}
          onBlur={handleBlur}
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          SING IN
        </Button>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" color="secondary.light">
            Aun no tienes una cuenta?
          </Typography>
          <Link to={"/auth/login"}>
            <Typography
              variant="subtitle1"
              color="secondary.light"
              sx={{
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Registrarse
            </Typography>
          </Link>
        </Box>
      </form>
    </AuthLayout>
  );
};
