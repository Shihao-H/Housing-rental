import React, {useState} from 'react';
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import {makeStyles} from "@material-ui/core";
import clsx from "clsx";
import {emailUs} from "../actions/emailUs.action";
import {applyMiddleware as dispatch} from "redux";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));



export default function EmailUs() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    const [eu, setEu] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
        date: '',
        status: 'not replied'
    });

    const f1 = (event) => {
        const newEu = {...eu};
        newEu.firstname = event.target.value;
        setEu(newEu);
    };

    const f2 = (event) => {
        const newEu = {...eu};
        newEu.lastname = event.target.value;
        setEu(newEu);
    };

    const f3 = (event) => {
        const newEu = {...eu};
        newEu.email = event.target.value;
        setEu(newEu);
    };


    const f4 = (event) => {
        const newEu = {...eu};
        newEu.phone = event.target.value;
        setEu(newEu);
    };

    const f5 = (event) => {
        const newEu = {...eu};
        newEu.message = event.target.value;
        setEu(newEu);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleSubmit = (event) => {
        setOpen(false);
        // const newEu = {...eu};
        // newEu.date = new Date();
        // setEu(newEu);
        eu.date = new Date();
        console.log(eu.date);

        event.preventDefault();
        dispatch(emailUs(
            eu,
            () => {
                setOpen(false);
            },
            () => setOpen(open)
        ));
        setEu({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            message: '',
            date: '',
            status: 'not replied'
        });

    };


    return (
    <div>
        <Button variant="outlined" color = "default" onClick={handleClickOpen}>
            Email Us
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Send us a message</DialogTitle>
            <DialogContent>
                <TextField
                    className={clsx(classes.margin, classes.textField)}
                    autoFocus
                    margin="dense"
                    required id="first-name"
                    label="First Name"
                    value={eu.firstname}
                    onChange={f1}

                />
                <TextField
                    className={clsx(classes.margin, classes.textField)}
                    autoFocus
                    margin="dense"
                    required id="last-name"
                    label="Last Name"
                    value={eu.lastname}
                    onChange={f2}

                />
                <TextField
                    autoFocus
                    margin="dense"
                    required id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    value={eu.email}
                    onChange={f3}

                />
                <TextField
                    autoFocus
                    margin="dense"
                    required id="phone"
                    label="Phone"
                    type="number"
                    fullWidth
                    value={eu.phone}
                    onChange={f4}
                />

                <br/>
                <br/>

                <TextField
                    autoFocus
                    margin="dense"
                    id="message"
                    label="Message"
                    multiline
                    fullWidth
                    rows={4}
                    value={eu.message}
                    onChange={f5}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} color="default">
                    Send
                </Button>
            </DialogActions>
        </Dialog>
    </div>
);
}