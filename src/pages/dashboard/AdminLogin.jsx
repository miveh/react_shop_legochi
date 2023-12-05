import * as React from "react";

import theme from "../../theme";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  ThemeProvider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AdminLoginForm } from "../../components/widget/admin-login/AdminLoginForm";

export default function SignInSide() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        {/* image */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          lg={8}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

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
