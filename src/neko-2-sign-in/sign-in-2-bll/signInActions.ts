export const LOGIN_SUCCESS = "REGISTER-LOGIN-RESPONSE/SING-IN/LOGIN-SUCCESS";
export const LOGIN_ERROR = "REGISTER-LOGIN-RESPONSE/SING-IN/LOGIN_ERROR";
export const LOGIN_IS_LOADING = "REGISTER-LOGIN-RESPONSE/SING-IN/LOGIN_IS_LOADING";

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
    type: typeof LOGIN_IS_LOADING;
    isFetching: boolean
}

export type ISignInActions = ILoginSuccessAction | ILoginErrorAction | IToggleIsFetchingAction ;

export const loginSuccess = (obj: IObjResponse): ILoginSuccessAction => {
    return {
        type: LOGIN_SUCCESS, obj
    }
};

export const loginError = (error: string): ILoginErrorAction => {
    return {
        type: LOGIN_ERROR, error
    }
};
export const toogleIsFetching = (isFetching: boolean): IToggleIsFetchingAction => {
    return {
        type: LOGIN_IS_LOADING, isFetching
    }
};
