import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import { drawerWidth } from "../../../constant";
import { LogoIcon } from "../../../../src/assets/svg/LogoIcon";
import SidebarList from "./SidebarList";

function DashboardSideBar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          background: (theme) => theme.palette.neutral[900],
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box p={3}>
        <LogoIcon />
      </Box>
      <Box
        sx={{
          px: 3,
          py: 1.5,
          mx: 2,
          my: 3,
          background: "rgba(255, 255,255,0.04)",
        }}
      >
        <Typography color="white" variant="subtitle1">
          zahra mivehchi
        </Typography>
        <Typography color="neutral.400" variant="body2">
          rghdkghdgd
        </Typography>
      </Box>
      <SidebarList />
    </Drawer>
  );
}

export default DashboardSideBar;
