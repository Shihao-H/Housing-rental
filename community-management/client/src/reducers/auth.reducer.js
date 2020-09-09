import {appConstants} from "../constants/constant";


export const authReducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.LOGIN:
            return action.payload.success ? action.payload : null;
        case appConstants.LOGOUT:
            // // TODO: need to check if user is logged out from backend
            // return null;
            return action.payload.success ? action.payload : null;
        default:
            return state;
    }
};
