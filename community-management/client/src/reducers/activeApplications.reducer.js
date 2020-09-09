import {appConstants} from "../constants/constant";



export const activeApplicationsReducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.GET_ACTIVE_APPS:
            return action.payload.data;
        default:
            return state;
    }
}
