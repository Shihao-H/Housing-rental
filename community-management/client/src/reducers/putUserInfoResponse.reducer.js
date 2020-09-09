import {appConstants} from "../constants/constant";


export const putUserInfoResponse = (state = null, action) => {
    switch(action.type) {
        case appConstants.PUT_USER_INFO:
            return action.payload.data.success ? action.payload.data.success : null;
        default:
            return state;
    }
}
