import React from "react";
import {useSelector} from "react-redux";
import Rating from "@material-ui/lab/Rating/Rating";
import {makeStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";


const useStyles = makeStyles(() => ({
    daddy: {
        background: "#FFF5EE",
        height: '800px',
        width: '100%',
    },

    son: {
        margin: 'auto',
        position: 'relative',
        width: '550px',
        height: '700px',
        overflow: 'auto',

    },

    header: {
        margin: 'auto',
        position: 'relative',
        width: '550px',
        height: '50px',
    },

    root: {
        minWidth: 275,
    },

    title: {
        fontSize: 15,
    },

    title2: {
        fontSize: 12,
    },

}));

const Review = () => {

    const classes = useStyles();


    const reviewState = useSelector(appState => {
        return {
            reviews: appState.reviews
        };
    });




    return (
        <div className={classes.daddy}>
        <div className={classes.header}> <h3>Here is what they are saying!</h3></div>
        <div className={classes.son}>
        <div className={classes.all}>
            <Paper >
                    {
                        reviewState.reviews ?
                        reviewState.reviews.map((review) => (
                                <div>
                                    <Card className={classes.root} variant="outlined">
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                {review.username}
                                            </Typography>
                                            <Typography className={classes.title2} color="textSecondary" gutterBottom>
                                                {review.date}
                                            </Typography>
                                            <Rating
                                                name="read-only"
                                                value={review.star}
                                                readOnly
                                            />
                                            <Typography color="textSecondary" gutterBottom>
                                                {review.comment}
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                </div>

                            )
                        ): <span></span>

                    }
            </Paper>
        </div>
        </div>
        </div>
    );

}

export default Review;
