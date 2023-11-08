import { useEffect } from "react";
import PrimaryBtn from "../../../../designComponents/PrimaryBtn";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { enterEmail, allData, isCheckbox, notAllData, goVerification } from "../../../../../store/actions/actions";

import "./enteringEmail.scss";


function EnteringEmail() {
    const dispatch = useDispatch();
    const userDataRegistration = useSelector(state => state.user.userDataForRegistration);

    const isValidEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
        return emailRegex.test(email);
    };

    useEffect(() => {
        if (isValidEmail(userDataRegistration.email) && userDataRegistration.checkbox) {
            dispatch(allData());
        } else {
            dispatch(notAllData());
        }
    }, [userDataRegistration.email, userDataRegistration.checkbox]);

    return (
        <div className="signup__email">
            <h2 className="signup__email-title">Enter your Email</h2>
            <p className="signup__email-text text">Lorem ipsum, dolor adipisicing elit. Facilis non deleniti odio, quos aspernatur cum ipsa tenetur in rerum tempora.</p>
            {userDataRegistration.isUserRegistration ? <p className="signup__email-error">This email is already registered</p> : null}
            <input
                className="main-input signup__input"
                type="email"
                placeholder="Enter your email"
                value={userDataRegistration.email}
                onChange={(e) => dispatch(enterEmail(e.target.value))}
            />
            <div className="signup__email-agree">
                <input
                    className="signup__checkbox"
                    type="checkbox"
                    onChange={() => dispatch(isCheckbox())}
                />
                <p className="signup__checkbox-input">I have read and agree to the  <Link className="signup__link-npay" to='/npay'>terms of use</Link> of NPAY</p>
            </div>
            <div className="signup__btn">
                <PrimaryBtn
                    onClick={userDataRegistration.allData ? () => dispatch(goVerification()) : null}
                    opacity={!userDataRegistration.allData}
                    text="next"
                />
            </div>
            <Link className="signup__link" to='/signin'>I have already an account!</Link>
        </div>
    );
}

export default EnteringEmail;