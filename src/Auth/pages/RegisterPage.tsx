import { Box, Grid, Paper } from "@mui/material";
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

export const RegisterPage = () => {
  const { formData, formValues, handleChange, setisSubmited, isFormInvalid } =
    useForm(useFormData);
  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisSubmited(true);
    console.log(isFormInvalid);

    if (isFormInvalid) {
      return console.log("invalido");
    }
    return console.log("valido");
    // setIsSubmited(isSubmited + 1);
  };

  return (
    <AuthLayout>
      <>Register</>
    </AuthLayout>
  );
};
