import React, {useState} from 'react';
import Alert from "@material-ui/lab/Alert/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle/AlertTitle";
import Container from "@material-ui/core/Container/Container";
import FormControl from "@material-ui/core/FormControl/FormControl";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField/TextField";
import clsx from "clsx";
import Button from "@material-ui/core/Button/Button";
import {applyMiddleware as dispatch} from "redux";
import {postMaintenance} from "../actions/maintenance.action";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import Dialog from "@material-ui/core/Dialog/Dialog";



const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    textField: {
        width: '25ch',
    },
}));

const Maintenance = () => {

    const [maintenance, setMaintenance] = useState({
        name:'',
        roomNum: '',
        doorNum: '',
        issue: '',
        date: '',
        status: 'not finished'
    });

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const f1 = (event) => {
        const newValue = {...maintenance};
        newValue.name = event.target.value;
        setMaintenance(newValue);
    };

    const f2 = (event) => {
        const newValue = {...maintenance};
        newValue.roomNum = event.target.value;
        setMaintenance(newValue);
    };

    const f3 = (event) => {
        const newValue = {...maintenance};
        newValue.doorNum = event.target.value;
        setMaintenance(newValue);
    };


    const f4 = (event) => {
        const newValue = {...maintenance};
        newValue.issue = event.target.value;
        setMaintenance(newValue);
    };


    const handleSubmit = (event) => {

        maintenance.date = new Date();

        event.preventDefault();
        dispatch(postMaintenance(
            maintenance,
            () => { console.log('maintenance success') },
            () => { console.log('maintenance failure') }
        ));

        setMaintenance({
            name:'',
            roomNum: '',
            doorNum: '',
            issue: '',
            date: '',
            status: 'not finished'
        });
        handleClickOpen();

    };





    return(
        <Container>
            <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            Please describe the issues <strong>as detail as</strong> you could, thanks
            </Alert>
                <TextField
                    className={clsx(classes.margin, classes.textField)}
                    autoFocus
                    margin="dense"
                    required id="name"
                    label="Name"
                    value={maintenance.name}
                    onChange={f1}

                />
                <TextField
                    className={clsx(classes.margin, classes.textField)}
                    autoFocus
                    margin="dense"
                    required id="roomNum"
                    label="Room number"
                    value={maintenance.roomNum}
                    onChange={f2}

                />
                <TextField
                    className={clsx(classes.margin, classes.textField)}
                    autoFocus
                    margin="dense"
                    required id="doorNum"
                    label="Door number"
                    type="text"
                    value={maintenance.doorNum}
                    onChange={f3}
                />
            <FormControl fullWidth className={classes.margin}>
                <TextField
                    autoFocus
                    label="type here"
                    id="requests"
                    variant="outlined"
                    multiline
                    rows={10}
                    value={maintenance.issue}
                    onChange={f4}
                />
            </FormControl>
            <Button onClick={handleSubmit} color="default">
                Submit
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">
                    You successfully submitted a maintenance request
                </DialogTitle>
            </Dialog>
        </Container>
    );

}

export default Maintenance;
