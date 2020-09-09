import {appConstants} from "../constants/constant";


export const putAppResponseReducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.PUT_APPLICATION:
            return action.payload.data.success ? action.payload.data.success : null;
        default:
            return state;
    }
}
