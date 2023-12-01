import React from "react";
import CustomerHeader from "./CustomerHeader";
import CustomerFooter from "./CustomerFooter";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export function CustomerLayout() {
  return (
    <div>
      <CustomerHeader />
      <Box component={"main"}>
        <Outlet />
      </Box>
      <CustomerFooter />
    </div>
  );
}
