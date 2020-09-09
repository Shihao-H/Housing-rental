import {combineReducers} from "redux";
import {authReducer} from "./auth.reducer";
import {userReducer} from "./user.reducer";
import {trReducer} from "./tr.reducer";
import {euReducer} from "./eu.reducer";
import {maintenanceReducer} from "./maintenance.reducer";
import {applicationReducer} from "./application.reducer";
import {matchingReducer} from "./matching.reducer";
import {userInfoReducer} from "./userInfo.reducer";
import {userInfosReducer} from "./userInfos.reducer";
import {applicationsReducer} from "./applications.reducer";
import {userPaymentsReducer} from "./userPayments.reducer";
import {responseReducer} from "./response.reducer";
import {response2Reducer} from "./response2.reducer";
import {activeApplicationsReducer} from "./activeApplications.reducer";
import {reviewReducer} from "./reviews.reducer";
import {response3Reducer} from "./response3.reducer";
import {response4Reducer} from "./response4.reducer";
import {putAppResponseReducer} from "./putAppResponse.reducer";
import {putUserInfoResponse} from "./putUserInfoResponse.reducer";



export const rootReducer = combineReducers({
    message: authReducer,
    user: userReducer,
    tr: trReducer,
    eu: euReducer,
    maintenance: maintenanceReducer,
    application: applicationReducer,
    applications: applicationsReducer,
    matching: matchingReducer,
    userInfo: userInfoReducer,
    userInfos: userInfosReducer,
    userPayments: userPaymentsReducer,
    response: responseReducer,
    response2: response2Reducer,
    response3: response3Reducer,
    response4: response4Reducer,
    activeApplications: activeApplicationsReducer,
    reviews: reviewReducer,
    putAppResponse: putAppResponseReducer,
    putUserInfoResponse: putUserInfoResponse
});