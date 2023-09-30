import { Appbar, ChatDrawer, Footer } from "./components";
import { Suspense } from "react";

import { CssBaseline } from "@mui/material";
import { ContentBox, LayoutBox } from "./components/styled";

export const AppLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <CssBaseline />
      <ChatDrawer />
      <LayoutBox>
        <Appbar />
        <ContentBox>
          <Suspense fallback={<span>Loading...</span>}>{children}</Suspense>
        </ContentBox>
        <Footer />
      </LayoutBox>
    </>
  );
};
