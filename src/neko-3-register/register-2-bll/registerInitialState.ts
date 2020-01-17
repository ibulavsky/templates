export interface IRegisterState {
    success: boolean,
    errorMessage: string,
    isFetching: boolean,
}

export const registerInitialState: IRegisterState = {
    success: false,
    errorMessage: '',
    isFetching: false,
};
