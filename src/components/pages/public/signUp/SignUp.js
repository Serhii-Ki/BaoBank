import React, { useState } from "react";

import useService from "../../../../services/requests";
import { TextField } from "@mui/material";
import PrimaryBtn from "../../../designComponents/PrimaryBtn";
import SendIcon from "@mui/icons-material/Send";
import InputCustom from "../../../designComponents/InputCustom";

function SignUP(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { POST_REG_USER } = useService();

  const handleDataChange = (e, setData) => {
    setData(e.target.value);
  };

  const onRegistration = () => {
    const formData = {
      username: name,
      password: password,
      confirm_password: confirmPassword,
    };
    POST_REG_USER(formData);
  };
  const handleSubmit = () => {
    console.log("Submit");
  };

  return (
    <div>
      SignUP
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onRegistration();
        }}
      >
        <InputCustom
          placeholder="Name"
          type='text'
          value={name}
          onChange={(e) => {
            handleDataChange(e, setName);
          }}
        />
        <input
          placeholder="Password"
          type="text"
          value={password}
          onChange={(e) => {
            handleDataChange(e, setPassword);
          }}
        />
        <input
          placeholder="Confirm password"
          type="text"
          value={confirmPassword}
          onChange={(e) => {
            handleDataChange(e, setConfirmPassword);
          }}
        />
        <PrimaryBtn disabled={true} text="Submit" onClick={handleSubmit} icon={<SendIcon />} />
        <PrimaryBtn text="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default SignUP;
