import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {IRegisterActions, registerError, registerUserData, toogleIsFetching} from "./registerActions";
import {RegisterAPI} from "../register-3-dal/RegisterAPI";
import {INekoActions} from "../../neko-6-neko/neko-2-bll/nekoActions";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const register = (email: string, passwordFirst: string): ThunkAction<Return, IAppStore, ExtraArgument, IRegisterActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IRegisterActions | INekoActions>, getStore: IGetStore) => {
            dispatch(toogleIsFetching(true));
            const response = await RegisterAPI.getSuccessRegister(email, passwordFirst);
            dispatch(toogleIsFetching(false));
            if (response.data.success) {
                dispatch(registerUserData(response.data.success));
            } else {
                dispatch(registerError(response.data.error))
            }
    };
