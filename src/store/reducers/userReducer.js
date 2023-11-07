import { action } from "mobx";

const initialState = {
    userDataForRegistration: {
        email: '',
        password: '',
        confirm_password: '',
        allData: false,
        checkbox: false,
        isEmailReady: false,
        isPasswordReady: false,
        statusRegistration: 'email',
        verificationCodeUser: '',
        verificationCode: '111111',
        isVerification: false,
        isUserRegistration: false
    },
};

const userReducer = (state = initialState, actions) => {
    // Registration
    switch (actions.type) {
        case 'ENTER_EMAIL':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    email: actions.email
                }
            };
        case 'ENTER_PASSWORD':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    password: actions.password
                }
            };
        case 'ENTER_CONFIRM_PASSWORD':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    confirm_password: actions.confirm_password
                }
            };
        case 'OK':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    allData: true
                }
            };
        case 'NOT':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    allData: false
                }
            };
        case 'CHECKED':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    checkbox: !state.userDataForRegistration.checkbox
                }
            };
        case 'EMAIL_READY':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    isEmailReady: true
                }
            };
        case 'PASSWORD_READY':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    isPasswordReady: true
                }
            };
        case 'PASSWORD_NOT':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    isPasswordReady: false
                }
            };
        case 'GO_VERIFICATION':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    statusRegistration: 'verification'
                }
            };
        case 'GO_EMAIL':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    statusRegistration: 'email'
                }
            };
        case 'GO_PASSWORD':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    statusRegistration: 'password'
                }
            };
        case 'ENTER_VERIFICATION_CODE':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    verificationCodeUser: actions.code
                }
            };
        case 'SUCCESS_VERIFICATION_CODE':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    isVerification: true
                }
            };
        case 'NOT_SUCCESS_VERIFICATION_CODE':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    isVerification: false
                }
            };
        case 'USER_NOT_REGISTRATION':
            return {
                ...state,
                userDataForRegistration: {
                    ...state.userDataForRegistration,
                    isUserRegistration: true
                }
            };
        default:
            return state;
    }
};

export default userReducer;