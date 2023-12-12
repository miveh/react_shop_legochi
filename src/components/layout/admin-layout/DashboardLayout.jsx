import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardSideBar from "./DashboardSidebar";

export function DashboardLayout() {
  return (
    <>
      <CssBaseline />
      <DashboardHeader />
      <Box
        component={"main"}
        sx={{
          flexGrow: 1,
          p: 3,
          mt: "48px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}
