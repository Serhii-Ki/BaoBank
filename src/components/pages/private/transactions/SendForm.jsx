import React, { useEffect, useState } from "react";
import useService from "../../../../services/requests";
import { useSelector, useDispatch } from "react-redux";
import { getUsersData, getUserData } from "../../../../store/actions/actions";
import {
  Container,
  TextField,
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const customBtnStyles = {
  backgroundColor: "#272643",
  color: "white",
  borderRadius: "20px",
  padding: "10px 25px",
  minWidth: "100px",
  marginTop: "10px",
};
const SendForm = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user.usersData);
  const userData = useSelector((state) => state.user.userData);
  const {
    GET_USER_DATA: getUser,
    GET_USERS: getUsers,
    POST_TRANSACTION: transaction,
    PUT_CHANGE_DATA: changeBalance,
    process,
    setProcess,
  } = useService();

  const [formData, setFormData] = useState({
    amount: "",
    userName: "",
    userAvatar: "",
  });

  let navigate = useNavigate();

  useEffect(() => {
    onRequest();
    getMyData();
    // eslint-disable-next-line
  }, []);

  const onRequest = () => {
    getUsers(formData)
      .then((data) => {
        dispatch(getUsersData(data));
      })
      .then(() => setProcess("confirmed"));
  };

  const getMyData = () => {
    getUser().then((data) => {
      dispatch(getUserData(data));
    });
  };
  console.log("My DATA", userData);

  const wrongSymbols = ["e", "E", "-", "+", ".", ","];

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "userName") {
      const selectedUser = usersData.find((user) => user.username === value);

      setFormData((prevState) => ({
        ...prevState,
        userName: value,
        userAvatar: selectedUser ? selectedUser.avatar : "",
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    transaction(formData).then((data) => {
      changeBalance({ balance: userData.balance - formData.amount });
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="sm">
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#272643",
          marginTop: "20px",
          marginBottom: "10px",
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Вернуться
          </Typography>
        </Toolbar>
      </AppBar>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Сумма перевода"
          variant="outlined"
          margin="normal"
          name="amount"
          type="number"
          onKeyDown={(e) => wrongSymbols.includes(e.key) && e.preventDefault()}
          value={formData.amount}
          onChange={handleChange}
        />

        <Select
          placeholder="user name"
          fullWidth
          variant="outlined"
          labelId="select-country-label"
          id="select-country"
          label="Имя пользователя"
          value={formData.userName}
          name="userName"
          required={true}
          onChange={handleChange}
        >
          {process === "confirmed" ? (
            usersData.map((user) => (
              <MenuItem key={user._id} value={user.username}>
                {user.username}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="">Загрузка...</MenuItem>
          )}
        </Select>

        <Button
          fullWidth
          variant="contained"
          style={customBtnStyles}
          type="submit"
        >
          Отправить
        </Button>
      </form>
    </Container>
  );
};

export default SendForm;
