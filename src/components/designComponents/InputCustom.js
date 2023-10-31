import { TextField } from "@mui/material";
import React from "react";

const InputCustom = ({ onChange, placeholder, type, error, validator,defaultValue }) => {
  return (
    <TextField
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      error={error}
      inputProps={validator}
      value={defaultValue}
      fullWidth
    />
  );
};

export default InputCustom;
