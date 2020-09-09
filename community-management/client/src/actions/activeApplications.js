import axios from "axios";
import {appConstants} from "../constants/constant";


export const getActiveApplications = () =>
{
    const activeApplicationsPromise = axios.get(`${appConstants.API}/applications/finished`);

    return{
        type:appConstants.GET_ACTIVE_APPS,
        payload:activeApplicationsPromise,
    };

}