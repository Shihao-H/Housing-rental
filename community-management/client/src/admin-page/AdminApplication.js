import React, {useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import Radio from "@material-ui/core/Radio/Radio";
import Button from "@material-ui/core/Button/Button";
import {matching} from "../actions/matching.action";
import EnhancedTable from "./AdminTable";
import {useSelector} from "react-redux";
import {getApplications} from "../actions/applications.action";
import {useDispatch} from "react-redux";
import './AdminApplication.scss';
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import {putRoomInfo, putRoomInfo2} from "../actions/roomInfo.action";
import {putApplication2, putApplication3} from "../actions/application.action";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import {appConstants} from "../constants/constant";
// import useForceUpdate from "@restart/hooks/useForceUpdate";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const AdminApplication = () => {
    const adminApState = useSelector(appState => {
        return {
            applications: appState.applications,
            matching: appState.matching,
            response: appState.response,
            response2: appState.response2,
            msg: appState.response ?
                appConstants.STORE_USER_SUCCESS_MESSAGE :
                appConstants.STORE_USER_FAILURE_MESSAGE,
            msg2: appState.response2 ?
                appConstants.REMOVE_USER_SUCCESS_MESSAGE :
                appConstants.REMOVE_USER_FAILURE_MESSAGE,
        };
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    // const forceUpdate = useForceUpdate();
    const [matchdata, setMatchdata] = React.useState({
        floorplan: '4x4',
        applicantgender: '',
        applicantpet: '',
        applicantsmoke: '',
        applicantdrink: '',
        neat: '',
        quite: '',
        roommategender: '',
        roommatedrink: '',
        roommatepet: '',
    });

    const [update, setUpdate] = React.useState({
        id: '',
        roomnum: '',
    });


    const [open, setOpen] = useState(false);

    const [open2, setOpen2] = useState(false);

    const handleChange = (event) => {
        setMatchdata({ ...matchdata, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(matching(matchdata));

    }

    const getApps = (event) => {
        event.preventDefault();
        dispatch(getApplications());

    }



    const f1 = (event) => {
        event.preventDefault();
        const newUpdate = {...update};
        newUpdate.id = event.target.value;
        setUpdate(newUpdate);

    }

    const f2 = (event) => {
        event.preventDefault();
        const newUpdate = {...update};
        newUpdate.roomnum = event.target.value;
        setUpdate(newUpdate);

    }

    const f3 = (event) => {
        event.preventDefault();
        dispatch(putRoomInfo(update.roomnum));

        dispatch(putApplication2(update.id, update.roomnum,

            () => {
                setOpen(true);
            },
            () => setOpen(true)

        ));

        // dispatch

    }

    const f4 = (event) => {
        event.preventDefault();
        dispatch(putRoomInfo2(update.roomnum));

        dispatch(putApplication3(update.id,
            () => {
                setOpen2(true);
            },
            () => setOpen2(true)

        ));

    }

    // (function () {
    //     console.log('^^^^^^^^^^^^^^');
    //     console.log("adminState applications:  ", adminApState.applications);
    //     console.log('^^^^^^^^^^^^^^');
    // })();


    return (
        <div id="container">
            <div id = "top">
                <Button onClick = {getApps} color = "primary">Get applications</Button>
                {
                    adminApState.applications ?
                            <EnhancedTable  component={'apps'} rows = {adminApState.applications}/>
                        :
                        <span></span>
                }
            </div>
            <div id = "match">
                <FormGroup>
                    <h3>Applicant's info</h3>
                    <div className="div1">
                        <div>
                            <p>Floor plan</p>
                            <RadioGroup aria-label="filters0" name="floorplan" value={matchdata.floorplan} onChange={handleChange}>
                                <FormControlLabel value="Studio" control={<Radio />} label="Studio" />
                                <FormControlLabel value="2x2" control={<Radio />} label="2x2" />
                                <FormControlLabel value="3x3" control={<Radio />} label="3x3" />
                                <FormControlLabel value="4x4" control={<Radio />} label="4x4" />
                            </RadioGroup>
                        </div>


                        <div>
                            <p>Applicant's gender</p>
                            <RadioGroup aria-label="filters" name="applicantgender" value={matchdata.applicantgender} onChange={handleChange}>
                                <FormControlLabel value=" " control={<Radio />} label=" " />
                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </div>

                        <div>
                            <p>Does he/she have a pet?</p>
                            <RadioGroup aria-label="filters2" name="applicantpet" value={matchdata.applicantpet} onChange={handleChange}>
                                <FormControlLabel value=" " control={<Radio />} label=" " />
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div>

                        <div>
                            <p>Does he/she drink?</p>
                            <RadioGroup aria-label="filters3" name="applicantdrink" value={matchdata.applicantdrink} onChange={handleChange}>
                                <FormControlLabel value=" " control={<Radio />} label=" " />
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div>

                        <div>
                            <p>Does he/she smoke?</p>
                            <RadioGroup aria-label="filters5" name="applicantsmoke" value={matchdata.applicantsmoke} onChange={handleChange}>
                                <FormControlLabel value=" " control={<Radio />} label=" " />
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div>

                        <div>
                            <p>Neat</p>
                            <RadioGroup aria-label="filters8" name="neat" value={matchdata.neat} onChange={handleChange}>
                                <FormControlLabel value=" " control={<Radio />} label=" " />
                                <FormControlLabel value="Very neat" control={<Radio />} label="Very neat" />
                                <FormControlLabel value="Average neat" control={<Radio />} label="Average neat" />
                                <FormControlLabel value="Messy" control={<Radio />} label="Messy" />
                            </RadioGroup>
                        </div>

                        <div>
                            <p>Quite</p>
                            <RadioGroup aria-label="filters9" name="quite" value={matchdata.quite} onChange={handleChange}>
                                <FormControlLabel value=" " control={<Radio />} label=" " />
                                <FormControlLabel value="Very quite" control={<Radio />} label="Very quite" />
                                <FormControlLabel value="Average quite" control={<Radio />} label="Average quite" />
                                <FormControlLabel value="Noisy" control={<Radio />} label="Noisy" />
                            </RadioGroup>
                        </div>


                    </div>
                    <h3>Applicant's expectation about roommates</h3>
                    <div className="div2">
                        <div>
                            <p>Gender preference</p>
                            <RadioGroup aria-label="filters4" name="roommategender" value={matchdata.roommategender} onChange={handleChange}>
                                <FormControlLabel value=" " control={<Radio />} label=" " />
                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                <FormControlLabel value="dont mind" control={<Radio />} label="He/She doesn't mind" />
                            </RadioGroup>
                        </div>

                        <div>
                            <p>Mind his/her roommate drinking?</p>
                            <RadioGroup aria-label="filters6" name="roommatedrink" value={matchdata.roommatedrink} onChange={handleChange}>
                                <FormControlLabel value=" " control={<Radio />} label=" " />
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div>

                        <div>
                            <p>Mind his/her roommate having a pet?</p>
                            <RadioGroup aria-label="filters7" name="roommatepet" value={matchdata.roommatepet} onChange={handleChange}>
                                <FormControlLabel value=" " control={<Radio />} label=" " />
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div>

                    </div>
                </FormGroup>
            </div>

            <div id="result">
                <Button color = "secondary" onClick={handleSubmit}>Get matching results</Button>
                {
                adminApState.matching ?
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Room number</TableCell>
                                <TableCell align="left">User id</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminApState.matching.map((row) => (
                                <TableRow key={row.user_id}>
                                    <TableCell component="th" scope="row">
                                        {row.roomnum}
                                    </TableCell>
                                    <TableCell align="left">{row.user_id}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                    :
                    <span></span>
                }
            </div>
            <div>
                <label>user_id:</label><br/>
                <input type="number" onChange={f1}/><br/>
                <label>Room number:</label><br/>
                <input type="number" onChange={f2}/><br/>
                <Button onClick = {f3} color = "secondary">Add</Button>
                <Button onClick = {f4} color = "secondary">Remove</Button>
                <br/>
            </div>
            <Snackbar
                className={adminApState.response ? 'success' : 'failure'}
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={3000}
                message={<span>{adminApState.msg}</span>}
            />
            <Snackbar
                className={adminApState.response2 ? 'success' : 'failure'}
                open={open2}
                onClose={() => setOpen2(false)}
                autoHideDuration={3000}
                message={<span>{adminApState.msg2}</span>}
            />

        </div>
    );
}

export default AdminApplication;

// {/*useData ?*/}
// {/*<EnhancedTable  component={'matching'} rows = {useData}/>*/}
// {/*:*/}
// {/*<span></span>*/}