import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { lazy } from "react";
const ChatPage = lazy(() => import("../pages/Chat/ChatPage"));
export const ContentRouter = () => {
  return (
    <Routes>
      {routes.map(({ Component, path }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
        <Route  path={"/chat/*"} element={<ChatPage />} />
      {/* Aquí se redirige a la primera página si la ruta no coincide */}
      <Route path="*" element={<Navigate replace to="page2" />} />
    </Routes>
  );
};

export default ContentRouter;
