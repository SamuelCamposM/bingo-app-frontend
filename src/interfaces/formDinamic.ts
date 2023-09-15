//HOOK
export interface IFormValues {
  [k: string]: string | [string];
}
export interface ValidationFunctionProps {
  value: string | [string];
  fields?: FieldProps[];
  formValues?: IFormValues;
}

export type ValidationFunction = (
  args: ValidationFunctionProps
) => string | undefined;

export interface FieldProps {
  tipo: "campo" | "number" | "select" | "imagen" | "archivo" | "multiselect";
  name: string;
  label: string;
  validations: Function[];
  value: string;
  errores: string[];
}

export interface InitialFieldProps {
  tipo: "campo" | "number" | "select" | "imagen" | "archivo" | "multiselect";
  name: string;
  label: string;
  validations?: Function[];
  value?: string;
  errores?: string[];
}

export interface InitialUseFormProps {
  [key: string]: InitialFieldProps;
}
