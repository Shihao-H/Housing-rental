import {appConstants} from "../constants/constant";


export const userInfosReducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.GET_USER_INFOS:
            return action.payload.data;
        default:
            return state;
    }
};
