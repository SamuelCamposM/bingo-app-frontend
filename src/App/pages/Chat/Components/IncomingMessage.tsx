import { formatearFecha } from "../../../../helpers/date/formatearFecha";
import { Mensaje } from "../../../../store/interfaces";

export const IncomingMessage = ({ msg }: { msg: Mensaje }) => {
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{msg.mensaje}</p>
          <span className="time_date">{formatearFecha(msg.createdAt)} </span>
        </div>
      </div>
    </div>
  );
};
