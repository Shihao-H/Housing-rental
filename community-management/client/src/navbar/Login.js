import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Snackbar from "@material-ui/core/Snackbar";
import UsernameIcon from "@material-ui/icons/Person";
import PasswordIcon from "@material-ui/icons/VpnKey"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Fab from "@material-ui/core/Fab";
import {withStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../actions/auth.action";
import './Login.scss';
import {appConstants} from "../constants/constant";
import {NavLink} from "react-router-dom";
import {checkLogin} from "../actions/user.action";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {getApplication} from "../actions/application.action";
import {getUserInfo} from "../actions/userInfo.action";

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

const Login = (props) => {
    const {classes} = props;
    // React hooks  React.useState()
    const [user, setUser] = useState({
        username: '',
        password: '',
        profiles:[],
        isactive: 'No'
    });

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const loginState = useSelector(appState => {
        return {
            auth: appState.message,
            user: appState.user,
            msg: appState.user ?
                appConstants.LOGIN_SUCCESS_MESSAGE + user.username :
                appConstants.LOGIN_FAILURE_MESSAGE
        };
    });



    React.useEffect(()=>{
        dispatch(checkLogin());
    }, [loginState.auth]);


    const handleFormControl = (event) => {
        const newUser = {...user};
        newUser[event.target.name] = event.target.value;
        setUser(newUser);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(
            user,
            () => {
                setOpen(true);
                setTimeout(
                    () => {props.history.push('/user-page');},1000
                );
            },
            () => setOpen(true)
        ));





        // setTimeout(
        //     () => {
                // console.log(loginState.user);
                // if(loginState.user!==null) {
                //
                //     if (loginState.user.profiles[0].id === 2) {
                //         console.log('%%%%%%%%%2');
                //         props.history.push('/user-page');
                //     }
                //     else
                //     {
                //         console.log('%%%%%%%%%3');
                //         props.history.push('/admin-page');
                //
                //     }
                // }
            // },2000);



    };


    return (
        <div className="daddy1">
        <div className="contentLogin">
        <Paper className="Login" elevation={10} >
            <div className="overlay" />
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-icon">
                    <AccountCircleIcon/>
                </div>
                <TextField
                    name="username"
                    className={classes.root}
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
                    className={classes.root}
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
                <br/>
                <NavLink to={appConstants.registerRoute}>
                    Register
                </NavLink>
                <br/>
                <NavLink to={appConstants.login2Route}>
                    AdminLogin
                </NavLink>
                <Fab
                    variant="extended"
                    size="medium"
                    color="default"
                    aria-label="Login"
                    className={classes.button}
                    type="submit"
                    disabled={!user.username || !user.password}
                >
                    Sign In
                    <ArrowForwardIcon />
                </Fab>
            </form>
            <Snackbar
                className={loginState.user ? 'success' : 'failure'}
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={3000}
                message={<span>{loginState.msg}</span>}
            />
        </Paper>
        </div>
        </div>
    );
};
export default withStyles(styles)(Login);
