import axios from "axios";
import {appConstants} from "../constants/constant";



export const postMaintenance = (eu, success, failure) => {
    const postMaintenancePromise = axios.post(`${appConstants.API}/maintenances`, eu)
        .then(res => {
            res.data.success ?
                typeof success === 'function' && success() :
                typeof failure === 'function' && failure();
            return res;
        })
        .catch(err => {
            typeof failure === 'function' && failure(err);
            return err;
        });

    return {
        type: appConstants.MAINTENANCE,
        payload: postMaintenancePromise
    };
};


export const putMaintenance = (maintenance) => {
    const putMaintenancePromise = axios.put(`${appConstants.API}/maintenances`, maintenance);

    return {
        type: appConstants.PUT_MAINTENANCE,
        payload: putMaintenancePromise
    };
};


export const getMaintenance = () => {
    const getMaintenancePromise = axios.get(`${appConstants.API}/maintenances/notFinished`, {withCredentials: true});


    return {
        type: appConstants.GET_MAINTENANCE,
        payload: getMaintenancePromise
    };
};