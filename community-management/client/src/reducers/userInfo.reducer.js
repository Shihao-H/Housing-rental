import {appConstants} from "../constants/constant";


export const userInfoReducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.GET_USER_INFO:
            return action.payload.data;
        default:
            return state;
    }
};
