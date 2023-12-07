import React from "react";
import { MenuItems } from "../../../../constant";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeaderMenuMobileSize from "./HeaderMenuMobileSize";

export function DashboardHeaderMenu() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderMenuMobileSize />

      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {MenuItems.map((page) => (
          <Button
            key={page.id}
            onClick={() => {
              navigate(page.to);
            }}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page.label}
          </Button>
        ))}
      </Box>
    </>
  );
}
