import { TextField, Box, Typography } from "@mui/material";
import { useAuthStore, useForm } from "../../hooks";
import Button from "@mui/material/Button";
import { AuthLayout } from "../Layout/AuthLayout";
import { useMemo, useEffect } from "react";
import { required } from "../../helpers";
import { Link } from "react-router-dom";

interface RegisterInterface {
  [key: string]: string | string[];
  email: string;
  password: string;
}

export const LoginPage = () => {
  const initialValues = useMemo<RegisterInterface>(
    () => ({
      email: "",
      password: "",
    }),
    []
  );

  const config = useMemo(
    () => ({
      password: [required],

      email: [required],
    }),
    []
  );
  const { onStartLogin, errorMessage } = useAuthStore();
  const {
    formValues,
    errorValues,
    handleChange,
    setisSubmited,
    isFormInvalid,
    handleBlur,
    isFormInvalidSubmit,
  } = useForm(initialValues, config);
  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisSubmited(true);
    handleBlur();
    if (isFormInvalidSubmit(formValues)) {
      return;
    }

    onStartLogin({ email: formValues.email, password: formValues.password });
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
          label="Email"
          value={formValues.email}
          onChange={handleChange}
          name="email"
          error={errorValues.email.length > 0}
          helperText={errorValues.email.join(" - ")}
          onBlur={handleBlur}
        />

        <TextField
          fullWidth
          label="Password"
          value={formValues.password}
          onChange={handleChange}
          name="password"
          error={errorValues.password.length > 0}
          helperText={errorValues.password.join(" - ")}
          onBlur={handleBlur}
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          SING IN
        </Button>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" color="secondary.light">
            Aun no tienes una cuenta?
          </Typography>
          <Link to="/auth/register">
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
