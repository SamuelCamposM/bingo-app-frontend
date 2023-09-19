import { ValidationFunctionProps } from "../../interfaces";

export const required = (value: string | string[]) => {
  if (typeof value === "string" && value.trim() === "") {
    return `El campo es obligatorio`;
  }
  if (value.length === 0) {
    return `El campo es obligatorio`;
  }
  return "";
};

export const min = ({ value }: ValidationFunctionProps, number: number) => {
  if (typeof value === "string" && value.trim().length < number) {
    return `El campo es obligatorio`;
  }
  if (value.length < number) {
    return `El campo es obligatorio`;
  }
};

export const max = ({ value }: ValidationFunctionProps) => {
  if (typeof value === "string" && value.trim() === "") {
    return `El campo es obligatorio`;
  }
  if (value.length === 0) {
    return `El campo es obligatorio`;
  }
};

export const entre = ({ value }: ValidationFunctionProps) => {
  if (typeof value === "string" && value.trim() === "") {
    return `El campo es obligatorio`;
  }
  if (value.length === 0) {
    return `El campo es obligatorio`;
  }
};

export const validarEmail = ({ value }: ValidationFunctionProps) => {
  if (
    typeof value === "string" &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
  ) {
    return "Invalid email format";
  }
};
