import axios from 'axios';
import {baseURL} from "../../base-url";

const instance = axios.create({
    baseURL
});

export const ForgotAPI = {
    sendMessageMail(email: string) {
        return instance.post(`auth/forgot`, {email})
    },
};
