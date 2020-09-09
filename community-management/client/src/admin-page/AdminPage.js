import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AdminMaintenance from "./AdminMaintenance";
import AdminEu from "./AdminEu";
import AdminTr from "./AdminTr";
import AdminActivation from "./AdminActivation";
import AdminApplication from "./AdminApplication";
import './AdminPage.scss';
import EmailIcon from '@material-ui/icons/Email';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MoreIcon from '@material-ui/icons/More';
import AdminSearch from "./AdminSearch";
import SearchIcon from '@material-ui/icons/Search';
import AdminIssueBill from "./AdminIssueBill";


const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

const AdminPage = () => {
    const classes = useStyles();
    const [component, setComponent] = useState('user');


    return (
            <div className = "containerAdminPage">
                <div className = "left">
                    <List>
                        <ListItem button onClick={() => setComponent('applications')}>
                        <ListItemIcon>
                        <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Applications" />
                        </ListItem>

                        <ListItem button onClick={() => setComponent('tour reservations')}>
                            <ListItemIcon>
                                <MoreIcon />
                            </ListItemIcon>
                            <ListItemText primary="Tour reservations" />
                        </ListItem>


                        <ListItem button onClick={() => setComponent('customer emails')}>
                            <ListItemIcon>
                            <EmailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Customer Emails" />
                        </ListItem>


                        <ListItem button onClick={() => setComponent('maintenance requests')}>
                            <ListItemIcon>
                            <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Maintenance requests" />
                        </ListItem>

                        <ListItem button onClick={() => setComponent('activate/deactivate users')}>
                            <ListItemIcon>
                                <PeopleAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Activate/Deactivate users" />
                        </ListItem>

                        <ListItem button onClick={() => setComponent('search')}>
                            <ListItemIcon>
                                <SearchIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Search" />
                        </ListItem>

                        <ListItem button onClick={() => setComponent('issue bills')}>
                            <ListItemIcon>
                                <SearchIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Issue bills" />
                        </ListItem>

                    </List>
                </div>
                <div className = "right">
                        <main className={classes.content}>
                        {
                            component === 'applications' ?
                                <AdminApplication/>
                            :
                            component === 'maintenance requests' ?
                                <AdminMaintenance/>
                            :
                            component === 'tour reservations' ?
                                <AdminTr/>
                            :
                            component === 'customer emails' ?
                                <AdminEu/>
                            :
                            component === 'activate/deactivate users' ?
                                <AdminActivation/>
                            :
                            component === 'search' ?
                                <AdminSearch/>
                                :
                                <AdminIssueBill/>
                        }
                        </main>
                    </div>
            </div>

    );
}

export default AdminPage;
