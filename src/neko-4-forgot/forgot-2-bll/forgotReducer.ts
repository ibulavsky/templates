import {forgotInitialState} from "./forgotInitialState";
import {IForgotActions} from "./forgotActions";
import {REGISTER_ERROR} from "../../neko-3-register/register-2-bll/registerReducer";

export const FORGOT_MAIL_ERROR = 'REGISTER/FORGOT-MAIL-ERROR';


export const forgotReducer = (state = forgotInitialState, action: IForgotActions) => {
    switch (action.type) {
        case FORGOT_MAIL_ERROR :
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        default: {
            return state;
        }
    }
};
