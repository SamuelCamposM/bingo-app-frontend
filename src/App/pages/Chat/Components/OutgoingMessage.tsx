import { formatearFecha } from "../../../../helpers/date/formatearFecha";
import { Mensaje } from "../../../../store/interfaces";

export const OutgoingMessage = ({ msg }: { msg: Mensaje }) => {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{msg.mensaje}</p>
        <span className="time_date">{formatearFecha(msg.createdAt)} </span>
      </div>
    </div>
  );
};
