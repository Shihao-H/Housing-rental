import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button/Button";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import Paper from "@material-ui/core/Paper/Paper";
import EnhancedTable from "./AdminTable";
import React from "react";
import {getMaintenance} from "../actions/maintenance.action";


const AdminMaintenance = () => {


    const dispatch = useDispatch();

    const adminMaintenanceState = useSelector(appState => {
        return {
            maintenance: appState.maintenance
        };
    });


    const getUnhandledMaintenance = (event) => {
        event.preventDefault();
        dispatch(getMaintenance());

    };


    return (
        <div>
            <Button color = "primary" onClick = {getUnhandledMaintenance}>Show unhandled maintenance requests</Button>
            <TableContainer component={Paper}>
                {
                    adminMaintenanceState.maintenance ?
                        <EnhancedTable  component={'Maintenance'} rows = {adminMaintenanceState.maintenance}/>
                        :
                        <p></p>
                }
            </TableContainer>
        </div>
    );

}


export default AdminMaintenance;