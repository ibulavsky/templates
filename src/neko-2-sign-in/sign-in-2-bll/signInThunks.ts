import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {ISignInActions, loginError, loginSuccess, toogleIsFetching} from "./signInActions";
import {INekoActions} from "../../neko-6-neko/neko-2-bll/nekoActions";
import {localStorageAPI, SignInAPI} from "../sign-in-3-dal/SignInAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const signIn = (): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | INekoActions>, getStore: IGetStore) => {

    };

export const loginThunk = (email: string, password: string, rememberMe: boolean): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | INekoActions>, getStore: IGetStore) => {
        debugger
        try {
            dispatch(toogleIsFetching(true));
            const response = await SignInAPI.login(email, password, rememberMe);
            dispatch(toogleIsFetching(false));
            if (response.data.error) {
                dispatch(loginError(response.data.error))
            } else {
                dispatch(loginSuccess(response.data));
                await localStorageAPI.saveToken(response.data.token)
            }
        } catch (e) {
            dispatch(toogleIsFetching(false))
            dispatch(loginError(e.message))
        }
    };


export const getUser = (): ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | INekoActions>, getStore: IGetStore) => {
        const token = await localStorageAPI.loadToken();
        const response = await SignInAPI.me(token);
        if (response.data.error) {
            dispatch(loginError(response.data.error))
        } else {
            dispatch(loginSuccess(response.data));
            await localStorageAPI.saveToken(response.data.token)
        }
    };
