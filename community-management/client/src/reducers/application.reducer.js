import {appConstants} from "../constants/constant";


export const applicationReducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.GET_APPLICATION:
            return action.payload.data;
        default:
            return state;
    }
}
