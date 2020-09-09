import React, {useEffect} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import './Header.scss';
import {NavLink} from "react-router-dom";
import {appConstants} from "../constants/constant";
import Button from "@material-ui/core/Button/Button";
import {checkLogin} from "../actions/user.action";
import {useDispatch, useSelector} from "react-redux";
import IconButton from "@material-ui/core/IconButton/IconButton";
import NamesIcon from '@material-ui/icons/People';
import {getReviews} from "../actions/review.action";

const Header = () => {
    const user = useSelector(({user}) => {
        return user;
    });



    const dispatch = useDispatch();
    // dispatch(checkLogin());


    const loginState = useSelector(appState => {
        return {
            auth: appState.message
        };
    });


    useEffect(()=>{
        dispatch(checkLogin());
    }, [loginState.auth]);


    const logout = () => {

        const logoutPromise = fetch(`${appConstants.API}/logout`, {credentials: 'include'})
            .then(res => res.json())
            .catch();
        dispatch({
            type: appConstants.LOGOUT,
            payload: logoutPromise
        });

    };

    const loadReviews = () => {
        dispatch(getReviews());
    }



    return (
        <AppBar position="static" className="Header">
            <Toolbar>
                    <NavLink to={appConstants.floorPlanRoute}>
                        <div style={{ color: 'black' }}>MSI</div>
                    </NavLink>

                <div className="nav-actions">
                    <NavLink to={appConstants.floorPlanRoute}>
                        <Button>Floor Plans</Button>
                    </NavLink>

                    <NavLink to={appConstants.locationsRoute}>
                        <Button>Locations</Button>
                    </NavLink>
                    <NavLink to={appConstants.quickLookRoute}>
                        <Button>QuickLook</Button>
                    </NavLink>
                    <NavLink to={appConstants.FAQRoute}>
                        <Button>FAQ</Button>
                    </NavLink>
                    <NavLink to={appConstants.reviewRoute}>
                        <Button onClick = {loadReviews}>Reviews</Button>
                    </NavLink>
                    <NavLink to={appConstants.loginRoute} style={{textDecoration: 'none'}}>
                        {
                            user ?
                                <Button onClick={logout} className="auth-action">Logout</Button>
                                :
                                <Button className="auth-action">Login</Button>
                        }
                    </NavLink>
                    {
                        // user ?
                        //     <NavLink to={appConstants.userPageRoute}>
                        //         <IconButton>
                        //             <NamesIcon className="nav-action-icon"/>
                        //         </IconButton>
                        //     </NavLink>
                        //     :
                        //     <span></span>
                        user ?
                            user.profiles[0].id === 2 ?
                                <NavLink to={appConstants.userPageRoute}>
                                    <IconButton>
                                        <NamesIcon className="nav-action-icon"/>
                                    </IconButton>
                                </NavLink> :
                                <NavLink to={appConstants.adminPageRoute}>
                                    <IconButton>
                                        <NamesIcon className="nav-action-icon"/>
                                    </IconButton>
                                </NavLink>

                            :
                            <a></a>

                    }
                </div>
            </Toolbar>
        </AppBar>
    );
};
export default Header;