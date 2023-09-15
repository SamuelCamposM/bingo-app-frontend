import { useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { useAuthStore } from "../hooks";
import { AuthRouter } from "../Auth";
import { MainPage } from "../pages";

export const AppRouter = () => {
  const { status, onStartSheckAuthToken } = useAuthStore();
  useEffect(() => {
    onStartSheckAuthToken();
  }, []);
  if (status === "checking") {
    return <h3>Cargando</h3>;
  }
  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="/*" element={<Navigate to={"/auth/login"} />} />
        </>
      ) : (
        <>
          <Route path="/" element={<MainPage />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </>
      )}

      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};
