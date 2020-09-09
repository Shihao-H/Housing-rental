import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEmailUs} from "../actions/emailUs.action";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import Button from "@material-ui/core/Button/Button";
import EnhancedTable from "./AdminTable";



const AdminEu = () => {


    const dispatch = useDispatch();

    const adminEuState = useSelector(appState => {
        return {
            eu: appState.eu,
        };
    });

    const getUnhandledEu = (event) => {
        event.preventDefault();
        dispatch(getEmailUs());

    };




    return (

            <div>
                <Button color = "primary" onClick = {getUnhandledEu}>Show unhandled emails</Button>
            <TableContainer>
                {
                    adminEuState.eu ?
                        <EnhancedTable  component={'Eu'} rows = {adminEuState.eu}/>
                        :
                        <span></span>
                }
            </TableContainer>
        </div>

    );

}

export default AdminEu;