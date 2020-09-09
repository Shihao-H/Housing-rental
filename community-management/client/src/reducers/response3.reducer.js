import {appConstants} from "../constants/constant";


export const response3Reducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.ISSUE_MONTHLY:
            return action.payload.data.success ? action.payload.data.success : null;
        default:
            return state;
    }
}
