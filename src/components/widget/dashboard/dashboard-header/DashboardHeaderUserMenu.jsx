import React from "react";
import { settings } from "../../../../constant";
import { Typography, Menu, MenuItem } from "@mui/material";

export function DashboardHeaderUserMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}
