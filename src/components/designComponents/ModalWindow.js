import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import CustomBtn from "./CustomBtn";

const style = {
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  minHeight: 200,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
};

const ModalWindow = ({
  open,
  handleClose,
  mainText,
  secondText,
  firstBtnText,
  secondBtnText,
  firstBtnClick,
  secondBtnClick,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {mainText}
        </Typography>
        <Typography
          id="modal-modal-option"
          variant="h8"
          sx={{ color: "grey" }}
          component="h2"
        >
          {secondText}
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-around",
            marginTop:'30px'
          }}
        >
          {secondBtnText && (
            <CustomBtn
              onClick={secondBtnClick}
              text={secondBtnText}
              variant="secondary"
            />
          )}
          {firstBtnText && (
            <CustomBtn
              onClick={firstBtnClick}
              text={firstBtnText}
              variant="primary"
            />
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
