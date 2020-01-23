import {nekoInitialState} from "./nekoInitialState";
import {IProfileActions} from "./nekoActions";

export const nekoReducer = (state = nekoInitialState, action: IProfileActions) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};
