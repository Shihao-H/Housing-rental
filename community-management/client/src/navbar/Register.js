import React, {useState} from "react";
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import UsernameIcon from "@material-ui/icons/Person";
import Fab from "@material-ui/core/Fab/Fab";
import PasswordIcon from "@material-ui/icons/VpnKey"
import {withStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {register, userinfo} from "../actions/user.action";
import './Register.scss';
import Paper from "@material-ui/core/Paper/Paper";
import {appConstants} from "../constants/constant";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';




const styles = {
    root: {
        marginTop: '25px',
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white'
        },
        '& .MuiInput-underline:before:hover': {
            borderBottomColor: 'white'
        },
        '& .MuiInput-underline:hover:not(.MuiInput-disabled):before': {
            borderBottomColor: 'white'
        },
        '& .MuiFormLabel-root': {
            color: 'white'
        }
    },
    input: {
        color: 'white'
    },
    button: {
        '&.MuiButtonBase-root': {
            margin: '50px 0 25px'
        }
    }
};



const Register = (props) => {

    const {classes} = props;
    // // React hooks  React.useState()
    const [user, setUser] = useState({
        username: '',
        password: '',
        profiles:[],
        isactive:0
    });

    const registerState = useSelector(appState => {
        return {
            user: appState.user,
            msg: appState.user ?
                appConstants.LOGIN_SUCCESS_MESSAGE + user.username :
                appConstants.LOGIN_FAILURE_MESSAGE
        };
    });

    const [open, setOpen] = useState(false);
    //
    const dispatch = useDispatch();

    const handleFormControl = (event) => {
        const newUser = {...user};
        newUser[event.target.name] = event.target.value;
        setUser(newUser);

        // const newUserInfo = {...userInfo};
        // newUserInfo.user = newUser;
        // setUserInfo(newUserInfo);

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(register(
            user,
            () => {
                setOpen(false);
                // return <Redirect  to="/user-page/" />
                setTimeout(() => {
                    props.history.push('/login');

                }, 1000);
            },
            () => setOpen(true)
        ));



    };



    return (
        <div className="daddy2">
        <div className="contentRegister">
        <Paper className="Login" elevation={10}>
            <div className="overlay"/>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-icon">
                    <AccountCircleIcon/>
                </div>
                <TextField
                    name="username"
                    // className={classes.root}
                    label="Username"
                    value={user.username}
                    onChange={handleFormControl}
                    InputProps={{
                        className: classes.input,
                        startAdornment: (
                            <InputAdornment position="start">
                                <UsernameIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    name="password"
                    // className={classes.root}
                    label="Password"
                    type="password"
                    value={user.password}
                    onChange={handleFormControl}
                    InputProps={{
                        className: classes.input,
                        startAdornment: (
                            <InputAdornment position="start">
                                <PasswordIcon />
                            </InputAdornment>
                        )
                    }}
                />

                <TextField
                    name="confirmed-password"
                    // className={classes.root}
                    label="confirmedPassword"
                    type="password"
                    // value={user.password}
                    onChange={handleFormControl}
                    InputProps={{
                        className: classes.input,
                        startAdornment: (
                            <InputAdornment position="start">
                                <PasswordIcon />
                            </InputAdornment>
                        )
                    }}
                />

                <Fab
                    variant="extended"
                    size="medium"
                    color="default"
                    aria-label="Register"
                    className={classes.button}
                    type="submit"
                    // disabled={!user.username || !user.password}
                >
                    Register
                </Fab>
            </form>
        </Paper>
        </div>
        </div>
    );
}

export default withStyles(styles)(Register);