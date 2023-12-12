import { Badge, IconButton, Menu } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/shoppingCart";
import React from "react";
import { useNavigate } from "react-router-dom";

export function CartIcon() {
  const navigate = useNavigate();

  return (
    <>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <ShoppingCartIcon onClick={() => navigate("/cart")} />
        </Badge>
      </IconButton>
    </>
  );
}
