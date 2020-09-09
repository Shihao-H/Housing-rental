import axios from "axios";
import {appConstants} from "../constants/constant";



export const matching = (matchdata) => {
    const matchingPromise = axios.post(`${appConstants.API}/applications/matching`, matchdata);
    console.log(matchingPromise);
    return {
        type: appConstants.MATCHING,
        payload: matchingPromise
    };
};