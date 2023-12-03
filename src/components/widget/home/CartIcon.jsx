import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/shoppingCart";
import React from "react";

export function CartIcon() {
  return (
    <>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </>
  );
}
