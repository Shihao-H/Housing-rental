import {appConstants} from "../constants/constant";


export const trReducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.TOUR_RESERVATION:
            return null;
        case appConstants.GET_TOUR_RESERVATION:
            return action.payload.data;
        default:
            return state;
    }
};
