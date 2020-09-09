import React, {useState} from 'react';
import Alert from "@material-ui/lab/Alert/Alert";
import Button from "@material-ui/core/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {activate, deActivate} from "../actions/activate.action";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import {appConstants} from "../constants/constant";
import './AdminActivation.scss';


const AdminActivation = () => {

    const dispatch = useDispatch();
    const [user_id, setUser_id] = useState(0);

    const [open, setOpen] = useState(false);

    const [open2, setOpen2] = useState(false);

    const searchResultsState = useSelector(appState => {
        return {
            userInfos: appState.userInfos,
            response: appState.response,
            response2: appState.response2,
            msg: appState.response ?
                appConstants.ACTIVATE_SUCCESS_MESSAGE :
                appConstants.ACTIVATE_FAILURE_MESSAGE,

            msg2: appState.response2 ?
                appConstants.DEACTIVATE_SUCCESS_MESSAGE :
                appConstants.DEACTIVATE_FAILURE_MESSAGE,

        };
    });

    // (function () {
    //     console.log("ppppp:"+searchResultsState.response);
    // })();



    const handleInput = (event) =>
    {
        setUser_id(event.target.value);
    }


    const handleActivate = () =>{
        dispatch(activate(
            user_id,
            () => {
                setOpen(true);
            },
            () => {
                setOpen(true);
            }
        ));
    }

    const handleDeActivate = () =>{
        dispatch(deActivate(
            user_id,
            () => {
                setOpen2(true);
            },
            () => {
                setOpen2(true);
            }
        ));
    }

    return(
        <div>
            <Alert severity="info">
                Please type the user_id that you want to activate
            </Alert>
            <input type="number" onChange={handleInput}/>
            <Button color = "primary" onClick = {handleActivate}>Activate the user</Button>
            <Button color = "primary" onClick = {handleDeActivate}>DeActivate the user</Button>

            <div>
                <Snackbar
                    // className={loginState.user ? console.log(loginState.user.profiles[0].id) : 'failure'}
                    className={searchResultsState.response ? 'success' : 'failure'}
                    open={open}
                    onClose={() => setOpen(false)}
                    autoHideDuration={3000}
                    message={<span>{searchResultsState.msg}</span>}
                />
                <Snackbar
                    // className={loginState.user ? console.log(loginState.user.profiles[0].id) : 'failure'}
                    className={searchResultsState.response2 ? 'success' : 'failure'}
                    open={open2}
                    onClose={() => setOpen2(false)}
                    autoHideDuration={3000}
                    message={<span>{searchResultsState.msg2}</span>}
                />
            </div>
        </div>
    );


}

export default AdminActivation;


