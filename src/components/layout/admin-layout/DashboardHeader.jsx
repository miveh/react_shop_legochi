import React from "react";
import { Container, Toolbar, Typography, AppBar } from "@mui/material";
import { LogoIcon } from "../../../assets/svg/LogoIcon";
import {
  BackToSiteIcon,
  DashboardHeaderUserMenu,
  DashboardHeaderMenu,
} from "../../../components";

function DashboardHeader() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BackToSiteIcon />

          <DashboardHeaderMenu />

          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Admin Panel
          </Typography>

          <DashboardHeaderUserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default DashboardHeader;
