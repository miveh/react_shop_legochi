import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";

export function DashboardLayout() {
  return (
    <div>
      <DashboardHeader />
      <Box component={"main"} sx={{ flexGrow: 1, p: 3, mt: "48px" }}>
        <Outlet />
      </Box>
    </div>
  );
}
