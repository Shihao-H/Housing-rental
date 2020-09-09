import React, {useState} from 'react';
import Button from "@material-ui/core/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {issueBill, issueMonthly} from "../actions/issurBill.action";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import {appConstants} from "../constants/constant";

const AdminIssueBill = () => {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const [open2, setOpen2] = useState(false);

    const issueBillState = useSelector(appState => {
        return {
            response3: appState.response3,
            response4: appState.response4,
            msg: appState.response3 ?
                appConstants.ISSUE_MONTHLY_SUCCESS_MESSAGE:
                appConstants.ISSUE_MONTHLY_FAILURE_MESSAGE,

            msg2: appState.response4 ?
                appConstants.ISSUE_BILL_SUCCESS_MESSAGE:
                appConstants.ISSUE_MONTHLY_FAILURE_MESSAGE
        };
    });

    const [ph, setPh] = useState({
        uid: '',
        amount: '',
        memo: '',
        date: new Date(),
        status: 'unpaid'
    });

    const [month, setMonth] = useState({
        amount: '',
        memo: '',
        type: '',
        date: new Date()
    });

    const f1 = (event) => {
        const newPh = {...ph};
        newPh.uid = event.target.value;
        setPh(newPh);
    };

    const f2 = (event) => {
        const newPh = {...ph};
        newPh.amount = event.target.value;
        setPh(newPh);
    };

    const f3 = (event) => {
        const newPh = {...ph};
        newPh.memo = event.target.value;
        setPh(newPh);
    };

    const f4 = (event) => {
        const newMonth = {...month};
        newMonth.amount = event.target.value;
        setMonth(newMonth);
    };

    const f5 = (event) => {
        const newMonth = {...month};
        newMonth.memo = event.target.value;
        setMonth(newMonth);
    };

    const f6 = (event) => {
        const newMonth = {...month};
        newMonth.type = event.target.value;
        setMonth(newMonth);
    };



    const monthly = (event) => {
        event.preventDefault();
        console.log(month);
        dispatch(issueMonthly(month,
                () => {
                    setOpen(true);
                },
                () => {
                    setOpen(true)
                }
            )
        );

    }

    const single = (event) => {
        event.preventDefault();
        dispatch(issueBill(ph,
            () => {
                setOpen2(true);
            },
            () => {
                setOpen2(true)
            }

        ));


    }


    return (
        <div>
            <h3>Issue bill to a specific user</h3>
            <label>User_id:</label><br/>
            <input type="number" onChange={f1}/><br/>
            <label>Amount:</label><br/>
            <input type="number" onChange={f2}/><br/>
            <label>Memo:</label><br/>
            <input type="text" onChange={f3}/><br/>
            <Button color = "primary" onClick = {single}>Issue</Button>

            <h3>Issue monthly payments to active users</h3>
            <label>Amount:</label><br/>
            <input type="number" onChange={f4}/><br/>
            <label>Memo:</label><br/>
            <input type="text" onChange={f5}/><br/>
            <label>Type:</label><br/>
            <select name="type" id="cars" onChange={f6}>
                <option value="1">Studio</option>
                <option value="2">2x2</option>
                <option value="3">3x3</option>
                <option value="4">4</option>
            </select>
            <br/>
            <Button color = "primary" onClick = {monthly}>Issue</Button>


            <Snackbar
                className={issueBillState.response3 ? 'success' : 'failure'}
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={3000}
                message={<span>{issueBillState.msg}</span>}
            />
            <Snackbar
                className={issueBillState.response4 ? 'success' : 'failure'}
                open={open2}
                onClose={() => setOpen2(false)}
                autoHideDuration={3000}
                message={<span>{issueBillState.msg2}</span>}
            />
        </div>
    );


}

export default AdminIssueBill;