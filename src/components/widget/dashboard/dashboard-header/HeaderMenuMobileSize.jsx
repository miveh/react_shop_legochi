import React from "react";
import { MenuItems } from "../../../../constant";
import { Box, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

function HeaderMenuMobileSize() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {MenuItems.map((page) => (
          <MenuItem key={page.id} onClick={handleCloseNavMenu}>
            <Typography
              onClick={() => {
                navigate(page.to);
              }}
              textAlign="center"
            >
              {page.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default HeaderMenuMobileSize;
