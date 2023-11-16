// TransactionListItem.jsx
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Height } from "@mui/icons-material";

const TransactionListItem = ({ transaction }) => {
  const userData = useSelector((state) => state.user.userData);
  let navigate = useNavigate();
  const tradingCode = transaction.tradingCode;
  const handleClick = () => {
    navigate(`/transactions/transactionId?tradingCode=${tradingCode}`);
  };
  console.log("My new data", userData);
  return (
    <ListItem
      sx={{ bgcolor: "background.paper", my: 1, borderRadius: "4px" }}
      button
      onClick={handleClick}
    >
      <ListItemAvatar>
        <Avatar
          src={transaction.userAvatar}
          sx={{ border: "2px solid black", height: '60px', width: '60px', marginRight: '10px'}}
        ></Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          transaction.userName === userData.username
            ? "Пополнение счета"
            : transaction.userName
        }
        secondary={transaction.trDate}
      />
      <Box sx={{ display: "flex", alignItems: "center", marginBottom:'20px'}}>
        <Typography
          variant="body1"
          color={'white'}
          sx={{
            bgcolor: transaction.trType === "out" ? "error.main" : "success.main",
            borderRadius:'4px',
            padding:'2px',
            mr: 1,
          }}
          // sx={{
          //   color: transaction.trType === "out" ? "error.main" : "success.main",

          //   mr: 1,
          // }}
        >
         {" "}
          {transaction.trType === "out"
            ? `$ ${transaction.amount}`
            : `$ ${transaction.amount}`}
        </Typography>
        {transaction.trType !== "out" ? (
          <ArrowDownwardIcon sx={{ color: "#272643" }} />
        ) : (
          <ArrowUpwardIcon
            sx={{ color: "white", bgcolor: "#272643", borderRadius: "50%" }}
          />
        )}
      </Box>
    </ListItem>
  );
};

export default TransactionListItem;
