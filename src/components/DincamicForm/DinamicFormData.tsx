import { FieldProps, IFormValues } from "../../interfaces";
import { CampoText } from "./Campos/CampoText";

interface DinamicFormDataProps {
  formData: FieldProps[];
  formValues: IFormValues;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DinamicFormData = ({
  formData,
  formValues,
  handleChange,
}: DinamicFormDataProps) => {
  return formData.map((itemForm) => {
    return (
      <CampoText
        key={itemForm.name}
        itemForm={itemForm}
        formValues={formValues}
        handleChange={handleChange}
      />
    );
  });
};
