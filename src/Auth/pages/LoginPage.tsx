import { Box, Checkbox, FormControlLabel, Grid, Paper } from "@mui/material";
import { DinamicFormData } from "../../components";
import { min, required } from "../../helpers";
import { useForm } from "../../hooks";

import { ValidationFunctionProps, InitialUseFormProps } from "../../interfaces";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AuthLayout } from "../Layout/AuthLayout";

const useFormData: InitialUseFormProps = {
  test1: {
    tipo: "campo",
    name: "test1",
    label: "example label test1",
    validations: [required],
  },
  test2: {
    tipo: "campo",
    name: "test2",
    label: "example label test1",
    validations: [(value: ValidationFunctionProps) => min(value, 3)],
  },
};

export const LoginPage = () => {
  const { formData, formValues, handleChange, setisSubmited, isFormInvalid } =
    useForm(useFormData);

  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisSubmited(true);

    if (isFormInvalid) {
      return console.log("invalido");
    }
    return console.log("valido");
    // setIsSubmited(isSubmited + 1);
  };

  return (
    <AuthLayout>
      <form onSubmit={loginSubmit}>
        <DinamicFormData
          formData={formData}
          formValues={formValues}
          handleChange={handleChange}
        />
        <FormControlLabel control={<Checkbox />} label="Recuerdame" />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ borderRadius: "15px" }}
          type="submit"
        >
          SING IN
        </Button>
        <Typography variant="subtitle1">
          Don't you have an account? <a href="#">Sing up</a>{" "}
        </Typography>
      </form>
    </AuthLayout>
  );
};
