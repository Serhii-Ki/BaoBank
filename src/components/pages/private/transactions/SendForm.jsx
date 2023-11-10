import React, { useState } from "react";
import { Container, TextField, Button, Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const customBtnStyles = {
  backgroundColor: "#272643",
  color: "white",
  borderRadius: "20px",
  padding: "10px 25px",
  minWidth: "100px",
  marginTop:'10px'
};
const SendForm = () => {
  const [formData, setFormData] = useState({
    amount: "",
    userName: "",
    userAvatar: "",
    trDate: new Date().toISOString().slice(0, 16),
    trType: "",
  });
  let navigate = useNavigate();
  const wrongSymbols = ["e", "E", "-", "+", ".", ","];
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь будет код для отправки данных на сервер
    console.log(formData);
  };
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="sm">
      <AppBar position="static"  sx={{ backgroundColor: '#272643' , marginTop:'20px' , marginBottom:"10px"}}>
        <Toolbar>
          <IconButton
            edge="start"
            color='inherit'
            aria-label="back"
            onClick={handleBack}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Отправить
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

        <TextField
          fullWidth
          label="Имя пользователя"
          variant="outlined"
          margin="normal"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Ссылка на аватар"
          variant="outlined"
          margin="normal"
          name="userAvatar"
          value={formData.userAvatar}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Дата и время транзакции"
          variant="outlined"
          margin="normal"
          name="trDate"
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ readOnly: true }}
          value={formData.trDate}
          onChange={handleChange}
        />

        <Button
          fullWidth
          variant="contained"
          style={customBtnStyles}
          type="submit"
        >
          Отправить данные
        </Button>
      </form>
    </Container>
  );
};

export default SendForm;
