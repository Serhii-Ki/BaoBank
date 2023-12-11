import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useService from '../../../../services/requests';
import Spinner from '../../partials/spinner/Spinner';
import CustomAppBar from '../../../designComponents/CustomAppBar';
import ModalWindow from '../../../designComponents/ModalWindow.js';

import { Grid, Container } from '@mui/material';
import {
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Typography,
	Box,
} from '@mui/material';

const Notification = () => {
	const navigate = useNavigate();

	const userData = useSelector(state => state.user.userData);
    const transactions = userData.transactions;

    const { process, setProcess } = useService();

    const [openModal, setOpenModal] = useState(false);

     useEffect(() => {
        if (userData._id) {
			setProcess('confirmed');
		}
        // eslint-disable-next-line
	}, [userData]);


    const openModalHandler = (data) => {
		setOpenModal(true);
	};

    const closeModalHandler = () => {
        setOpenModal(false);
    };

    console.log('My transaction',transactions);
  return (
		<Container>
			<CustomAppBar text={'Requests'} onClick={() => navigate('/dashboard')} />

			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
			>
				<Grid container direction='column'>
					{process === 'confirmed' ? (
						transactions
							.filter(transaction => transaction.trType === 'request')
							.reverse()
							.map((transaction, index) => (
								<Grid
									item
									key={index}
									onClick={() => {
										openModalHandler();
									}}
								>
									<ListItem
										sx={{
											bgcolor: 'background.paper',
											my: 1,
											borderRadius: '4px',
										}}
										button
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
												transaction.userName &&
												transaction.userName.length > 12 &&
												window.innerWidth < 576
													? transaction.userName.slice(0, 12) + '...'
													: transaction.userName
											}
											secondary={transaction.trDate}
										/>
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												marginBottom: '20px',
											}}
										>
											<Typography
												variant='body1'
												color={'white'}
												sx={{
													bgcolor: 'orange',
													borderRadius: '4px',
													padding: '2px',

													mr: 1,
												}}
											>
												{' '}
												{transaction.trType === 'out'
													? `$ ${transaction.amount}`
													: `$ ${transaction.amount}`}
											</Typography>
										</Box>
									</ListItem>
								</Grid>
							))
					) : (
						<Spinner />
					)}
				</Grid>
			</Grid>
			{openModal && (
				<ModalWindow
					open={openModal}
					onClose={closeModalHandler}
					secondText={''}
					mainText={'You confirm the transfer?'}
					firstBtnText={'Confirm'}
					secondBtnText={'Cancel'}
					firstBtnClick={() => {
						closeModalHandler()
					}}
					secondBtnClick={() => {
						closeModalHandler()
					}}
					title='Your Modal Title'
				/>
			)}
		</Container>
	)
}

export default Notification
