
import React, {useState} from 'react';
import Button from "@material-ui/core/Button/Button";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo} from "../actions/userInfo.action";
import {getActiveApplications} from "../actions/activeApplications";
import {makeStyles} from "@material-ui/core";
import {getUserInfos} from "../actions/userInfos.action";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const AdminSearch = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const [user_id, setUser_id] = useState(0);

    const AdminSearchState = useSelector(appState => {
        return {
            userInfos: appState.userInfos,
            userInfo: appState.userInfo,
            activeApplications: appState.activeApplications
        };
    });

    const [search, setSearch] = useState({
        firstname: '',
        middlename: '',
        lastname: '',
    });

    const f1 = (event) => {
        const newSearch = {...search};
        newSearch.firstname = event.target.value;
        setSearch(newSearch);
    };

    const f2 = (event) => {
        const newSearch = {...search};
        newSearch.middlename = event.target.value;
        setSearch(newSearch);
    };

    const f3 = (event) => {
        const newSearch = {...search};
        newSearch.lastname = event.target.value;
        setSearch(newSearch);
    };

    const handleInput = (event) =>
    {
        setUser_id(event.target.value);
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        dispatch(getUserInfo(user_id));

    }


    const handleSubmit2 = (event) =>
    {
        event.preventDefault();
        dispatch(getActiveApplications());
    }

    const handleSubmit3 = (event) =>
    {
        event.preventDefault();
        dispatch(getUserInfos(search));
    }



    return (
        <div>
            <h3>Search User by User_id</h3>
            <label>Uid:</label><br/>
            <input type="number" onChange={handleInput}/>
            <br/>
            <Button color = "secondary" onClick = {handleSubmit}>Search</Button>
            {
                AdminSearchState.userInfo ?
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell align="left">Middle Name</TableCell>
                                    <TableCell align="left">Last Name</TableCell>
                                    <TableCell align="left">SSN</TableCell>
                                    <TableCell align="left">Address1</TableCell>
                                    <TableCell align="left">Address2</TableCell>
                                    <TableCell align="left">Zip</TableCell>
                                    <TableCell align="left">City</TableCell>
                                    <TableCell align="left">State</TableCell>
                                    <TableCell align="left">Birth Date</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    <TableRow key={AdminSearchState.userInfo.id}>
                                        <TableCell component="th" scope="row">
                                            {AdminSearchState.userInfo.firstname}
                                        </TableCell>
                                        <TableCell align="left">{AdminSearchState.userInfo.middlename}</TableCell>
                                        <TableCell align="left">{AdminSearchState.userInfo.lastname}</TableCell>
                                        <TableCell align="left">{AdminSearchState.userInfo.ssn}</TableCell>
                                        <TableCell align="left">{AdminSearchState.userInfo.address1}</TableCell>
                                        <TableCell align="left">{AdminSearchState.userInfo.address2}</TableCell>
                                        <TableCell align="left">{AdminSearchState.userInfo.zip}</TableCell>
                                        <TableCell align="left">{AdminSearchState.userInfo.city}</TableCell>
                                        <TableCell align="left">{AdminSearchState.userInfo.state}</TableCell>
                                        <TableCell align="left">{AdminSearchState.userInfo.birthdate}</TableCell>
                                        <TableCell align="left">{AdminSearchState.userInfo.email}</TableCell>
                                    </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <span></span>
            }
            <h3>Get all active residents</h3>
            <Button color = "secondary" onClick = {handleSubmit2}>Get</Button>
            {
                AdminSearchState.activeApplications ?
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>User id</TableCell>
                                    <TableCell align="left">Room number</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {AdminSearchState.activeApplications.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell align="left">{row.user_id}</TableCell>
                                        <TableCell align="left">{row.roomnum}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <span></span>
            }
            <h3>Search User</h3>
            <label>First name:</label><br/>
            <input type="text" onChange={f1}/><br/>
            <label>Middle name:</label><br/>
            <input type="text" onChange={f2}/><br/>
            <label>Last name:</label><br/>
            <input type="text" onChange={f3}/>
            <br/>
            <Button color = "secondary" onClick = {handleSubmit3}>Search</Button>
            {
                AdminSearchState.userInfos ?
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell align="left">Middle Name</TableCell>
                                    <TableCell align="left">Last Name</TableCell>
                                    <TableCell align="left">SSN</TableCell>
                                    <TableCell align="left">Address1</TableCell>
                                    <TableCell align="left">Address2</TableCell>
                                    <TableCell align="left">Zip</TableCell>
                                    <TableCell align="left">City</TableCell>
                                    <TableCell align="left">State</TableCell>
                                    <TableCell align="left">Birth Date</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">User_ID</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {AdminSearchState.userInfos.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.firstname}
                                        </TableCell>
                                        <TableCell align="left">{row.middlename}</TableCell>
                                        <TableCell align="left">{row.lastname}</TableCell>
                                        <TableCell align="left">{row.ssn}</TableCell>
                                        <TableCell align="left">{row.address1}</TableCell>
                                        <TableCell align="left">{row.address2}</TableCell>
                                        <TableCell align="left">{row.zip}</TableCell>
                                        <TableCell align="left">{row.city}</TableCell>
                                        <TableCell align="left">{row.state}</TableCell>
                                        <TableCell align="left">{row.birthdate}</TableCell>
                                        <TableCell align="left">{row.email}</TableCell>
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
    );

}

export default AdminSearch;