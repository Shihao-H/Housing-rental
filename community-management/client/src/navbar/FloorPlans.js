import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box/Box";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
    },
    extend: {
        height: '400px'
    }

}));



function TabPanel(props) {
    const { children, value, index, ...other } = props;


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



export default function FloorPlans() {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                    <Tab label="Floor plans" {...a11yProps(0)} />
                    <Tab label="Dynamic tour" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0} className={classes.root}>
                    <figure>
                        <img alt = {''} src={require('../images/1x1.png')}/>
                        <figcaption> Studio </figcaption>
                    </figure>
                    <figure>
                        <img alt = {''} src={require('../images/2x2.png')} />
                        <figcaption> 2x2 </figcaption>
                    </figure>
                    <figure>
                        <img alt = {''} src={require('../images/3x3.png')} />
                        <figcaption> 3x3 </figcaption>
                    </figure>
                    <figure>
                        <img alt = {''} src={require('../images/4x4.png')} />
                        <figcaption> 4x4 </figcaption>
                    </figure>
                </TabPanel >
                <TabPanel value={value} index={1} className={classes.root}>
                        <h3>Explore yourself!</h3>
                        <iframe height="500"
                                width="750"
                                title="Google 360 Tour iframe"
                                name="Google 360 Tour"
                                frameBorder="0"
                                src="https://my.matterport.com/show/?m=RDxufgcDTJp&amp;play=1"
                        />
                    <div className={classes.extend}/>
                </TabPanel>
            </div>
        </div>
    );
}
