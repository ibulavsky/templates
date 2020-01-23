import axios from 'axios';
import {baseURL} from "../../base-url";

const instance = axios.create({
    baseURL
});

export interface IGetMeData {
    name: string;
    token: string;
    error: string;
}

export const ProfileAPI = {
    getMe: async (token: string) => {
        const response = await instance.post<IGetMeData>('/auth/me', {token});
        return response.data;
    },
};
