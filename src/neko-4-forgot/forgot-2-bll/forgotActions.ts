import {FORGOT_MAIL_ERROR} from "./forgotReducer";

interface ISomeAction {
    type: typeof FORGOT_MAIL_ERROR,
    errorMessage: string
}

export type IForgotActions = ISomeAction;

export const forgotMailError = (errorMessage: string) => {
    return {
        type: FORGOT_MAIL_ERROR, errorMessage
    }
};