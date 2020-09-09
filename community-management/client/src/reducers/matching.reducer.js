import {appConstants} from "../constants/constant";


export const matchingReducer = (state = null, action) => {
    switch(action.type) {
        case appConstants.MATCHING:
            return action.payload.data;
        default:
            return state;
    }
};

