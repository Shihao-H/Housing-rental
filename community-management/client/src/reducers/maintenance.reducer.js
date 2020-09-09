import {appConstants} from "../constants/constant";


export const maintenanceReducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.MAINTENANCE:
            return null;
        case appConstants.GET_MAINTENANCE:
            return action.payload.data;
        default:
            return state;
    }
};
