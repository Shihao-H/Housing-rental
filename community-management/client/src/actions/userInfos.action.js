import axios from "axios";
import {appConstants} from "../constants/constant";



export const getUserInfos = (search) => {
    const getUserInfosPromise = axios.post(`${appConstants.API}/user-details/search`, search);

    return {
        type: appConstants.GET_USER_INFOS,
        payload: getUserInfosPromise
    };
};