import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import EnteringEmail from "./enteringEmail/EnteringEmail";
import EnteringPassword from "./enteringPassword/EnteringPassword";
import Verification from "./verification/Verification";


function SignUP(props) {
  const userDataRegistration = useSelector(state => state.user.userDataForRegistration);
  let renderElem;

  switch (userDataRegistration.statusRegistration) {
    case 'email':
      renderElem = <EnteringEmail />;
      break
    case 'password':
      renderElem = <EnteringPassword />;
      break
    case 'verification':
      renderElem = <Verification />;
      break
    default: renderElem = <EnteringEmail />;
  }

  return (
    <div className="signup">
      {renderElem}
    </div>
  );
}

export default SignUP;
