import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { goEmail, goPassword, enterVerificationCode, successVerificationCode, isCheckbox } from "../../../../../store/actions/actions";
import PrimaryBtn from "../../../../designComponents/PrimaryBtn";

import "./verification.scss";

function Verification() {
    const dispatch = useDispatch();
    const userDataRegistration = useSelector(state => state.user.userDataForRegistration);

    const [verificationCode1, setVerificationCode1] = useState('');
    const [verificationCode2, setVerificationCode2] = useState('');
    const [verificationCode3, setVerificationCode3] = useState('');
    const [verificationCode4, setVerificationCode4] = useState('');
    const [verificationCode5, setVerificationCode5] = useState('');
    const [verificationCode6, setVerificationCode6] = useState('');

    const handleInputChange = (e, setValue) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        dispatch(enterVerificationCode([...verificationCode1, ...verificationCode2, ...verificationCode3, ...verificationCode4, ...verificationCode5, ...verificationCode6].join('')));
    }, [verificationCode1, verificationCode2, verificationCode3, verificationCode4, verificationCode5, verificationCode6]);

    const confirmCode = () => {
        if (userDataRegistration.verificationCodeUser === userDataRegistration.verificationCode) {
            dispatch(goPassword());
        } else {
            dispatch(successVerificationCode())
        }
    };

    return (
        <div className="verification">
            <h2 className="subtitle verification__title">Enter verification code</h2>
            <p className="verification__text text">Lorem dolor laboriosam ad accusamus reprehenderit recusandae dolorum?</p>
            <div className="verification__input-container">
                <input
                    onChange={(e) => handleInputChange(e, setVerificationCode1)}
                    value={verificationCode1}
                    className="main-input verification__input"
                    type="text"
                    maxLength="1"
                    id="input1"
                />
                <input
                    onChange={(e) => handleInputChange(e, setVerificationCode2)}
                    value={verificationCode2}
                    className="main-input verification__input"
                    type="text"
                    maxLength="1"
                    id="input2"
                />
                <input
                    onChange={(e) => handleInputChange(e, setVerificationCode3)}
                    value={verificationCode3}
                    className="main-input verification__input"
                    type="text"
                    maxLength="1"
                    id="input3"
                />
                <input
                    onChange={(e) => handleInputChange(e, setVerificationCode4)}
                    value={verificationCode4}
                    className="main-input verification__input"
                    type="text"
                    maxLength="1"
                    id="input4"
                />
                <input
                    onChange={(e) => handleInputChange(e, setVerificationCode5)}
                    value={verificationCode5}
                    className="main-input verification__input"
                    type="text"
                    maxLength="1"
                    id="input5"
                />
                <input
                    onChange={(e) => handleInputChange(e, setVerificationCode6)}
                    value={verificationCode6}
                    className="main-input verification__input"
                    type="text"
                    maxLength="1"
                    id="input6"
                />
            </div>
            {userDataRegistration.isVerification ? <p className='verification__error'>Invalid code entered</p> : null}
            <div className="verification__btn">
                <PrimaryBtn onClick={() => confirmCode()} text='next' />
            </div>
            <div className="verification__link" onClick={() => { dispatch(goEmail()); dispatch(isCheckbox()) }}>Change email</div>
        </div>
    );
}

export default Verification;