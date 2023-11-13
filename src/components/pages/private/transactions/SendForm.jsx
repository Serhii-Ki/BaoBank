import React, { useEffect, useState } from "react";
import useService from "../../../../services/requests";
import { useSelector, useDispatch } from "react-redux";
import { getUsersData } from "../../../../store/actions/actions";
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
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ModalWindow from "../../../designComponents/ModalWindow";

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
  const location = useLocation();
  const usersData = useSelector((state) => state.user.usersData);
  const userData = useSelector((state) => state.user.userData);
  const {
    GET_USERS: getUsers,
    POST_TRANSACTION: transaction,
    PUT_CHANGE_DATA: changeBalance,
    process,
    setProcess,
  } = useService();

  const [openModal, setOpenModal] = useState(false);
  const [enough, setEnough] = useState(true);

  const [formData, setFormData] = useState({
    amount: "",
    userName: "",
    userId:'',
    userAvatar: "",
  });

  let navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get('userId');
    const userName = queryParams.get('userName');

    if (userName && userId) {
      setFormData((prevState) => ({
        ...prevState,
        userName: userName,
        userId:userId,
      }));

    } else {
    
      getUsers(formData)
        .then((data) => {
          dispatch(getUsersData(data));
        })
        .then(() => setProcess('confirmed'));
    }
  }, []);

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

  // const handleSubmit = () => {
  //   setEnough(true);
  //   transaction(formData).then(() => {
  //     changeBalance({ balance: userData.balance - formData.amount }).then(
  //       () => {
  //         navigate("/transaction");
  //       }
  //     );
  //   });
  // };

  const handleSubmit = async () => {
    try {
      setEnough(true);

      await transaction(formData);

      const updatedBalance = userData.balance - formData.amount;
      await changeBalance({ balance: updatedBalance });

      navigate("/transaction");
    } catch (error) {
      console.error("Ошибка при выполнении транзакции:", error);
    }
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
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
        {enough ? null : (
          <Typography
            id="modal-modal-option"
            variant="h8"
            sx={{
              margin: "10px 0",
              color: "red",
              textAlign: "center",
            }}
            component="h2"
          >
            У Вас недостаточно средств на счету
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          style={customBtnStyles}
          onClick={() => {
            if (userData.balance >= formData.amount) {
              openModalHandler();
            } else {
              setEnough(false);
            }
          }}
        >
          Отправить
        </Button>
      </form>
      {openModal && (
        <ModalWindow
          open={openModal}
          onClose={closeModalHandler}
          secondText={""}
          mainText={"You confirm the transfer?"}
          firstBtnText={"Yes"}
          secondBtnText={"No"}
          firstBtnClick={() => {
            handleSubmit();
            closeModalHandler();
          }}
          secondBtnClick={closeModalHandler}
          title="Your Modal Title"
        />
      )}
    </Container>
  );
};

export default SendForm;
