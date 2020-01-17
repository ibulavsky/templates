export const emailValidate = (email: string) => {
    const isEmailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    return isEmailValid ? '' : 'Email is invalid.';
};

const passwordLengthValidate = (password: string) => {
    const isPasswordValid = password.length >= 8;
    return isPasswordValid ? '' : '\nPassword must be 8 or more symbols.';
};

const passwordEqualityValidate = (passwordFirst: string, passwordSecond: string) => {
    const isPasswordValid = passwordFirst === passwordSecond;
    return isPasswordValid ? '' : '\nPassword do not match.';
};
export const registerValidate = (email: string, passwordFirst: string, passwordSecond: string) => {
    return  emailValidate(email) + passwordLengthValidate(passwordFirst) + passwordEqualityValidate(passwordFirst, passwordSecond);
};
export const loginValidate = (email: string, password: string,) => {
    // return error message '' or 'error email'
    return emailValidate(email) + passwordLengthValidate(password);
};
