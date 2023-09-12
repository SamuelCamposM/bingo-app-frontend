export interface ValidationFunctionProps {
  value: string | [string];
  fields?: [FieldProps];
  formValues?: { [k: string]: string };
}

export type ValidationFunction = (
  args: ValidationFunctionProps
) => string | undefined;

export interface FieldProps {
  tipo: string;
  name: string;
  label: string;
  validations?: Function[];
  value?: string;
  errores?: boolean[];
}

export interface FormProps {
  [key: string]: FieldProps;
}
