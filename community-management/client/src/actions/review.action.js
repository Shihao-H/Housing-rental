import axios from "axios";
import {appConstants} from "../constants/constant";



export const postReviews = (review, success, failure) => {
    const postReviews = axios.post(`${appConstants.API}/reviews`, review)
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
        type: appConstants.POST_REVIEW,
        payload: postReviews
    };
};


export const getReviews = () => {
    const getReviewsPromise = axios.get(`${appConstants.API}/reviews`);

    return {
        type: appConstants.GET_REVIEW,
        payload: getReviewsPromise
    };
};