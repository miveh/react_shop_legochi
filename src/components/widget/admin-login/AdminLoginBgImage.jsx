import React from "react";
import { Grid } from "@mui/material";

export function AdminLoginBgImage() {
  return (
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      lg={8}
      sx={{
        backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
        backgroundRepeat: "no-repeat",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[50]
            : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
