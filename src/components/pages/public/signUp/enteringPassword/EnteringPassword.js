import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { enterPassword, enterConfirmPassword, isPassword, notPassword, goEmail, isCheckbox, notSuccessVerificationCode, userNotRegistration } from "../../../../../store/actions/actions";
import useService from "../../../../../services/requests";

import PrimaryBtn from "../../../../designComponents/PrimaryBtn";

import "./enteringPassword.scss";

function EnteringPassword() {
    const dispatch = useDispatch();
    const userDataRegistration = useSelector(state => state.user.userDataForRegistration);

    const navigate = useNavigate();

    const userData = {
        username: userDataRegistration.email,
        password: userDataRegistration.password,
        confirm_password: userDataRegistration.confirm_password
    };

    const { POST_REG_USER: registration } = useService();

    useEffect(() => {
        if (userDataRegistration.password.trim() !== '' && userDataRegistration.password.trim().length > 5 && userDataRegistration.password === userDataRegistration.confirm_password) {
            dispatch(isPassword());
        } else {
            dispatch(notPassword());
        }
    }, [userDataRegistration.password, userDataRegistration.confirm_password]);

    const submittedData = (data) => {
        registration(data)
            .then(data => {
                navigate("/signin");
            })
            .catch((error) => {
                dispatch(goEmail());
                dispatch(isCheckbox());
                dispatch(notSuccessVerificationCode());
                dispatch(userNotRegistration());
            })
    }

    return (
        <div className="signup__password">
            <h2 className="signup__password-title subtitle">Create a password</h2>
            <p className="signup__password-text text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ma eum fugiat explicabo,  culpa sunt.</p>
            <input
                placeholder="Your password"
                className="main-input signup__password-input"
                type="password"
                value={userDataRegistration.password}
                onChange={(e) => dispatch(enterPassword(e.target.value))}
            />
            <p className="signup__password-condition">*the password must contain more than 5 characters</p>
            <input
                placeholder="Re-enter password"
                className="main-input signup__password-input"
                type="password"
                value={userDataRegistration.confirm_password}
                onChange={(e) => dispatch(enterConfirmPassword(e.target.value))}
            />
            <div className="signup__password-btn">
                <PrimaryBtn text='ENTER'
                    onClick={userDataRegistration.isPasswordReady ? () => submittedData(userData) : null}
                    opacity={!userDataRegistration.isPasswordReady}
                />
            </div>
        </div>
    );
}

export default EnteringPassword;