import {REGISTER_ERROR, REGISTER_USER_DATA, TOGGLE_IS_FETCHING} from "./registerReducer";

interface IRegisterUserDataAction {
    type: typeof REGISTER_USER_DATA,
    success: boolean
}

interface IRegisterErrorAction {
    type: typeof REGISTER_ERROR,
    errorMessage: string
}

interface IRegisterIsFetchingAction {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}

export type IRegisterActions = IRegisterUserDataAction | IRegisterErrorAction | IRegisterIsFetchingAction;

export const registerUserData = (success: boolean): IRegisterUserDataAction => {
    return {
        type: REGISTER_USER_DATA,
        success
    }
};

export const registerError = (errorMessage: string): IRegisterErrorAction => {
    return {
        type: REGISTER_ERROR, errorMessage
    }
};
export const toogleIsFetching = (isFetching: boolean): IRegisterIsFetchingAction => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
};

