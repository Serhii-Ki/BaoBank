import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useService from '../../services/requests';
import { getUserData } from '../../store/actions/actions';

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const CustomAppBar = ({onClick,text ,sx}) => {
			const userData = useSelector(state => state.user.userData);
			const dispatch = useDispatch();

			const { GET_USER_DATA: getUser, setProcess, process } = useService();

			useEffect(() => {
				getMyData();
				// eslint-disable-next-line
			}, [userData.transaction]);

			const getMyData = useCallback(() => {
				getUser()
					.then(data => {
						dispatch(getUserData(data))
					})
					.then(() => {
						setProcess('confirmed')
					})
			}, [])

    return (
        <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#272643",
          marginBottom: "10px",
          marginTop: "10px",
          ...sx
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={onClick}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {text}
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default CustomAppBar;
