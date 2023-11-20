import React, { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  Grid,
  IconButton,
  Tooltip,
  ClickAwayListener,
  Typography,

  Container,
} from "@mui/material";
import { useSelector } from "react-redux";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import TelegramIcon from "@mui/icons-material/Telegram";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useNavigate } from "react-router-dom";

import CustomAppBar from "../../../designComponents/CustomAppBar";
const QRCodePage = () => {
  const [url, setUrl] = useState("");
  let navigate = useNavigate();
  const [openTooltip, setOpenTooltip] = useState(false);
  const userData = useSelector((state) => state.user.userData);
  const userName = userData.username;
  const userId = userData._id;
  const handleBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    setUrl(
      `${window.location.origin}/transactions/sendform?userId=${userId}&userName=${userName}`
    );
  }, [userName, userId]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(url).then(() => {
      setOpenTooltip(true);
    });
  };

  const handleCloseTooltip = () => {
    setOpenTooltip(false);
  };

  return (
    <Container>
      <CustomAppBar text={"QR Code"} onClick={handleBack} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "60vh" }}
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <QRCodeCanvas onClick={handleCopyClick} value={url} size={256} />
        </Grid>
        <Grid container item xs={12} justifyContent="space-around">
          <IconButton
            sx={{ color: "#272643", fontSize: "48px" }}
            component={WhatsappShareButton}
            url={url}
          >
            <WhatsAppIcon sx={{ color: "#272643", fontSize: "2.5rem" }} />
          </IconButton>
          <IconButton
            sx={{ color: "#272643", fontSize: "48px" }}
            component={FacebookShareButton}
            url={url}
          >
            <FacebookIcon sx={{ color: "#272643", fontSize: "2.5rem" }} />
          </IconButton>
          {/* <IconButton
            sx={{ color: "#272643", fontSize: "48px" }}
            component={TwitterShareButton}
            url={url}
          >
            <TwitterIcon sx={{ color: "#272643", fontSize: "2.5rem" }} />
          </IconButton> */}
          <IconButton component={TelegramShareButton} url={url}>
            <TelegramIcon sx={{ color: "#272643", fontSize: "2.5rem" }} />
          </IconButton>
          <ClickAwayListener onClickAway={handleCloseTooltip}>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleCloseTooltip}
              open={openTooltip}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={<Typography color="white">Скопировано!</Typography>}
            >
              <IconButton onClick={handleCopyClick}>
                <FileCopyIcon sx={{ color: "#272643", fontSize: "2.5rem" }} />
              </IconButton>
            </Tooltip>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </Container>
  );
};

export default QRCodePage;
