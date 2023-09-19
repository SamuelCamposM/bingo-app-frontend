import { TextField } from "@mui/material";
import { useForm } from "../../hooks";

import Button from "@mui/material/Button";
import { AuthLayout } from "../Layout/AuthLayout";
import { required } from "../../helpers";
import { useMemo } from "react";

export const LoginPage = () => {
  const initialValues = useMemo(
    () => ({
      nombre: "",
      correo: "",
    }),
    []
  );
  const config = useMemo(
    () => ({
      nombre: {
        validations: [],
        errores: [],
      },
      correo: {
        validations: [required],
        errores: [],
      },
    }),
    []
  );
  const {
    formValues,
    configValues,
    handleChange,
    setisSubmited,
    isFormInvalid,
    handleBlur,
  } = useForm(initialValues, config);

  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisSubmited(true);
    // setIsSubmited(isSubmited + 1);
  };

  return (
    <AuthLayout>
      <form onSubmit={loginSubmit}>
        <h2> {isFormInvalid ? "Invalido" : "valido"}</h2>
        <TextField
          fullWidth
          label="Correo"
          value={formValues.correo}
          onChange={handleChange}
          name="correo"
          error={configValues.correo.errores.length > 0}
          helperText={configValues.correo.errores.map((error) => error)}
          onBlur={handleBlur}
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          SING IN
        </Button>
      </form>
    </AuthLayout>
  );
};
