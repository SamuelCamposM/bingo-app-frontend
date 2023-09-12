import { DinamicFormData } from "../components";
import { required } from "../helpers";
import { useForm } from "../hooks";

export const LoginPage = () => {
  const { formData, formValues, handleChange, setisSubmited, isFormInvalid } =
    useForm({
      test: {
        tipo: "campo",
        name: "test",
        label: "example label 1", // Aquí va tu etiqueta
        validations: [required],
      },
      test2: {
        tipo: "campo",
        name: "test2",
        label: "example label 2", // Aquí va tu etiqueta
      },
    });

  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisSubmited(true);
    if (isFormInvalid) {
      return console.log("invalido");
    }
    return console.log("valido");
    // setIsSubmited(isSubmited + 1);
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso {isFormInvalid ? "Invalido" : "valido"}</h3>
          <form onSubmit={loginSubmit}>
            <DinamicFormData />
            <code></code>
            {formData.map((itemForm) => {
              return (
                <div key={itemForm.name}>
                  <label htmlFor={itemForm.name}>{itemForm.label}</label>
                  <input
                    type={"text"}
                    value={formValues[itemForm.name]}
                    name={itemForm.name}
                    onChange={handleChange}
                  />
                  {itemForm.errores.map((item, index) => (
                    <div key={index}>
                      <hr />
                      {JSON.stringify(item)}
                    </div>
                  ))}
                </div>
              );
            })}
            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
