import { SidebarItem } from "./SidebarItem";
import { useAuthStore, useChatStore } from "../../../../hooks";
export const Sidebar = () => {
  const { usuarios } = useChatStore();
  const { user } = useAuthStore();
  return (
    <div className="inbox_chat">
      {usuarios
        .filter((usuario) => usuario.uid !== user.uid)
        .map((usuario) => (
          <SidebarItem key={usuario.uid} usuario={usuario} />
        ))}
      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  );
};
