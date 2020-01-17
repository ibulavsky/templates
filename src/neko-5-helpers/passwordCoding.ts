export const passwordCoding = (password: string) => {
//Собственно шифруем строку
    let codedPassword = '';
    for (let i = 0; i < password.length; i++) {
        let c = password.charAt(i);
        let com = c.charCodeAt(0) ^ (1 + (password.length - i) % 32);
        c = String.fromCharCode(com);
        codedPassword += c;
    }
    return codedPassword;
};
