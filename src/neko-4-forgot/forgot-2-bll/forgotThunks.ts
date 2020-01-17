import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {forgotMailError, IForgotActions} from "./forgotActions";
import {ForgotAPI} from "../forgot-3-dal/ForgotAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const forgot = (email: string): ThunkAction<Return, IAppStore, ExtraArgument, IForgotActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IForgotActions>, getStore: IGetStore) => {
        const response = await ForgotAPI.sendMessageMail(email);
        console.log(response.data);
        // dispatch(forgotMailError('Сервак не работает'))
    };
