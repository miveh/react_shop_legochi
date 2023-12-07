import React from "react";
import {
  Box,
  Container,
  Avatar,
  Tooltip,
  Toolbar,
  IconButton,
  Typography,
  AppBar,
} from "@mui/material";
import { LogoIcon } from "../../../assets/svg/LogoIcon";
import {
  BackToSiteIcon,
  DashboardHeaderUserMenu,
  DashboardHeaderMenu,
} from "../../../components";

function DashboardHeader() {
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="admin avatar" src="./../src/assets/svg/Icon.svg" />
              </IconButton>
            </Tooltip>

            <DashboardHeaderUserMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default DashboardHeader;
