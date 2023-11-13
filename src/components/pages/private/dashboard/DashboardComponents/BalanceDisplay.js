import React from "react";
import { Grid, Typography, IconButton, Box, Link } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PaymentIcon from "@mui/icons-material/Payment";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function WalletComponent({
  showBalance,
  toggleVisibility,
  balance,
  process
}) {
  const setContent = process === 'confirmed' ? balance : 'loading...'

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "-20px",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Grid
        container
        direction="column"
        sx={{
          width: "fit-content",
          border: "1px solid #ddd",
          bgcolor: "white",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <Box>
          {/* Top row with icons and labels in one row */}

          <Grid
            item
            container
            justifyContent="space-around"
            alignItems="center"
            sx={{ padding: 2, marginTop: "15px" }}
          >
            <Grid
              item
              xs={4}
              container
              direction="column"
              alignItems="center"
            >
              <Link
                href="/upaccount"
                underline="none"
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  color: "#272643",
                }}
              >
                <IconButton>
                  <AccountBalanceWalletIcon />
                </IconButton>
                <Typography variant="caption">Deposit</Typography>
              </Link>
            </Grid>
            <Grid
              item
              xs={4}
              container
              direction="column"
              alignItems="center"
            >
              <Link
                href="/withdrawal"
                underline="none"
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  color: "#272643",
                }}
              >
                <IconButton>
                  {" "}
                  <ArrowUpwardIcon />
                </IconButton>
                <Typography variant="caption">Withdrawal</Typography>
              </Link>
            </Grid>
            <Grid
              item
              xs={4}
              container
              direction="column"
              alignItems="center"
            >
              <Link
                href="/scan-code"
                underline="none"
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  color: "#272643",
                }}
              >
                {" "}
                <IconButton>
                  {" "}
                  <QrCodeScannerIcon />
                </IconButton>
                <Typography variant="caption">Scan Code</Typography>
              </Link>
            </Grid>
          </Grid>


          {/* Bottom row with balance information */}

          <Grid
            item
            container
            xs={12}
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: 4, paddingTop: "5px", paddingBottom: "5px" }}
          >
            <Typography variant="subtitle1" sx={{}} component="span">
              Balance in the wallet
            </Typography>
            <IconButton
              size="small"
              onClick={toggleVisibility}
              sx={{ marginRight: "15px" }}
            >
              {!showBalance ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
            <Typography variant="h5" component="span">
              {showBalance ? `$ ${setContent}` : "$******"}
            </Typography>
          </Grid>

        </Box>
      </Grid>
    </Box>
  );
}
