import { FieldProps, IFormValues } from "../../../interfaces";
import TextField from "@mui/material/TextField";

interface DinamicFormDataProps {
  itemForm: FieldProps;
  formValues: IFormValues;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CampoText = ({
  itemForm,
  handleChange,
  formValues,
}: DinamicFormDataProps) => {
  return (
    <TextField
      fullWidth
      size="small"
      label={itemForm.label}
      value={formValues[itemForm.name]}
      name={itemForm.name}
      onChange={handleChange}
      error={itemForm.errores.length > 0}
      helperText={itemForm.errores.map(
        (err, index) =>
          `${err} ${index + 1 !== itemForm.errores.length ? " - " : ""}`
      )}
    />
  );
};
