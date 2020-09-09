import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from "@material-ui/core/Container/Container";
const useStyles = makeStyles((theme) => ({
    daddayDiv: {
        width: '100%',
        justifyContent: 'center',
        // background: 'linear-gradient(to right, #C0C0C0, #F5F5F5)',
        // background: '#F5F5F5',
        height: '1000px'
    },
    root: {
        width: '70%',
        justifyContent: 'center',
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        height: '1000px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
        justifyContent: 'center'
    },

    content: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        justifyContent: 'center'
    },
}));


// {/*<div className={classes.root}>*/}
const FAQ = () => {
    const classes = useStyles();

    return (
        <div className={classes.daddayDiv}>
            <Container className={classes.root}>
            <h1>General Leasing Questions</h1>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Can additional furniture be brought into the apartment?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                        You are welcome to bring additional furniture with you, but don’t forget that we fully furnished all of our apartments.
                        If you wish to replace some of our furniture and use yours instead,
                        you may be required to rent a storage space here on the property to store our furnishing. Storages are available in different sizes and in varied locations.
                        The best part is the price – they only run $5, $10 or $15 a month.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Can I pay my bill with a credit card? Is there an extra charge?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                        Yes! View your balance, submit electronic check, or pay with a Visa, MasterCard, American Express, or Discover from any computer or smartphone.
                        Visit UniononPlum.com and click the “Resident Login” button.
                        There is a 3 – 5 percent convenience fee to make payments with credit card, or $1.50 fee for eCheck.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Do you allow pets?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                        MSI is a pet friendly community!
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography className={classes.heading}>How are roommates matched?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                        Roommates can be matched in a couple different ways – either you tell us who you want to live with,
                        or if you don’t have roommates in mind, we are happy to do the matching for you!
                        We look closely at the information both you and your potential roommates have provided in your application and on your roommate matching card and work to find people that have the same or similar preferences.
                        Although we don’t guarantee a perfect match, you can rest assured that we do our best to find your perfect roommate.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                >
                    <Typography className={classes.heading}>How many people live there?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                        Every year the total number varies just slightly, but we have room for 229 residents.                   </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                >
                    <Typography className={classes.heading}>If I am over 21 do I need a guarantor?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                        Yes. All leases are required to have a guarantor. If an approved guarantor cannot be obtained,
                        EdR Management, Inc. will accept a security deposit of one (1) installment.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7a-content"
                    id="panel7a-header"
                >
                    <Typography className={classes.heading}>Is parking available?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                        We have a limited amount of reserved parking spaces available for lease on a first come, first served basis.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8a-content"
                    id="panel8a-header"
                >
                    <Typography className={classes.heading}>What if I need to cancel my lease?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                        Leases are legal contracts for the said term. Residents are responsible for the entire term of the lease.
                        We offer lease re-assignments for a $250 fee. Please see a leasing professional for further details.                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel9a-content"
                    id="panel9a-header"
                >
                    <Typography className={classes.heading}>What size are the beds?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                        Our beds are full-size, extra-long. We suggest you bring queen-sized sheets,
                        which will work well instead of paying higher prices for “special” sized sheets.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel10a-content"
                    id="panel10a-header"
                >
                    <Typography className={classes.heading}>
                        What types of leases are available?
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                        We offer 12 installment leases.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel11a-content"
                    id="panel11a-header"
                >
                    <Typography className={classes.heading}>
                        When do I put down a deposit?
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                        If you do not have an approved guarantor, you must pay a deposit
                        (equivalent to one (1) installment) within 10 days of signing your lease.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel11a-content"
                    id="panel11a-header"
                >
                    <Typography className={classes.heading}>
                        Will you send me a bill for each installment?
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.content}>
                        We do not send any invoices, but for your convenience, you can use our online resident portal to check your balance at any time.
                        However, payment is due at the first of the month and is consider late after 10:00AM on the 3rd.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            </Container>
        </div>
    );
}

export default FAQ;
