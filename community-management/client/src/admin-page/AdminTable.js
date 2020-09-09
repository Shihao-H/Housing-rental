import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import {useDispatch, useSelector} from "react-redux";
import {putEmailUs} from "../actions/emailUs.action";
import {putTr} from "../actions/tr.action";
import {putMaintenance} from "../actions/maintenance.action";
import {checkLogin} from "../actions/user.action";



// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

function createData(firstname, lastname, email, phone, date, status, message) {
    return { firstname, lastname, email, phone, date, status, message };
}


// const rows = [
//     createData('aaa', 'vvv', 'bbbb', 23424, '2020-06-01', 'not replied', 'gggggg'),
//     createData('oooooo', 'pppppp', 'eeeeeee', 1111111, '2020-06-01' , 'not replied', 'lllllll'),
//
//
// ];




const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
];



function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}


let headCells = [
    { id: 'firstname', numeric: false, disablePadding: true, label: 'First Name' },
    { id: 'lastname', numeric: false, disablePadding: false, label: 'Last Name' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
    { id: 'phone', numeric: true, disablePadding: false, label: 'Phone' },
    { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
    { id: 'message', numeric: false, disablePadding: false, label: 'Message' },
];

let headUidandRoom = [
    { id: 'roomnum', numeric: false, disablePadding: true, label: 'Room number' },
    { id: 'user_id', numeric: false, disablePadding: false, label: 'User id' },
]



// email, phone, date, status, message
let headCellsEu = [
    { id: 'firstname', numeric: false, disablePadding: true, label: 'First Name' },
    { id: 'lastname', numeric: false, disablePadding: false, label: 'Last Name' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
    { id: 'phone', numeric: true, disablePadding: false, label: 'Phone' },
    { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
    { id: 'message', numeric: false, disablePadding: false, label: 'Message' },
];

let headCellsTr = [
    { id: 'firstname', numeric: false, disablePadding: true, label: 'First Name' },
    { id: 'lastname', numeric: false, disablePadding: false, label: 'Last Name' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
    { id: 'phone', numeric: true, disablePadding: false, label: 'Phone' },
    { id: 'sms', numeric: true, disablePadding: false, label: 'SMS' },
    { id: 'time', numeric: true, disablePadding: false, label: 'Time' },
    { id: 'floorplan', numeric: true, disablePadding: false, label: 'Floor Plan' },
    { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
];


let headCellsMaintenance = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'roomNum', numeric: false, disablePadding: false, label: 'Room Number' },
    { id: 'doorNum', numeric: false, disablePadding: false, label: 'Door Number' },
    { id: 'issue', numeric: true, disablePadding: false, label: 'Issues' },
    { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
];

let headCellsApplications = [
    { id: 'id', numeric: false, disablePadding: true, label: 'Id' },
    { id: 'user_id', numeric: false, disablePadding: false, label: 'User_id' },
    { id: 'applicantgender', numeric: false, disablePadding: false, label: "Applicant's gender" },
    { id: 'applicantpet', numeric: false, disablePadding: false, label: "Does the applicant have a pet" },
    { id: 'applicantdrink', numeric: false, disablePadding: true, label: 'Does the applicant drink' },
    { id: 'applicantsmoke', numeric: true, disablePadding: false, label: 'Applicant smoke' },
    { id: 'floorplan', numeric: false, disablePadding: false, label: 'Floor plan' },
    { id: 'leaseterm', numeric: false, disablePadding: false, label: 'Lease term' },
    { id: 'neat', numeric: false, disablePadding: false, label: 'Neat' },
    { id: 'quite', numeric: false, disablePadding: false, label: 'Quite' },
    { id: 'roommatedrink', numeric: false, disablePadding: false, label: 'Mind your roommate drinking' },
    { id: 'roommategender', numeric: false, disablePadding: false, label: "Roommate's gender" },
    { id: 'roommatepet', numeric: false, disablePadding: false, label: 'Mind your roommate having pets' },
    { id: 'specificroommates', numeric: false, disablePadding: false, label: 'Specific roommates' },
    { id: 'date', numeric: true, disablePadding: false, label: 'Date' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' }
];



function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };



    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {
                    props.hc.map((headCell) => (
                    <TableCell align="left"
                        key={headCell.id}
                        // align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    // (function () {
    //
    //     console.log('EnhancedTableToolbar: ' + props.component);
    //     console.log('numSelected: ' + numSelected);
    // })();



    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (

                props.component==='Eu' ?
                    <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                        Unhandled Emails
                    </Typography>
                    :
                    props.component==='Tr' ?
                        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                            Unhandled Tour Reservations
                        </Typography>
                        :
                        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                            Unhandled Maintenance requests
                        </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton onClick = {props.deleteItem} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton aria-label="filter list">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function EnhancedTable(props) {


    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('date');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [data, setData] = useState(props.rows);
    const [isComponent, setIsComponent] = useState(false);
    const dispatch = useDispatch();


    const deleteItem = (event) => {

        event.preventDefault();

        console.log('enter delete');
        let temp = data;

        function removeItemOnce(arr, value) {
            let index = arr.indexOf(value);
            if (index > -1) {
                arr.splice(index, 1);
            }
            return arr;
        }


        let holder = []
        for (let item of selected) {
            console.log('item: '+item);
            for(let value of temp)
            {
                console.log('value: '+value);
                if(item===value.id)
                {
                    holder.push(value);
                    console.log('in');
                    removeItemOnce(data, value);
                }

            }
        }



        for (let i = 0; i < holder.length; i++) {
            if(props.component === 'Tr')
                dispatch(putTr(holder[i]));

            else if(props.component === 'Eu')
                dispatch(putEmailUs(holder[i]));

            else if(props.component === 'Maintenance')
                dispatch(putMaintenance(holder[i]));


        }
        setData(data);
        setSelected([]);


    }


    let hc = headCells;


    const begin = () => {
        if(props.component === 'Eu')
            hc = headCellsEu;
        else if(props.component === 'Tr')
            hc = headCellsTr;
        else if(props.component === 'Maintenance')
            hc = headCellsMaintenance;
        else if(props.component === 'matching')
            hc = headUidandRoom;
        else
            hc = headCellsApplications;
    }



    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar deleteItem={deleteItem} component = {props.component} numSelected={selected.length} />
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        {begin()}
                        <EnhancedTableHead
                            hc = {hc}
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(data, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id);
                                    // const isItemSelected = isSelected(row.firstname);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.id)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={
                                                props.component==='Eu' ?
                                                        row.id :
                                                props.component==='Tr' ?
                                                        row.id :
                                                    row.name
                                            }
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </TableCell>
                                            {
                                                props.component === 'Eu' ?
                                                    <>
                                                        <TableCell component="th" id={labelId} scope="row">
                                                            {row.firstname}
                                                        </TableCell>
                                                        <TableCell align="left">{row.lastname}</TableCell>
                                                        <TableCell align="left">{row.email}</TableCell>
                                                        <TableCell align="left">{row.phone}</TableCell>
                                                        <TableCell align="left">{row.date}</TableCell>
                                                        <TableCell align="left">{row.status}</TableCell>
                                                        <TableCell align="left">{row.message}</TableCell>
                                                    </>

                                                    :

                                                    props.component === 'Tr' ?

                                                        <>

                                                            <TableCell component="th" id={labelId} scope="row">
                                                            {row.firstname}
                                                            </TableCell>
                                                            <TableCell align="left">{row.lastname}</TableCell>
                                                            <TableCell align="left">{row.email}</TableCell>
                                                            <TableCell align="left">{row.phone}</TableCell>
                                                            <TableCell align="left">{row.sms}</TableCell>
                                                            <TableCell align="left">{row.time}</TableCell>
                                                            <TableCell align="left">{row.floorplan}</TableCell>
                                                            <TableCell align="left">{row.date}</TableCell>
                                                            <TableCell align="left">{row.status}</TableCell>
                                                        </>

                                                    :
                                                    props.component === 'Maintenance' ?

                                                        <>
                                                            <TableCell component="th" id={labelId} scope="row">
                                                            {row.name}
                                                            </TableCell>
                                                            <TableCell align="left">{row.roomNum}</TableCell>
                                                            <TableCell align="left">{row.doorNum}</TableCell>
                                                            <TableCell align="left">{row.issue}</TableCell>
                                                            <TableCell align="left">{row.date}</TableCell>
                                                            <TableCell align="left">{row.status}</TableCell>
                                                        </>
                                                    :
                                                    props.component === 'matching' ?
                                                        <>
                                                            <TableCell component="th" id={labelId} scope="row">
                                                                {row.roomnum}
                                                            </TableCell>
                                                            <TableCell align="left">{row.user_id}</TableCell>

                                                        </>


                                                    :

                                                            <>
                                                            <TableCell component="th" id={labelId} scope="row">
                                                                {row.id}
                                                            </TableCell>
                                                            <TableCell align="left">{row.user_id}</TableCell>
                                                            <TableCell align="left">{row.applicantgender}</TableCell>
                                                            <TableCell align="left">{row.applicantpet}</TableCell>
                                                            <TableCell align="left">{row.applicantdrink}</TableCell>
                                                            <TableCell align="left">{row.applicantsmoke}</TableCell>
                                                            <TableCell align="left">{row.floorplan}</TableCell>
                                                            <TableCell align="left">{row.leaseterm}</TableCell>
                                                            <TableCell align="left">{row.neat}</TableCell>
                                                            <TableCell align="left">{row.quite}</TableCell>
                                                            <TableCell align="left">{row.roommatedrink}</TableCell>
                                                            <TableCell align="left">{row.roommategender}</TableCell>
                                                            <TableCell align="left">{row.roommatepet}</TableCell>
                                                            <TableCell align="left">{row.specificroommates}</TableCell>
                                                            <TableCell align="left">{row.date}</TableCell>
                                                            <TableCell align="left">{row.status}</TableCell>
                                                            </>


                                            }

                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </div>
    );
}
