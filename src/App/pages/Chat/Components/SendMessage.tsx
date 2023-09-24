import { SocketContext } from "../../../../context";
import { required } from "../../../../helpers";
import { useAuthStore, useChatStore, useForm } from "../../../../hooks";
import TextField from "@mui/material/TextField";
import { useContext } from "react";

export const SendMessage = () => {
  const { socket } = useContext(SocketContext);
  const { user } = useAuthStore();
  const { chatActivo } = useChatStore();
  const {
    formValues,
    handleChange,
    handleBlur,
    isFormInvalid,
    errorValues,
    onResetForm,
    setisSubmited,
  } = useForm({ mensaje: "" }, { mensaje: [required] });
  const { mensaje } = formValues;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleBlur();
    setisSubmited(true);
    if (isFormInvalid) {
      return;
    }
    onResetForm();

    socket?.emit("mensaje-personal", {
      de: user.uid,
      para: chatActivo,
      mensaje,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <TextField
            autoComplete="false"
            fullWidth
            name="mensaje"
            label="Mensaje"
            value={mensaje}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorValues.mensaje.length > 0}
            helperText={errorValues.mensaje.join(" - ")}
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3" type="submit">
            enviar
          </button>
        </div>
      </div>
    </form>
  );
};
