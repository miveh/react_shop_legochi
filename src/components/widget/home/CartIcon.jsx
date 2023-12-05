import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/shoppingCart";
import React from "react";

export function CartIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      ></Menu>
    </>
  );
}
