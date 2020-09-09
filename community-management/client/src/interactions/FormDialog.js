import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import FormControl from "@material-ui/core/FormControl/FormControl";
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import {tourReserve} from "../actions/tr.action";
import {applyMiddleware as dispatch} from "redux";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton/ToggleButton";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1),
    },
    textField: {
        width: '25ch',
    },
    root: {
        background: "blue",
    },
    whiteColor: {
        color: "white"
    }
}));


export default function FormDialog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [alignment, setAlignment] = React.useState('left');

    const [tr, setTr] = useState({
        firstname: '',
        lastname: '',
        floorplan: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        sms: false,
        status: 'not finished'
    });

    const onTimeChange = event => {
        const newTr = {...tr};
        newTr.time = event.target.value;
        setTr(newTr);
    }


    const handlePickDate = event => {
        const newTr = {...tr};
        newTr.date = event.target.value;
        setTr(newTr);
        console.log(tr.date);
    };


    const handleChange = (event) => {
        // console.log(event.target.value);
        const newTr = {...tr};
        newTr.floorplan = event.target.value;
        setTr(newTr);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFormControl = (event) => {
        const newTr = {...tr};
        newTr.firstname = event.target.value;
        setTr(newTr);
    };

    const handleFormControl2 = (event) => {
        const newTr = {...tr};
        newTr.lastname = event.target.value;
        setTr(newTr);
    };

    const handleFormControl3 = (event) => {
        const newTr = {...tr};
        newTr.email = event.target.value;
        setTr(newTr);
    };


    const handleFormControl4 = (event) => {
        const newTr = {...tr};
        newTr.phone = event.target.value;
        setTr(newTr);
    };

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleSubmit = (event) => {
        console.log(tr);
        setOpen(false);
        event.preventDefault();
        dispatch(tourReserve(
            tr,
            () => {
                setOpen(false);
            },
            () => setOpen(true)
        ));
        setTr(
            {
                firstname: '',
                lastname: '',
                floorplan: '',
                phone: '',
                email: '',
                date: '',
                time: '',
                sms: false,
                status: 'not finished'
            }
        );

    };

    const handleToggleYesClick = () => {
        const newTr = {...tr};
        newTr.sms = 'Yes';
        setTr(newTr);
    }

    const handleToggleNoClick = () => {
        const newTr = {...tr};
        newTr.sms = 'No';
        setTr(newTr);
    }


    return (
        <div>
            <Button variant="outlined" color = "default" onClick={handleClickOpen}>
                Schedule a tour
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Schedule a tour</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Is there a particular floor plan you would like to tour?
                    </DialogContentText>
                    <FormControl>
                        {/*<InputLabel id="demo-simple-select-label">Floor plan name</InputLabel>*/}
                        <Select
                            classes={{
                                // root: classes.whiteColor,
                                icon: classes.whiteColor
                            }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={tr.floorplan}
                            onChange={handleChange}
                        >
                            <MenuItem value={'No, Thank you'}>No, Thank you</MenuItem>
                            <MenuItem value={'1x1(1 bed, 1 bath)'}>1x1(1 bed, 1 bath)</MenuItem>
                            <MenuItem value={'2x2(2 bed, 2 bath)'}>2x2(2 bed, 2 bath)</MenuItem>
                            <MenuItem value={'3x3(3 bed, 3 bath)'}>3x3(3 bed, 3 bath)</MenuItem>
                            <MenuItem value={'4x4(4 bed, 4 bath)'}>4x4(4 bed, 4 bath)</MenuItem>
                        </Select>
                    <br/>

                        <form noValidate>
                            <TextField
                                id="date"
                                label="Select a date"
                                type="date"
                                defaultValue="2020-06-17"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={handlePickDate}
                            />
                        </form>
                        <TextField
                            id="time"
                            label="Alarm clock"
                            type="time"
                            defaultValue="07:30"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            onChange={onTimeChange}
                        />

                    <br/>
                    <br/>

                    <DialogContentText>
                        Would you like us to send you SMS alert?
                    </DialogContentText>

                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="yes" aria-label="yes-b" onClick={handleToggleYesClick}>
                            Yes
                        </ToggleButton>
                        <ToggleButton value="no" aria-label="no-b" onClick={handleToggleNoClick}>
                            No
                        </ToggleButton>

                    </ToggleButtonGroup>

                    <TextField
                        className={clsx(classes.margin, classes.textField)}
                        autoFocus
                        margin="dense"
                        required id="first-name"
                        label="First Name"
                        value={tr.firstname}
                        onChange={handleFormControl}
                    />
                    <TextField
                        className={clsx(classes.margin, classes.textField)}
                        autoFocus
                        margin="dense"
                        required id="last-name"
                        label="Last Name"
                        value={tr.lastname}
                        onChange={handleFormControl2}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        required id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={tr.email}
                        onChange={handleFormControl3}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        required id="phone"
                        label="Phone"
                        type="number"
                        fullWidth
                        value={tr.phone}
                        onChange={handleFormControl4}
                    />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} color="default">
                        Schedule
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}