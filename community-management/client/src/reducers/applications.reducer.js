import {appConstants} from "../constants/constant";


export const applicationsReducer = (state = null, action) => {

    switch(action.type){
        case appConstants.GET_APPS:
            return action.payload.data;
        default:
            return state;

    }

}