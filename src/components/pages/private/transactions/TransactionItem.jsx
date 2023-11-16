import React, { useEffect, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Paper,
  Grid,
  Container,
  Avatar,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const TransactionItem = () => {
  const [transactionData, setTransactionData] = useState({
    address: "",
    amount: "",
    fee: "",
    trDate: "",
    trType: "",
    tradingCode: "",
    userAvatar: "",
    userName: "",
  });
  const userData = useSelector((state) => state.user.userData);
  const navigate = useNavigate();
  const query = useQuery();
  const tradingCode = query.get("tradingCode");

  useEffect(() => {
    if (userData && Array.isArray(userData.transactions)) {
      const transaction = userData.transactions.find(
        (t) => t.tradingCode === Number(tradingCode)
      );
      if (transaction) {
        setTransactionData(transaction);
      }
    }
  }, [userData, tradingCode]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#272643",
          marginTop: "20px",
          marginBottom: "10px",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={handleBack}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Детали транзакции
          </Typography>
        </Toolbar>
      </AppBar>

      <Box my={2}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ padding: 2 }}>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <Avatar sx={{minHeight:'64px' , minWidth:'64px'}} src={transactionData.userAvatar} />
                </Grid>
                <Grid item>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {transactionData.userName}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    {transactionData.trDate}
                  </Typography>
                  <Typography variant="h6" sx={{ my: 2, textAlign: "center", color:'green'}}>
                    ${transactionData.amount}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ padding: 2 }}>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Комиссия за транзакцию:{" "}
                <b>
                  {transactionData.fee === "0"
                    ? "Бесплатно"
                    : transactionData.fee}
                </b>
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Торговый код: <b>{transactionData.tradingCode}</b>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TransactionItem;
