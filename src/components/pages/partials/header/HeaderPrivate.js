import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../../../store/actions/actions";
import useService from "../../../../services/requests";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Popover,
  Badge,
} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";

import "./header.scss";

function HeaderPrivate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { GET_USER_DATA: getUser, setProcess } = useService();
  const userData = useSelector((state) => state.user.userData);

  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState(
    userData.notifications || []
  );
  const [userTransactions, setUserTransactions] = useState(
    userData.transaction || []
  );
  const [notificationCount, setNotificationCount] = useState(
    notifications.length
  );

  useEffect(() => {
    setNotifications(userData.notifications || []);
    setUserTransactions(userData.transaction || []);
    setNotificationCount((userData.notifications || []).length);
  }, [userData.notifications, userData.transaction]);

  useEffect(() => {
    getMyData();
    // eslint-disable-next-line
  }, []);

  const getMyData = async () => {
    const data = await getUser();
    dispatch(getUserData(data));
    setProcess("confirmed");
  };

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorEl(null);
  };

  const handleTransactionClick = ( code) => {
  
    

    const updatedNotifications = notifications.filter(notification => notification.code !== code);
    setNotifications(updatedNotifications);
    navigate("/transaction-details");
};

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const transactionData = userTransactions.filter(
    (transaction) => transaction.username === userData.username
  );


console.log(userData)
  return (
    <AppBar position="static" sx={{ mb: 4, backgroundColor: "#272643" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Avatar
            src={
              userData.avatar && userData.avatar !== "any"
                ? userData.avatar
                : "https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
            }
            alt={userData.username}
            sx={{ width: 40, height: 40 }}
          />
          <Typography variant="h6">{userData.username}</Typography>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <IconButton color="inherit" onClick={handleNotificationClick}>
            <Badge badgeContent={notificationCount} color="error">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={() => navigate("/")}>
            <PowerSettingsNewOutlinedIcon />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleNotificationClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <List>
              {notifications.length > 0 ? (
                notifications.map((transaction, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => handleTransactionClick( transaction.tradingCode)}
                  >
                    <ListItemText
                      primary={`Transaction from ${transaction.userName}`}
                    />
                  </ListItem>
                ))
              ) : (
                <ListItem>
                  <ListItemText primary="No new notifications" />
                </ListItem>
              )}
            </List>
          </Popover>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderPrivate;
