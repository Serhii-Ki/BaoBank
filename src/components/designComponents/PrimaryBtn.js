import { Button, Typography } from "@mui/material";
import React from "react";

const customBtnStyle = {
  backgroundColor: "#272643",
  color: "white",
  borderRadius: "20px",
  padding: "10px 25px",
  opacity: 1,
};

const customBtnStyleWhite = {
  backgroundColor: "white",
  color: "black",
  borderRadius: "20px",
  padding: "10px 25px",
  opacity: 1,
};

const PrimaryBtn = ({ text, onClick, icon = null, disabled = false, dark = true, opacity = false, type = 'button' }) => {
  const btnStyle = dark ? { ...customBtnStyle } : { ...customBtnStyleWhite };

  if (opacity) {
    btnStyle.opacity = 0.5;
  }

  return (
    <Button
      type={type}
      style={btnStyle}
      startIcon={icon}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography>{text}</Typography>
    </Button>
  );
};

export default PrimaryBtn;