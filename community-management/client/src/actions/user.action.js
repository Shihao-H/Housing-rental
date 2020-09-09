import axios from "axios";
import {appConstants} from "../constants/constant";


export const register = (user, success, failure) => {
    const registerPromise = axios.post(`${appConstants.API}/users`, user)
        .then(res => {
            // TODO: check success and failure and make sure it's a function (tech debt)
            // res.data.success ? success() : failure();
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
        type: appConstants.REGISTER,
        payload: registerPromise
    };
};



export const checkLogin = () => {
    const checkLoginPromise = fetch(`${appConstants.API}/checklogin`, {credentials: 'include'})
        .then(res => res.json())
        .catch();

    return {
        type: appConstants.CHECK_LOGIN,
        payload: checkLoginPromise
    };
};
