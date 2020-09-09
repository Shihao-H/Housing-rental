import {appConstants} from "../constants/constant";


export const userPaymentsReducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.GET_PAYMENT_HISTORY:
            return action.payload.data;
        case appConstants.PUT_PAYMENT_HISTORY:
            return null;
        default:
            return state;
    }
};
