import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const TransactionItem = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const transactionDetails = {
    fund: "APAY Wallet",
    transactionFee: "Free",
    tradingCode: "533578",
    time: "12:43, Feb 12/2020",
    supplier: "City Electricity",
    customerCode: "CEA 2543212345",
    customer: "Alex",
    address: "424 North Carolina Ave.",
    paymentCycle: "February",
    amountOfMoney: "$ 535",
    total: "$ 535",
  };

  return (
    <Container>
      <AppBar position="static"  sx={{ backgroundColor: '#272643' , marginTop:'20px' , marginBottom:"10px"}}>
        <Toolbar>
          <IconButton
            edge="start"
            color='inherit'
            aria-label="back"
            onClick={handleBack}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Transaction details
          </Typography>
        </Toolbar>
      </AppBar>

      <Box my={2}>
        <Paper variant="outlined" sx={{ mb: 2, p: 2 }}>
          <Typography variant="h6" color="#272643" gutterBottom>
            City Electricity A
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Feb 12, 2020
          </Typography>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "success.main",
            }}
          >
            <CheckCircleIcon sx={{ mr: 1 }} /> $ 400.00
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Transaction Status: Successful
          </Typography>
        </Paper>

        <List component="nav" aria-label="transaction details">
          {Object.entries(transactionDetails).map(([key, value]) => (
            <ListItem key={key} divider>
              <ListItemText
                primary={key.replace(/([A-Z])/g, " $1").trim()}
                secondary={value}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default TransactionItem;
