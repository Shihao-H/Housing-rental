import axios from "axios";
import {appConstants} from "../constants/constant";


export const tourReserve = (tr, success, failure) => {
    const trPromise = axios.post(`${appConstants.API}/tourReservations/`, tr)
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
        type: appConstants.TOUR_RESERVATION,
        payload: trPromise
    };
};

export const putTr = (tr) => {
    const putTrPromise = axios.put(`${appConstants.API}/tourReservations`, tr);

    return {
        type: appConstants.PUT_TOUR_RESERVATION,
        payload: putTrPromise
    };
};


export const getTr = () => {
    const getTrPromise = axios.get(`${appConstants.API}/tourReservations/notFinished`, {withCredentials: true});

    return {
        type: appConstants.GET_TOUR_RESERVATION,
        payload: getTrPromise
    };
};