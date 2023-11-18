import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  List,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Container,
} from "@mui/material";
import TransactionListItem from "../transactions/TransactionListItem";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
function Deposit() {
  let navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  const { avatar, username, balance, transactions } = userData;
 
  const transactionItems =
    transactions && transactions.length ? (
      transactions
        .slice(-3)
        .reverse()
        .map((transaction) => (
          <TransactionListItem key={transaction.id} transaction={transaction} />
        ))
    ) : (
      <Typography>Транзакций нет</Typography>
    );
  const handleBack = () => {
    navigate(-1);
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
           Wallet
          </Typography>
        </Toolbar>
      </AppBar>{" "}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="70vh"
      >
        <Card sx={{ minWidth: 275, textAlign: "center" }}>
          <CardContent>
            <Avatar
              alt="User Avatar"
              src={avatar}
              sx={{ width: 128, height: 128, margin: "auto" }}
            />
            <Typography variant="h5" component="div">
              {username || "Аноним"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Баланс: {balance || "0"} $
            </Typography>
            <List>{transactionItems}</List>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Deposit;
