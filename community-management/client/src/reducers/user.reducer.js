import {appConstants} from "../constants/constant";


export const userReducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.REGISTER:
            return action.payload.success ? action.payload.user : null;
        case appConstants.CHECK_LOGIN:
            return action.payload.success ? action.payload.user : null;
            // return action.payload.success ? [...state, action.payload.user] : null;

        default:
            return state;
    }
};


