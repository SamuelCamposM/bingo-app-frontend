import { useEffect, useState } from "react";
import {
  FieldProps,
  IFormValues,
  InitialUseFormProps,
  ValidationFunctionProps,
} from "../interfaces";

export const useForm = (initialForm: InitialUseFormProps) => {
  const [isFormInvalid, setisFormValid] = useState(true);
  const [isSubmited, setisSubmited] = useState(false);

  const [formValues, setFormValues] = useState<IFormValues>(
    Object.fromEntries(
      Object.entries(initialForm).map(([key, value]) => [
        key,
        value.value || "",
      ])
    )
  );

  const [formData, setformData] = useState<FieldProps[]>(
    Object.values(initialForm).map((value) => ({
      ...value,
      validations: value.validations || [],
      value: "",
      errores: [] as string[],
    }))
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const pasandoValidaciones = () => {
    let hayError = false;
    setformData(
      formData.map((itemForm) => {
        const errores = itemForm.validations
          .map((validationFuntion) => {
            const args: ValidationFunctionProps = {
              value: formValues[itemForm.name],
              // fields: formData,
              // formValues: formValues,
            };
            const result = validationFuntion(args);

            if (result) {
              hayError = true;
            }
            return result;
          })
          .filter((err) => err);
        return { ...itemForm, errores: isSubmited ? errores : [] };
      })
    );

    setisFormValid(hayError);
  };
  useEffect(() => {
    pasandoValidaciones();
  }, [isSubmited, formValues]);

  return {
    formData,
    formValues,
    handleChange,
    isFormInvalid,
    setisSubmited,
    isSubmited,
  };
};
