import {appConstants} from "../constants/constant";


export const responseReducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.PUT_APPLICATION2:
            return action.payload.data.success ? action.payload.data.success : null;
        case appConstants.ACTIVATE:
            return action.payload.data.success ? action.payload.data.success : null;
        case appConstants.POST_REVIEW:
            return action.payload.data.success ? action.payload.data.success : null;
        default:
            return state;
    }
}


