import React from "react";
import {getTr} from "../actions/tr.action";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button/Button";
import Paper from "@material-ui/core/Paper/Paper";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import EnhancedTable from "./AdminTable";


const AdminTr = () => {

    const dispatch = useDispatch();

    const adminTrState = useSelector(appState => {
        return {
            tr: appState.tr
        };
    });


    const getUnhandledTr = (event) => {
        event.preventDefault();
        dispatch(getTr());

    };


    return (
        <div>
            <Button color = "primary" onClick = {getUnhandledTr}>Show unhandled tour reservations</Button>
            <TableContainer component={Paper}>
                {
                    adminTrState.tr ?
                        <EnhancedTable  component={'Tr'} rows = {adminTrState.tr}/>
                        :
                        <p></p>
                }
            </TableContainer>
        </div>
    );

}

export default AdminTr;