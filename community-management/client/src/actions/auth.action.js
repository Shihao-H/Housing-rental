import {appConstants} from "../constants/constant";




export const login = (user, success, failure) => {
    // we can use a library called qs   qs.stringify(user) to get a urlencoded form data
    const userFormData = new FormData();
    userFormData.append('username', user.username);
    userFormData.append('password', user.password);
    // ES6 fetch API, async, await
    const loginPromise = fetch(
        `${appConstants.API}/login`,
        {
            method: 'POST',
            body: userFormData,
            credentials: 'include'
        }
        )
            .then(res => res.json())
            .then(res => {
                res.success ?
                    // check success is a function
                    typeof success === 'function' && success() :
                    typeof failure === 'function' && failure();
                return res;
            })
            .catch(err => {
                typeof failure === 'function' && failure(err);
                return err;
            })
    ;
    return {
        type: appConstants.LOGIN,
        payload: loginPromise
    };
};

