import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, IconButton, Toolbar, Typography, Avatar } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import useService from "../../services/requests";
import { getUserData } from "../../store/actions/actions";
import logo from "../../assets/footerIcons/logo.png";
import { useNavigate } from "react-router-dom";
const CustomAppBar = ({ onClick, text, sx }) => {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  let navigate = useNavigate()
  const { GET_USER_DATA: getUser, setProcess } = useService();

  useEffect(() => {
    getMyData();
    // eslint-disable-next-line
  }, [userData.transaction]);

  const getMyData = useCallback(() => {
    getUser()
      .then((data) => {
        dispatch(getUserData(data));
      })
      .then(() => {
        setProcess("confirmed");
      });
  }, [getUser, dispatch, setProcess]);
   const handleHome = ()=>{
    navigate('/dashboard')
   }
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#272643",
        marginBottom: "10px",
        marginTop: "10px",
        ...sx,
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
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          {text}
        </Typography>
        <Avatar 
        onClick={handleHome}
        variant="rounded"
        src={logo} // Replace with the path to your image
        sx={{ width: 56, height: 56,}}
      />
      </Toolbar>

    </AppBar>
  );
};

export default CustomAppBar;
