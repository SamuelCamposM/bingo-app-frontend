import { Appbar, ChatDrawer, Footer } from "./components";
import { Suspense } from "react";

import { CssBaseline } from "@mui/material";
import { ContentBox, LayoutBox } from "./components/styled";
import { DrawerSidebar } from "./components/DrawerSidebar";

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
        <LayoutBox
          sx={{
            flexDirection: "row",
          }}
        >
          <DrawerSidebar />
          <ContentBox>
            <Suspense fallback={<span>Loading...</span>}>{children}</Suspense>
          </ContentBox>
        </LayoutBox>
        <Footer />
      </LayoutBox>
    </>
  );
};
