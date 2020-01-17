// export const loginValidate = (email: string, password: string) => {
//     const isEmailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//     const isPasswordValid = password.length >= 6;
//     let errorText;
//     errorText = isEmailValid ? '' : 'Email is invalid.';
//     errorText = errorText + (isPasswordValid ? '' : '\nPassword must be 6 or more symbols.');
//     if (errorText) {
//         setErrorMessage(errorText);
//         return false
//     }
//     setErrorMessage('');
//     return true
// };

export const emailValidate = (email: string) => {
    const isEmailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    return isEmailValid ? '' : 'Email is invalid.';
};

const passwordLengthValidate = (password: string) => {
    const isPasswordValid = password.length >= 6;
    return isPasswordValid ? '' : '\nPassword must be 6 or more symbols.';
};

const passwordEqualityValidate = (passwordFirst: string, passwordSecond: string) => {
    const isPasswordValid = passwordFirst === passwordSecond;
    return isPasswordValid ? '' : '\nPassword do not match.';
};
export const registerValidate = (email: string, passwordFirst: string, passwordSecond: string) => {
    let errorText = emailValidate(email) + passwordLengthValidate(passwordFirst) + passwordEqualityValidate(passwordFirst, passwordSecond);
    return errorText
};
export const loginValidate = (email: string, password: string,) => {
    let errorText = emailValidate(email) + passwordLengthValidate(password);
    // return error message '' or 'error email'
    return errorText;
};

