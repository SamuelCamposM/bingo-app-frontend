import { ChangeEvent, useCallback, useEffect, useState } from "react";

export type ValidationFunction = (value: string | string[]) => string;

export interface Config {
  validations: ValidationFunction[];
  errores: string[];
}

export const useForm = <
  ValueTypes extends Record<string, string | string[]>,
  ConfigTypes extends Record<string, Config>
>(
  InitialValues: ValueTypes,
  config: ConfigTypes
) => {
  const [formValues, setformValues] = useState(InitialValues);
  const [configValues, setconfigValues] = useState(config);
  const [isSubmited, setisSubmited] = useState(false);
  const [isFormInvalid, setisFormInvalid] = useState(false);
  const [onBlur, setonBlur] = useState(0);

  const onResetForm = useCallback(() => {
    setformValues(InitialValues);
    setconfigValues(config);
    setisSubmited(false);
    setisFormInvalid(false);
    setonBlur(0);
  }, []);

  const handleBlur = useCallback(() => {
    setonBlur((prev) => prev + 1);
  }, []);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setformValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const pasandoValidaciones = () => {
    setconfigValues((prev) => {
      let hayError: boolean = false;
      const res = Object.entries(prev).map(([name, field]) => {
        const errores = field.validations
          .map((validation) => {
            const result = validation(formValues[name]);

            if (result) {
              hayError = true;
            }
            return result;
          })
          .filter((err) => err !== "");

        field.errores = isSubmited ? errores : [];
        return [name, field];
      });
      setisFormInvalid(hayError);
      return Object.fromEntries(res);
    });
  };

  useEffect(() => {
    pasandoValidaciones();
  }, [isSubmited, onBlur]);

  return {
    handleChange,
    setisSubmited,
    isFormInvalid,
    formValues,
    configValues,
    handleBlur,
    onResetForm,
  };
};
