export const LOGIN_SUCCESS = "REGISTER-LOGIN-RESPONSE/SING-IN/LOGIN-SUCCESS";
export const LOGIN_ERROR = "REGISTER-LOGIN-RESPONSE/SING-IN/LOGIN_ERROR";
export const TOGGLE_IS_FETCHING = "REGISTER-LOGIN-RESPONSE/SING-IN/TOGGLE_IS_FETCHING";

interface IObjResponse {
    name: string
    token: string
    error: undefined
}

interface ILoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    obj: IObjResponse
}

interface ILoginErrorAction {
    type: typeof LOGIN_ERROR;
    error: string
}

interface IToggleIsFetchingAction {
    type: typeof TOGGLE_IS_FETCHING;
    isFetching: boolean
}

export type ISignInActions = ILoginSuccessAction | ILoginErrorAction | IToggleIsFetchingAction ;

export const loginSuccess = (obj: IObjResponse) => {
    return {
        type: LOGIN_SUCCESS, obj
    }
};

export const loginError = (error: string) => {
    return {
        type: LOGIN_ERROR, error
    }
};
export const toogleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
};
