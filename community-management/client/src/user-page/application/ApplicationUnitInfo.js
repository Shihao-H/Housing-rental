import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper/Paper";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import Radio from "@material-ui/core/Radio/Radio";




const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));



const ApplicationUnitInfo = (props) => {

    const classes = useStyles();
    const [lease, setLease] = React.useState('');
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleChangeLease = (event) => {
        setLease(event.target.value);
        const newApply = {...props.apply};
        newApply.leaseterm = event.target.value;
        props.setApply(newApply);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        const newApply = {...props.apply};
        newApply.floorplan = event.target.value;
        props.setApply(newApply);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <div>
            <h2 className="form section header">
                <span>
                    Location
                </span>
            </h2>
        <p>On this step you will select a term, a floor plan, a unit space type, and your desired optional amenities.</p>
            <h3 className="form section header">
                <span>
                    1. Select your lease term
                </span>
            </h3>

            <FormControl className={classes.formControl}>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={lease}
                    onChange={handleChangeLease}
                >
                    <MenuItem value={'Annual (08/21/2020 - 07/31/2021)'}>
                        Annual (08/21/2020 - 07/31/2021)
                    </MenuItem>
                </Select>
            </FormControl>

            <h3 className="form section header">
                <span>
                    2. Select a Floor Plan
                </span>
            </h3>

            <Paper>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="plan" name="plan1" value={value} onChange={handleChange}>
                        <FormControlLabel value="Studio $1100" control={<Radio />} label="Studio $1100" />
                        <FormControlLabel value="2x2 $850" control={<Radio />} label="2x2 $850" />
                        <FormControlLabel value="3x3 $750" control={<Radio />} label="3x3 $750" />
                        <FormControlLabel value="4x4 $600" control={<Radio />} label="4x4 $600" />
                    </RadioGroup>
                </FormControl>
            </Paper>

        </div>
    );

}

export default ApplicationUnitInfo;