// Transactions.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useService from "../../../../services/requests";
import { getUserData } from "../../../../store/actions/actions";
import Spinner from "../../partials/spinner/Spinner";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Container,
  IconButton,
} from "@mui/material";
import TransactionListItem from "./TransactionListItem";
import CustomBtn from "../../../designComponents/CustomBtn";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Transactions = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const { GET_USER_DATA: getUser, process, setProcess } = useService();

  useEffect(() => {
    onRequest();
    // eslint-disable-next-line
  }, []);

  const onRequest = () => {
    getUser()
      .then((data) => {
        dispatch(getUserData(data));
      })
      .then(() => setProcess("confirmed"));
  };

  console.log(userData);

  // const transactions = [
  //   {
  //     id: 1,
  //     name: "Yara Khalil",
  //     date: "Oct 14, 10:24 AM",
  //     amount: "-$15.00",
  //     type: "send",
  //   },
  //   {
  //     id: 2,
  //     name: "Sara Ibrahim",
  //     date: "Oct 12, 02:13 PM",
  //     amount: "+$20.50",
  //     type: "receive",
  //   },
  // ];

  const handleBack = () => {
    navigate(-1);
  };
  const handleSend = () => {
    navigate("/transactions/sendform");
  };

  const handleReceive = () => {
    // здесь логика для перехода на форму пополнения
  };

  return (
    <Container>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#272643",
          marginBottom: "10px",
          marginTop: "10px",
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
        <Grid item sx={{ marginBottom: "5px" }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <CustomBtn
                text="Отправить"
                variant="primary"
                onClick={handleSend}
              />
            </Grid>
            <Grid item>
              <CustomBtn text="Принять" variant="secondary" />
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="column">
          {process === "confirmed" ? (
            userData.transactions.map((transaction, index) => (
              <Grid item key={index}>
                <TransactionListItem transaction={transaction} />
              </Grid>
            ))
          ) : (
            <Spinner />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Transactions;
