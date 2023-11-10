// TransactionListItem.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const TransactionListItem = ({ transaction }) => {
    let navigate = useNavigate();

    const handleClick = () => {
      navigate(`/transactions/${transaction.id}`);
    };
  return (
    <ListItem sx={{ bgcolor: 'background.paper', my: 1, borderRadius: '4px' }} button onClick={handleClick}>
      <ListItemAvatar>
        <Avatar>
          {transaction.type === 'send' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={transaction.name} secondary={transaction.date} />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body1" sx={{ color: transaction.amount.startsWith('-') ? 'error.main' : 'success.main', mr: 1 }}>
          {transaction.amount}
        </Typography>
        {transaction.type !== 'send' ? <ArrowDownwardIcon sx={{ color: '#272643' }} /> : <ArrowUpwardIcon sx={{ color: 'white', bgcolor: '#272643', borderRadius: '50%' }} />}
      </Box>
    </ListItem>
  );
};

export default TransactionListItem;
