import { ValidationFunctionProps } from "../../interfaces";

export const required = ({ value }: ValidationFunctionProps) => {
  if (typeof value === "string" && value.trim() === "") {
    return `El campo es obligatorio`;
  }
  if (value.length === 0) {
    return `El campo es obligatorio`;
  }
  return null; // Add this line
};

export const min = (value: string) => {
  if (value.trim() === "" || value.length === 0) {
    return `El campo ${"campo"} es obligatorio`;
  }
};

export const max = (value: string) => {
  if (value.trim() === "" || value.length === 0) {
    return `El campo ${"campo"} es obligatorio`;
  }
};

export const entre = (value: string) => {
  if (value.trim() === "" || value.length === 0) {
    return `El campo ${"campo"} es obligatorio`;
  }
};

export const validarEmail = (email: string) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return "Invalid email format";
  }
  return null;
};
