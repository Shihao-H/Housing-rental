import axios from "axios";
import {appConstants} from "../constants/constant";


export const getPayments = (uid) => {
    const getPaymentsPromise = axios.get(`${appConstants.API}/paymentHistories/${uid}`);

    return {
        type: appConstants.GET_PAYMENT_HISTORY,
        payload: getPaymentsPromise
    };
};

export const putPayments = (paymentHistory) => {
    const putPaymentsPromise = axios.put(`${appConstants.API}/paymentHistories`, paymentHistory);

    return {
        type: appConstants.PUT_PAYMENT_HISTORY,
        payload: putPaymentsPromise
    };
};


