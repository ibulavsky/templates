import axios from 'axios';
import {baseURL} from "../../base-url";

const instance = axios.create({
    baseURL
});

export const SignInAPI = {
    me(token: string | null) {
        return instance.post(`auth/me`, {token})
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    }
};

export const localStorageAPI = {
    saveToken(token: string) {
        return Promise.resolve(
            localStorage.setItem('token', token)
        )
    },
    loadToken() {
        return Promise.resolve(
            localStorage.getItem('token')
        )
    }
};
