import { useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, MainPage } from "../pages";
import { useAuthStore } from "../hooks";

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
          <Route path="/auth/*" element={<LoginPage />} />
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
