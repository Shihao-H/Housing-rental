import axios from "axios";
import {appConstants} from "../constants/constant";


export const getApplications = () =>
{
    const testPromise = axios.get(`${appConstants.API}/applications/notFinished`);

    return{
        type:appConstants.GET_APPS,
        payload:testPromise,
    };

}