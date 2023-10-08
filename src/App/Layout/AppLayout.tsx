import {
  Appbar,
  ChatDrawer,
  DrawerSidebarDesktop,
  DrawerSidebarMobile,
  Footer,
} from "./components";
import { Suspense, useEffect } from "react";

import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { ContentBox, LayoutBox } from "./components/styled";
import { MigasDePan } from "./components/MigasDePan";
import { useMenuStore } from "../../hooks";

export const AppLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const { getDataMenu } = useMenuStore();
  useEffect(() => {
    getDataMenu();
  }, []);

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
            <Suspense fallback={<span>Loading...</span>}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  overflow: "auto",
                }}
              >
                <MigasDePan />
                {children}
              </Box>
            </Suspense>
          </ContentBox>
        </LayoutBox>
        <Footer />
      </LayoutBox>
    </>
  );
};
