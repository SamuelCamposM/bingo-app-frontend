import {
  Appbar,
  ChatDrawer,
  DrawerSidebarDesktop,
  DrawerSidebarMobile,
  Footer,
} from "./components";
import { Suspense } from "react";

import { CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { ContentBox, LayoutBox } from "./components/styled";

export const AppLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
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
          {isMdDown ? <DrawerSidebarMobile /> : <DrawerSidebarDesktop />}

          <ContentBox>
            <Suspense fallback={<span>Loading...</span>}>{children}</Suspense>
          </ContentBox>
        </LayoutBox>
        <Footer />
      </LayoutBox>
    </>
  );
};
