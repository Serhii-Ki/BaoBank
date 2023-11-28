import React from "react";
import { useNavigate } from "react-router-dom";
import useService from "../../../../services/requests";
import { useState } from "react";
import {
  Container,
  TextField,
  Button,

} from "@mui/material";

import CustomAppBar from "../../../designComponents/CustomAppBar";

const customBtnStyles = {
  backgroundColor: "#272643",
  color: "white",
  borderRadius: "20px",
  padding: "10px 25px",
  minWidth: "100px",
  marginTop: "10px",
};

function Profile() {
  const { PUT_CHANGE_DATA: changeUserData } = useService();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    avatar: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    changeUserData(formData).then((data) => {
      handleBack();
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="sm">
      <CustomAppBar text={"Come back"} onClick={handleBack} />
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Новый никнейм"
          variant="outlined"
          margin="normal"
          name="username"
          type="text"
          value={formData.userName}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          fullWidth
          label="Новый аватар"
          variant="outlined"
          margin="normal"
          name="avatar"
          type="text"
          value={formData.userAvatar}
          onChange={(e) => handleChange(e)}
        />

        <Button
          fullWidth
          variant="contained"
          style={customBtnStyles}
          type="submit"
        >
          изменить
        </Button>
      </form>
    </Container>
  );
}

export default Profile;
