import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { lazy } from "react";
const ChatPage = lazy(() => import("../pages/Chat/ChatPage"));
const Menu = lazy(() => import("../pages/Menu/Menu"));
export const ContentRouter = () => {
  return (
    <Routes>
      {routes.map(({ Component, path }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path={"/chat/*"} element={<ChatPage />} />
      <Route path={"/menu"} element={<Menu />} />

      {/* Aquí se redirige a la primera página si la ruta no coincide */}
      <Route path="*" element={<Navigate replace to="menu" />} />
    </Routes>
  );
};

export default ContentRouter;
