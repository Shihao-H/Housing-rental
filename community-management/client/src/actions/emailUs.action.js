import axios from "axios";
import {appConstants} from "../constants/constant";


export const emailUs = (eu, success, failure) => {
    const emailUsPromise = axios.post(`${appConstants.API}/emailUss`, eu)
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
        type: appConstants.EMAIL_US,
        payload: emailUsPromise
    };
};

export const putEmailUs = (eu) => {
    const getEmailUsPromise = axios.put(`${appConstants.API}/emailUss`, eu);

    return {
        type: appConstants.PUT_EMAIL_US,
        payload: getEmailUsPromise
    };
};

export const getEmailUs = () => {
    const getEmailUsPromise = axios.get(`${appConstants.API}/emailUss/notReplied`, {withCredentials: true});


    return {
        type: appConstants.GET_EMAIL_US,
        payload: getEmailUsPromise
    };
};