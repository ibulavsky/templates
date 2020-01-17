import {nekoInitialState} from "./nekoInitialState";
import {INekoActions} from "./nekoActions";

export const nekoReducer = (state = nekoInitialState, action: INekoActions) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};
