import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const ApplicationBasicInfo = (props) => {
    const classes = useStyles();

    const f1 = (event) => {
        const newApply = {...props.userInfo};
        newApply.firstname = event.target.value;
        props.setUserInfo(newApply);
    };

    const f2 = (event) => {
        const newApply = {...props.userInfo};
        newApply.middlename = event.target.value;
        props.setUserInfo(newApply);
    };

    const f3 = (event) => {
        const newApply = {...props.userInfo};
        newApply.lastname = event.target.value;
        props.setUserInfo(newApply);
    };

    const f4 = (event) => {
        const newApply = {...props.userInfo};
        newApply.email = event.target.value;
        props.setUserInfo(newApply);
    };

    const f5 = (event) => {
        const newApply = {...props.userInfo};
        newApply.phone = event.target.value;
        props.setUserInfo(newApply);
    };

    const f6 = (event) => {
        const newApply = {...props.userInfo};
        newApply.birthdate = event.target.value;
        props.setUserInfo(newApply);
    };

    const f7 = (event) => {
        const newApply = {...props.userInfo};
        newApply.ssn = event.target.value;
        props.setUserInfo(newApply);
    };

    const f8 = (event) => {
        const newApply = {...props.userInfo};
        newApply.address1 = event.target.value;
        props.setUserInfo(newApply);
    };

    const f9 = (event) => {
        const newApply = {...props.userInfo};
        newApply.address2 = event.target.value;
        props.setUserInfo(newApply);
    };

    const f10 = (event) => {
        const newApply = {...props.userInfo};
        newApply.state = event.target.value;
        props.setUserInfo(newApply);
    };

    const f11 = (event) => {
        const newApply = {...props.userInfo};
        newApply.city = event.target.value;
        props.setUserInfo(newApply);
    };

    const f12 = (event) => {
        const newApply = {...props.userInfo};
        newApply.zip = event.target.value;
        props.setUserInfo(newApply);
    };



    return(
        <div>
            <h3 className="form section header">
                <span>
                    Personal Information
                </span>
            </h3>

            <TextField
                required id="standard-required1"
                label="Legal First Name"
                type="text"
                value={props.firstname}
                onChange={f1}
            />
            <br/>
            <TextField
                id="standard-required2"
                label="Middle Name"
                type="text"
                value={props.middlename}
                onChange={f2}
            />
            <br/>
            <TextField
                required id="standard-required3"
                label="Legal Last Name"
                type="text"
                value={props.lastname}
                onChange={f3}
            />
            <br/>
            <TextField
                id="standard-required4"
                label="Email"
                type="text"
                value={props.email}
                onChange={f4}
            />
            <br/>
            <TextField
                id="standard-required5"
                label="Primary Phone"
                type="number"
                value={props.phone}
                onChange={f5}
            />

            <h3 className="form section header">
                <span>
                    Secure Information
                </span>
            </h3>

            <TextField
                required id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                value={props.birthdate}
                onChange={f6}


            />
            <br/>
            <TextField
                required id="ssn"
                label="SSN"
                value={props.ssn}
                onChange={f7}
            />

            <h3 className="form section header">
                <span>
                    Current Addresses
                </span>
            </h3>


            <TextField
                required id="address1"
                label="Address Line 1"
                value={props.address1}
                onChange={f8}
            />
            <br/>
            <TextField
                id="address2"
                label="Address Line 2"
                value={props.address2}
                onChange={f9}
            />
            <br/>
            <select onChange={f10}>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
            <br/>
            <TextField
                id="city"
                label="City"
                value={props.city}
                onChange={f11}
            />
            <br/>
            <TextField
                id="zip"
                label="Zip"
                type="number"
                value={props.zip}
                onChange={f12}
            />


        </div>

    )
}

export default ApplicationBasicInfo;