import {appConstants} from "../constants/constant";


export const euReducer = (state = null, action) => {

    switch(action.type) {
        case appConstants.EMAIL_US:
            return null;
        case appConstants.GET_EMAIL_US:
            return action.payload.data;
        default:
            return state;
    }
};
