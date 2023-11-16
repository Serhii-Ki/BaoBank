export const getUserData = (data) => ({
    type: 'GET_USER',
    userData: data
});
export const getUsersData = (data) => ({
    type: 'GET_USERS',
    usersData: data
});
export const sentTransaction = () => ({
    type: 'SENT_TRANSACTION'
});

//registration
export const enterEmail = (data) => ({
    type: 'ENTER_EMAIL',
    email: data
});
export const enterPassword = (data) => ({
    type: 'ENTER_PASSWORD',
    password: data
});
export const enterConfirmPassword = (data) => ({
    type: 'ENTER_CONFIRM_PASSWORD',
    confirm_password: data
});
export const allData = () => ({
    type: 'OK'
});
export const notAllData = () => ({
    type: 'NOT'
});
export const isCheckbox = () => ({
    type: 'CHECKED',
});
export const isEmail = () => ({
    type: 'EMAIL_READY',
});
export const isPassword = () => ({
    type: 'PASSWORD_READY',
});
export const notPassword = () => ({
    type: 'PASSWORD_NOT',
});
export const goPassword = () => ({
    type: 'GO_PASSWORD',
});
export const goEmail = () => ({
    type: 'GO_EMAIL',
});
export const goVerification = () => ({
    type: 'GO_VERIFICATION',
});
export const enterVerificationCode = (data) => ({
    type: 'ENTER_VERIFICATION_CODE',
    code: data
});
export const successVerificationCode = () => ({
    type: 'SUCCESS_VERIFICATION_CODE'
});
export const notSuccessVerificationCode = () => ({
    type: 'NOT_SUCCESS_VERIFICATION_CODE'
});
export const userNotRegistration = () => ({
    type: 'USER_NOT_REGISTRATION'
});
//SIGNIN
export const userNotSignin = () => ({
    type: 'USER_NOT_SIGNIN'
});

//Dashboard actions
export const showUserBalance = () => ({
    type: 'SWITCHING'
});