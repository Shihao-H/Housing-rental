import {appConstants} from "../constants/constant";


export const response2Reducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.DE_ACTIVATE:
            return action.payload.data.success ? action.payload.data.success : null;

        case appConstants.PUT_APPLICATION3:
            return action.payload.data.success ? action.payload.data.success : null;
        default:
            return state;
    }
}
