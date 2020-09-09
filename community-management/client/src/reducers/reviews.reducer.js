import {appConstants} from "../constants/constant";


export const reviewReducer = (state = null, action) => {

    switch(action.type) {
        case appConstants.GET_REVIEW:
            return action.payload.data;
        default:
            return state;
    }
};
