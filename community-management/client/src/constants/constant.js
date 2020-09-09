export const appConstants = {
    // constants for routing
    floorPlanRoute: '/floor-plans',
    locationsRoute: '/locations',
    quickLookRoute: '/quick-look',
    FAQRoute: '/FAQ',
    loginRoute: '/login',
    login2Route: '/login2',
    registerRoute: '/register',
    userPageRoute: '/user-page',
    adminPageRoute: '/admin-page',
    reviewRoute: '/review',


    API: 'http://3.18.110.193:8089',
    // API: 'http://localhost:8089',

     // action types
    REGISTER: 'REGISTER',

    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',

    ACTIVATE: 'ACTIVATE',
    DE_ACTIVATE: 'DE_ACTIVATE',

    CHECK_LOGIN: 'CHECK_LOGIN',

    TOUR_RESERVATION: 'TOUR_RESERVATION',
    GET_TOUR_RESERVATION: 'GET_TOUR_RESERVATION',
    PUT_TOUR_RESERVATION: 'PUT_TOUR_RESERVATION',

    EMAIL_US: 'EMAIL_US',
    GET_EMAIL_US: 'GET_EMAIL_US',
    PUT_EMAIL_US: 'PUT_EMAIL_US',

    MAINTENANCE: 'MAINTENANCE',
    GET_MAINTENANCE: 'GET_MAINTENANCE',
    PUT_MAINTENANCE: 'PUT_MAINTENANCE',

    GET_APPS: 'GET_APPS',
    GET_ACTIVE_APPS: 'GET_ACTIVE_APPS',
    GET_APPLICATION: 'GET_APPLICATION',
    PUT_APPLICATION: "PUT_APPLICATION",
    PUT_APPLICATION2: "PUT_APPLICATION2",
    PUT_APPLICATION3: "PUT_APPLICATION3",

    MATCHING:'MATCHING',

    PUT_ROOM_INFO: "PUT_ROOM_INFO",
    PUT_ROOM_INFO2: "PUT_ROOM_INFO2",

    GET_USER_INFO: 'GET_USER_INFO',
    GET_USER_INFOS: 'GET_USER_INFOS',
    PUT_USER_INFO: "PUT_USER_INFO",
    PUT_USER_INFO2: "PUT_USER_INFO2",

    POST_REVIEW: 'POST_REVIEW',
    GET_REVIEW: 'GET_REVIEW',

    ISSUE_BILL: 'ISSUE_BILL',
    ISSUE_MONTHLY: 'ISSUE_MONTHLY',


    GET_PAYMENT_HISTORY: 'GET_PAYMENT_HISTORY',
    PUT_PAYMENT_HISTORY: 'PUT_PAYMENT_HISTORY',

    // messages
    LOGIN_SUCCESS_MESSAGE: 'Login successfully! Welcome ',
    LOGIN_FAILURE_MESSAGE: 'Login failed, please try again',

    POST_REVIEW_SUCCESS_MESSAGE: 'Post review successfully! Welcome ',
    POST_REVIEW_FAILURE_MESSAGE: 'Post review failed, please try again',


    REGISTER_SUCCESS_MESSAGE: 'Register successfully! Welcome ',
    REGISTER_FAILURE_MESSAGE: 'Register failed, please try again',

    PUTAPP_SUCCESS_MESSAGE: 'Submit successfully! Thank you! ',
    PUTAPP_FAILURE_MESSAGE: 'Submit failed, please try again',

    ACTIVATE_SUCCESS_MESSAGE: 'Activate successfully! Thank you! ',
    ACTIVATE_FAILURE_MESSAGE: 'Activate failed, please try again',

    DEACTIVATE_SUCCESS_MESSAGE: 'Deactivate successfully! Thank you! ',
    DEACTIVATE_FAILURE_MESSAGE: 'Deactivate failed, please try again',

    STORE_USER_SUCCESS_MESSAGE: 'Store user successfully! Thank you! ',
    STORE_USER_FAILURE_MESSAGE: 'Store user failed, please try again',

    REMOVE_USER_SUCCESS_MESSAGE: 'Remove user successfully! Thank you! ',
    REMOVE_USER_FAILURE_MESSAGE: 'Remove user failed, please try again',

    ISSUE_BILL_SUCCESS_MESSAGE: 'Issue specific bill successfully! Thank you! ',
    ISSUE_BILL_FAILURE_MESSAGE: 'Issue specific bill failed, please try again',


    ISSUE_MONTHLY_SUCCESS_MESSAGE: 'Issue monthly rent bill successfully! Thank you! ',
    ISSUE_MONTHLY_FAILURE_MESSAGE: 'Issue monthly rent failed, please try again',


};
