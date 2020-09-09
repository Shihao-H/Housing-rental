import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from "react-redux";
import {getPayments, putPayments} from "../actions/userPayments.action";
import Button from "@material-ui/core/Button/Button";
import Collapse from "@material-ui/core/Collapse/Collapse";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import TextField from "@material-ui/core/TextField/TextField";


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const Transaction = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const transactionState = useSelector(appState => {
        return {
            user: appState.user,
            userPayments: appState.userPayments

        };
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = () => {
        dispatch(getPayments(transactionState.user.id))
    };

    // (function () {
    //     console.log('data: '+transactionState.userPayments);
    // })();

    const pay = (id) => {
        handleClose();
        let data = transactionState.userPayments;
        let holder;
        for(let value of data)
        {
            if(id===value.id)
            {
                holder = value;
                dispatch(putPayments(holder));
            }

        }


    }

            return (
                <div>
                <div>
                    <Button onClick = {handleChange}>Show my payment histories</Button>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Amount $</TableCell>
                                        <TableCell align="left">Memo</TableCell>
                                        <TableCell align="left">Date</TableCell>
                                        <TableCell align="left">Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {

                                        transactionState.userPayments ?

                                            transactionState.userPayments.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row">
                                                {row.amount}
                                            </TableCell>
                                            <TableCell align="left">{row.memo}</TableCell>
                                            <TableCell align="left">{row.date}</TableCell>
                                            {

                                                row.status === 'unpaid' ?
                                                    <TableCell align="left">
                                                        <div>
                                                            {row.status} {" "}
                                                            <Button color="primary" onClick={handleClickOpen}>Pay</Button>
                                                            <Dialog
                                                                open={open}
                                                                onClose={handleClose}
                                                                aria-labelledby="alert-dialog-title"
                                                                aria-describedby="alert-dialog-description"
                                                            >
                                                                <DialogTitle id="alert-dialog-title">{"Online Banking Payment"}</DialogTitle>
                                                                <DialogContent>
                                                                    <TextField
                                                                        id="standard-required"
                                                                        label="Bank routing number"
                                                                        type = "number"
                                                                    />
                                                                    <br/>
                                                                    <TextField
                                                                        id="standard-password-input"
                                                                        label="Account number"
                                                                        type="password"
                                                                    />

                                                                </DialogContent>
                                                                <DialogActions>
                                                                    <Button onClick = {() => {pay(row.id)}} color="primary">
                                                                        Pay now
                                                                    </Button>
                                                                </DialogActions>
                                                            </Dialog>
                                                        </div>
                                                    </TableCell>
                                                    :
                                                    <TableCell align="left">{row.status}</TableCell>
                                            }
                                        </TableRow>

                                        ))
                                        :
                                            <span></span>

                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>

                </div>
                <div>
                </div>
                </div>
            );



}

export default Transaction;


