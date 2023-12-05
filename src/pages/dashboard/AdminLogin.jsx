import * as React from "react";

import theme from "../../theme";
import { CssBaseline, Paper, Grid, ThemeProvider } from "@mui/material";
import { AdminLoginBgImage, AdminLoginForm } from "../../components";

export default function SignInSide() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        {/* image */}
        <AdminLoginBgImage />

        {/* form */}
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          lg={4}
          component={Paper}
          elevation={6}
          square
        >
          <AdminLoginForm />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
