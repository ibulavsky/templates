export interface ISignInState {
    isAuth: boolean
    isError: boolean
    isFetching: boolean
    errorMessage: string | undefined
    username: string
}

export const signInInitialState: ISignInState = {
    isAuth: false,
    isError: false,
    errorMessage: '',
    username: '',
    isFetching: false,
};
