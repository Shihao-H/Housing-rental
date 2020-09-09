import axios from "axios";
import {appConstants} from "../constants/constant";



export const putRoomInfo = (roomNum) => {
    const putRoomInfoPromise = axios.put(`${appConstants.API}/roomInfos/add/${roomNum}`);

    return {
        type: appConstants.PUT_ROOM_INFO,
        payload: putRoomInfoPromise
    };
};

export const putRoomInfo2 = (roomNum) => {
    const putRoomInfoPromise = axios.put(`${appConstants.API}/roomInfos/remove/${roomNum}`);

    return {
        type: appConstants.PUT_ROOM_INFO2,
        payload: putRoomInfoPromise
    };
};