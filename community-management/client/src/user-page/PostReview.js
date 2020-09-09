
import React, {useState} from "react";
import Box from "@material-ui/core/Box/Box";
import Rating from "@material-ui/lab/Rating/Rating";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button/Button";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import {getReviews, postReviews} from "../actions/review.action";
import './PostReview.scss';
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormGroup from "@material-ui/core/FormGroup/FormGroup";
import {appConstants} from "../constants/constant";


const PostReview = () => {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const [anonymous, setAnonymous] = useState(false);

    const setComment = (event) => {
        const newReview = {...review};
        newReview.comment = event.target.value;
        setReview(newReview);
    };

    const setStar = (event) => {
        const newReview = {...review};
        newReview.star = event.target.value;
        setReview(newReview);
    };

    const reviewState = useSelector(appState => {
        return {
            user: appState.user,
            response: appState.response,
            msg: appState.response ?
                appConstants.POST_REVIEW_SUCCESS_MESSAGE :
                appConstants.POST_REVIEW_SUCCESS_MESSAGE
        };
    });

    const handleChange = (event) => {
        event.preventDefault();
        setAnonymous(!anonymous);
    };

    const [review, setReview] = React.useState(
        {
            username: '',
            star: 3,
            comment: '',
            date: new Date()
        }
    )


    const post = () => {
        const newReview = {...review};
        if(anonymous===false)
        {
            newReview.username = reviewState.user.username;
        }
        if(anonymous===true)
        {
            newReview.username = "unknown";
        }

        dispatch(postReviews(newReview,
            () => {
                setOpen(true);
            },
            () => {
                setOpen(true);
            },
        ));

        setReview({
            username: '',
            star: 3,
            comment: '',
            date: new Date()
        });

        setTimeout(getReviews(),1000);
    }


    return(
        <div>
            <form>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Rate your experience</Typography>
                    <Rating
                        name="simple-controlled"
                        value={review.star}
                        onChange={setStar}
                    />
                </Box>

                <TextField
                    autoFocus
                    margin="dense"
                    id="comment"
                    label="comment"
                    multiline
                    fullWidth
                    rows={4}
                    value={review.comment}
                    onChange={setComment}
                />
                <FormControl component="fieldset">
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={anonymous} onChange={handleChange} name="anonymous" />}
                            label="Anonymous"
                        />
                    </FormGroup>
                </FormControl>
                <br/>
                <Button onClick = {post}>Post</Button>
                <Snackbar
                    className={reviewState.response ? 'success' : 'failure'}
                    open={open}
                    onClose={() => setOpen(false)}
                    autoHideDuration={3000}
                    message={<span>{reviewState.msg}</span>}
                />
            </form>
        </div>
    );

}


export default PostReview;