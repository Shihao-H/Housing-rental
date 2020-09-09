import {appConstants} from "../constants/constant";


export const response4Reducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.ISSUE_BILL:
            return action.payload.data.success ? action.payload.data.success : null;
        default:
            return state;
    }
}
