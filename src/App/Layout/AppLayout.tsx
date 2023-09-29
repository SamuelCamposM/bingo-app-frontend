import { Appbar } from "./components";
import { Suspense } from "react";
import { ChatDrawer } from "./components/ChatDrawer";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";

export const AppLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <CssBaseline />
      <ChatDrawer />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: `100vh`,
          overflow: "hidden",
        }}
      >
        <Appbar />
        <Box
          sx={{
            flexGrow: 1,
            overflow: "auto",
          }}
          pl={1}
        >
          <Suspense fallback={<span>Loading...</span>}>{children}</Suspense>
        </Box>
        <Appbar />
      </Box>
    </>
  );
};
