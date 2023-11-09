// Transactions.jsx
import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import TransactionListItem from "./TransactionListItem";
import CustomBtn from "../../../designComponents/CustomBtn";

const Transactions = () => {
  const transactions = [
    {
      id: 1,
      name: "Yara Khalil",
      date: "Oct 14, 10:24 AM",
      amount: "-$15.00",
      type: "send",
    },
    {
      id: 2,
      name: "Sara Ibrahim",
      date: "Oct 12, 02:13 PM",
      amount: "+$20.50",
      type: "receive",
    },
   
  ];

  
  const handleSend = () => {
    // здесь логика для перехода на форму отправки
  };

  const handleReceive = () => {
    // здесь логика для перехода на форму пополнения
  };

  return (
    <Container>
      <AppBar position="static" elevation={0}  sx={{ backgroundColor: '#272643' , marginBottom:'10px' ,marginTop:'10px'}} >
        <Toolbar sx={{ justifyContent: "center"  }}>
          <Typography variant="h6" color="inherit">
            Транзакции
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item sx={{marginBottom:'5px'}}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <CustomBtn text="Отправить" variant="primary" />
            </Grid>
            <Grid item>
              <CustomBtn text="Принять" variant="secondary" />
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="column">
          {transactions.map((transaction) => (
            <Grid item key={transaction.id}>
              <TransactionListItem transaction={transaction} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Transactions;
