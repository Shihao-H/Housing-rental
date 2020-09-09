import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import Maintenance from "./Maintenance";
import HorizontalLabelPositionBelowStepper from "./application/Stepper";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo} from "../actions/userInfo.action";
import {getApplication} from "../actions/application.action";
import Transaction from "./Transaction";
import {getPayments} from "../actions/userPayments.action";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import AddCommentIcon from '@material-ui/icons/AddComment';
import PostReview from "./PostReview";
import {checkLogin} from "../actions/user.action";



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '1000px'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));



const UserPage = () => {
    const classes = useStyles();
    const [component, setComponent] = useState('user');

    const loginState = useSelector(appState => {
        return {
            putAppResponse: appState.putAppResponse,
            putUserInfoResponse: appState.putUserInfoResponse,
            auth: appState.message,
            user: appState.user,
            userInfo: appState.userInfo,
            application: appState.application,
        };
    });

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(checkLogin());
    }, [loginState.auth]);

    useEffect(()=>{
        dispatch(getUserInfo(loginState.user.id));
    }, [loginState.putUserInfoResponse]);

    useEffect(()=>{
        dispatch(getApplication(loginState.user.id));
    }, [loginState.putAppResponse]);


    // (function () {
    //     if(loginState.userInfo === null)
    //     {
    //         dispatch(getUserInfo(loginState.user.id));
    //         // setTimeout(dispatch(getUserInfo(loginState.user.id)),1000);
    //     }
    //
    //     if(loginState.application === null)
    //     {
    //         dispatch(getApplication(loginState.user.id));
    //         // setTimeout(dispatch(getApplication(loginState.user.id)),1000);
    //     }
    // })();

    const handleTransaction = () => {
        dispatch(getPayments(loginState.user.id));
        setComponent('transaction');
    }



    return (
        <div className={classes.root}>
                <div className={classes.toolbar} />
                <List>
                    <ListItem button onClick={() => setComponent('application')}>
                        <ListItemIcon>
                            <HorizontalSplitIcon />
                        </ListItemIcon>
                        <ListItemText primary="Application" />
                    </ListItem>
                    <ListItem button disabled={!loginState.user.isactive} onClick={() => setComponent('maintenance')}>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Maintenance request" />
                    </ListItem>
                    <ListItem button disabled={!loginState.user.isactive} onClick={handleTransaction}>
                        <ListItemIcon>
                            <AttachMoneyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Transactions" />
                    </ListItem>
                    <ListItem button disabled={!loginState.user.isactive} onClick={() => setComponent('postreview')}>
                        <ListItemIcon>
                            <AddCommentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Post review" />
                    </ListItem>
                </List>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {
                    component === 'application' ?
                        <HorizontalLabelPositionBelowStepper/>

                        :
                        component === 'maintenance' ?
                            <Maintenance />
                        :
                        component === 'transaction' ?
                            <Transaction/>
                        :
                        component === 'postreview' ?
                            <PostReview/>
                        :
                            <span></span>
                }
            </main>
        </div>
    );
}

export default UserPage;

