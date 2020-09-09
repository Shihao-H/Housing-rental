import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ApplicationBasicInfo from "./ApplicationBasicInfo";
import ApplicationUnitInfo from "./ApplicationUnitInfo";
import ApplicationRoommates from "./ApplicationRoomates";
import {useDispatch, useSelector} from "react-redux";
import {putApplication} from "../../actions/application.action";
import {putUserInfo} from "../../actions/userInfo.action";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import Paper from "@material-ui/core/Paper/Paper";
import {appConstants} from "../../constants/constant";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '1000px'
    },
    top:{
        width: '100%',
    },
    middle: {
        width: '100%',
    },
    centerDiv: {
        width: '100%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));


export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const dispatch = useDispatch();

    const userState = useSelector(appState => {
        return {
            user: appState.user,
            userInfo: appState.userInfo,
            application: appState.application,
            response: appState.response,
            msg: appState.response ?
                appConstants.PUTAPP_SUCCESS_MESSAGE :
                appConstants.PUTAPP_FAILURE_MESSAGE
        };
    });

    const [open, setOpen] = useState(false);

    const [apply, setApply] = useState({
        id: userState.application.id,
        user_id: userState.user.id,
        leaseterm: '',
        floorplan: '',
        specificroommates: '',
        applicantgender: '',
        applicantpet: '',
        applicantsmoke: '',
        neat: '',
        quite: '',
        applicantdrink: '',
        roommatedrink: '',
        roommatepet: '',
        roommategender: '',
        roomnum: '',

        date: new Date(),
        status: 'not finished'
    });

    // (function () {
    //     console.log('^^^^^^^^^^^^^^');
    //     console.log("userState userInfo:  ", userState.userinfo);
    //     console.log('^^^^^^^^^^^^^^');
    // })();

    const [userInfo, setUserInfo] = useState({
        id: userState.userInfo.id,
        user_id: userState.user.id,
        firstname: '',
        middlename: '',
        lastname: '',
        email: '',
        phone: '',
        birthdate: '',
        ssn: '',
        address1: '',
        address2: '',
        state: '',
        city: '',
        zip: '',

    });



    function getSteps() {
        return ['Basic Info', 'Unit Info', 'Roommates', 'Finish'];
    }


    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <ApplicationBasicInfo userInfo={userInfo}  setUserInfo={setUserInfo}/>;
            case 1:
                return <ApplicationUnitInfo apply={apply} setApply={setApply}/>;
            case 2:
                return <div>
                            <ApplicationRoommates apply={apply} setApply={setApply}/>
                            <br/>
                            <br/>
                            <Button onClick={handleSubmit} color="primary">Submit</Button>
                        </div>
                        ;
            case 3:  return <div><h3>Your application has successfully submitted!</h3></div>;

            default:
                return 'Unknown stepIndex';
        }
    }


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("user_id:   " + apply.user_id);
        dispatch(putApplication(apply,
            () => {
                setOpen(true);
            },
            () => {
                setOpen(true);
            }

        ));


        dispatch(putUserInfo(userInfo));
        handleNext();
    };


    return (
        <div className={classes.root}>
            <div className={classes.top}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
            <div className={classes.middle}>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div className={classes.centerDiv}>
                        <div>
                            <div className={classes.instructions}>{getStepContent(activeStep)}</div>
                        </div>
                    </div>
                )}
            </div>
            <br/>
            <br/>
            <br/>
            <div className={classes.centerDiv}>
                <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                >
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        </div>
    );
}
