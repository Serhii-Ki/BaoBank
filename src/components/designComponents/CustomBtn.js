import { Button, Typography } from "@mui/material";
import React from "react";

const customBtnStyles = {
  primary: {
    backgroundColor: "#272643",
    color: "white",
    borderRadius: "20px",
    padding: "10px 25px",
    minWidth: '100px',
  },
  secondary: {
    backgroundColor: "white",
    color: "#272643",
    borderRadius: "20px",
    padding: "10px 25px",
    minWidth: '100px',
    border: '1px solid #272643',
  },
};

const CustomBtn = ({ text, onClick, icon = null, disabled = false, variant = 'primary' }) => {
  return (
    <Button
      style={customBtnStyles[variant]}
      startIcon={icon}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography>{text}</Typography>
    </Button>
  );
};

export default CustomBtn;
