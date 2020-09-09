import axios from "axios";
import {appConstants} from "../constants/constant";


export const activate = (user_id, success, failure) => {
    const activatePromise = axios.put(`${appConstants.API}/users/activate/${user_id}`)
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
        type: appConstants.ACTIVATE,
        payload: activatePromise
    };
};


export const deActivate = (user_id, success, failure) => {
    const deActivatePromise = axios.put(`${appConstants.API}/users/deActivate/${user_id}`)
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
        type: appConstants.DE_ACTIVATE,
        payload: deActivatePromise
    };
};