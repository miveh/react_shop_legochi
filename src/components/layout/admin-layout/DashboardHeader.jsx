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
          {/* <Box
            component="img"
            sx={{
              height: 50,
              width: 50,
            }}
            src="./../src/assets/svg/Icon.svg"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LegoChi
          </Typography> */}

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
