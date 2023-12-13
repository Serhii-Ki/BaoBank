// TransactionListItem.jsx
import React, { useEffect, useState } from "react";
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

const TransactionListItem = ({ transaction }) => {
  const userData = useSelector((state) => state.user.userData);
  let navigate = useNavigate();

  const tradingCode = transaction.tradingCode;

  const handleClick = () => {
    navigate(`/transactions/transactionId?tradingCode=${tradingCode}`);
  };
  function formatAmount(amount) {
    if (amount.length > 5) {
        return amount.substring(0, 4) + "...";
    }
    return amount;
}

const formattedAmount = formatAmount(transaction.amount.toString());
  return (
		<ListItem
			sx={{ bgcolor: 'background.paper', my: 1, borderRadius: '4px' }}
			button
			onClick={handleClick}
		>
			<ListItemAvatar>
				<Avatar
					src={transaction.userAvatar}
					sx={{
						border: '2px solid black',
						height: '60px',
						width: '60px',
						marginRight: '10px',
					}}
				></Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={
					transaction.userName === userData.username
						? 'Пополнение счета'
						: transaction.userName && transaction.userName.length > 12 && window.innerWidth < 576
						? transaction.userName.slice(0, 12) + '...'
						: transaction.userName
				}
				secondary={transaction.trDate}
			/>
			<Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
				<Typography
					variant='body1'
					color={'white'}
					sx={{
						bgcolor:
							transaction.trType === 'out' ? 'error.main' : 'success.main',
						borderRadius: '4px',
						padding: '2px',

						mr: 1,
					}}
				>
					{' '}
					{transaction.trType === 'out'
						? `$ ${formattedAmount}`
						: `$ ${formattedAmount}`}
				</Typography>
				{transaction.trType !== 'out' ? (
					<ArrowDownwardIcon sx={{ color: '#272643' }} />
				) : (
					<ArrowUpwardIcon
						sx={{ color: 'white', bgcolor: '#272643', borderRadius: '50%' }}
					/>
				)}
			</Box>
		</ListItem>
	)
};

export default TransactionListItem;
