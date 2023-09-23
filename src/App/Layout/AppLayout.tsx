import { Appbar } from "./components";
import { Suspense } from "react";

export const AppLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <Appbar />
      <Suspense fallback={<span>Loading...</span>}>{children}</Suspense>
    </>
  );
};
