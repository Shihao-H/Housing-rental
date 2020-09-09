import axios from "axios";
import {appConstants} from "../constants/constant";



export const putApplication = (apply, success, failure) => {

    const putApplicationPromise = axios.put(`${appConstants.API}/applications`, apply)
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
        type: appConstants.PUT_APPLICATION,
        payload: putApplicationPromise
    };
};

export const getApplication = (user_id) => {
    const getApplicationPromise = axios.get(`${appConstants.API}/applications/${user_id}`, {withCredentials: true});

    return {
        type: appConstants.GET_APPLICATION,
        payload: getApplicationPromise
    };
};


export const putApplication2 = (uid, roomnum, success, failure) => {

    const putApplication2Promise = axios.put(`${appConstants.API}/applications/add/${uid}/${roomnum}`)
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
        type: appConstants.PUT_APPLICATION2,
        payload: putApplication2Promise
    };
};


export const putApplication3 = (id, success, failure) => {

    const putApplication3Promise = axios.put(`${appConstants.API}/applications/remove/${id}`)
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
        type: appConstants.PUT_APPLICATION3,
        payload: putApplication3Promise
    };
};

