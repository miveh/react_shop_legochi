import React from "react";

import {
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CustomeTextField } from "../../../components";
import { Formik, Form, Field } from "formik";
import { LoginSchema } from "../../../utils";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        LEGOCHI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export function AdminLoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (value) => {
    console.log(value);
    navigate("/dashboard/orders");
  };

  return (
    <Box
      sx={{
        mt: 15,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Admin LogIn
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form sx={{ mt: 1 }}>
            <Field name="email">
              {({ field }) => (
                <CustomeTextField
                  {...field}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              )}
            </Field>

            <Field name="password">
              {({ field }) => (
                <CustomeTextField
                  {...field}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              )}
            </Field>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Form>
        )}
      </Formik>
    </Box>
  );
}
