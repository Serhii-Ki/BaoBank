import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  List,
  Box,
  Container,
} from "@mui/material";
import TransactionListItem from "../transactions/TransactionListItem";
import { useNavigate } from "react-router-dom";
import CustomAppBar from "../../../designComponents/CustomAppBar";
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
      <CustomAppBar text={"Wallet"} onClick={handleBack} />
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
