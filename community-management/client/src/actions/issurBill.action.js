import axios from "axios";
import {appConstants} from "../constants/constant";


export const issueBill = (ib, success, failure) => {
    const issueBillPromise = axios.post(`${appConstants.API}/paymentHistories`, ib)
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
        type: appConstants.ISSUE_BILL,
        payload: issueBillPromise
    };
};


export const issueMonthly = (obj, success, failure) => {
    const issueMonthlyPromise = axios.post(`${appConstants.API}/paymentHistories/s`, obj)
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
        type: appConstants.ISSUE_MONTHLY,
        payload: issueMonthlyPromise
    };
};