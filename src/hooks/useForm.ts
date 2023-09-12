import { useEffect, useState } from "react";
import { FormProps, ValidationFunctionProps } from "../interfaces";

export const useForm = (initialForm: FormProps) => {
  const [isFormInvalid, setisFormValid] = useState(true);
  const [isSubmited, setisSubmited] = useState(false);

  const [formValues, setFormValues] = useState(
    Object.fromEntries(
      Object.entries(initialForm).map(([key, value]) => [
        key,
        value.value || "",
      ])
    )
  );

  const [formData, setformData] = useState(
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
        const errores = itemForm.validations.map((validationFuntion) => {
          const args: ValidationFunctionProps = {
            value: formValues[itemForm.name],
          };
          const result = validationFuntion(args);
          console.log(validationFuntion(args));

          if (result) {
            hayError = true;
          }
          return result;
        });
        return { ...itemForm, errores: isSubmited ? errores : [] };
      })
    );
    console.log({ hayError });

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
