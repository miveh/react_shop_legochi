import { TextField } from "@mui/material";
import React from "react";
import { Field } from "formik";

export function CustomeTextField({ id, label, name, autoComplete, ...rest }) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      {...rest}
    />
  );
}
