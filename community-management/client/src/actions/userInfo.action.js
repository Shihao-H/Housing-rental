import axios from "axios";
import {appConstants} from "../constants/constant";


export const putUserInfo = (ui) => {
    const putUserInfoPromise = axios.put(`${appConstants.API}/user-details`, ui);

    return {
        type: appConstants.PUT_USER_INFO,
        payload: putUserInfoPromise
    };
};



export const getUserInfo = (user_id) => {
    const getUserInfoPromise = axios.get(`${appConstants.API}/user-details/${user_id}`);

    return {
        type: appConstants.GET_USER_INFO,
        payload: getUserInfoPromise
    };
};