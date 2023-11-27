// Transactions.jsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useService from "../../../../services/requests";
import Spinner from "../../partials/spinner/Spinner";
import {

  Grid,
  Container,

} from "@mui/material";
import { CircularProgress } from '@mui/material'
import TransactionListItem from "./TransactionListItem";
import CustomBtn from "../../../designComponents/CustomBtn";
import { useNavigate } from "react-router-dom";
import CustomAppBar from "../../../designComponents/CustomAppBar";

const Transactions = () => {
  let navigate = useNavigate();

  const userData = useSelector((state) => state.user.userData);
  const transactions = userData.transactions;
  const { process, setProcess } = useService();

  useEffect(() => {
    if (userData._id) setProcess("confirmed");
    // eslint-disable-next-line
  }, [userData]);

  const handleBack = () => {
    navigate("/dashboard");
  };
  const handleSend = () => {
    navigate("/transactions/sendform");
  };

  const handleReceive = () => {
    navigate("/transactions/upaccount");
  };

  return (
		<Container>
			<CustomAppBar text={'Transactions'} onClick={handleBack} />

			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
			>
				<Grid item sx={{ marginBottom: '5px' }}>
					<Grid container spacing={2} justifyContent='center'>
						<Grid item>
							<CustomBtn
								text='Отправить'
								variant='primary'
								onClick={handleSend}
							/>
						</Grid>
						<Grid item>
							<CustomBtn
								onClick={handleReceive}
								text='Пополнить'
								variant='secondary'
							/>
						</Grid>
					</Grid>
				</Grid>

				<Grid container direction='column'>
					{process === 'confirmed' ? (
						transactions
							.filter(transaction => transaction.trType !== "request")
							.reverse()
							.map((transaction, index) => (
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
	)
};

export default Transactions;

