import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import image from '../images/thumbNailer.jpeg';
import image1 from '../images/thumbNailer1.jpeg';
import image2 from '../images/thumbNailer2.jpeg';
import image3 from '../images/thumbNailer3.jpeg';
import image4 from '../images/thumbNailer4.jpeg';
import image5 from '../images/thumbNailer5.jpeg';
import image6 from '../images/thumbNailer6.jpeg';
import image7 from '../images/thumbNailer7.jpeg';
import image8 from '../images/thumbNailer8.jpeg';
import image9 from '../images/thumbNailer9.jpeg';
import image10 from '../images/thumbNailer10.jpeg';
import image11 from '../images/thumbNailer11.jpeg';
import image12 from '../images/thumbNailer12.jpeg';
import image13 from '../images/thumbNailer13.jpeg';
import image14 from '../images/thumbNailer14.jpeg';
import image15 from '../images/thumbNailer15.jpeg';
import image16 from '../images/thumbNailer16.jpeg';
import image17 from '../images/thumbNailer17.jpeg';
import image18 from '../images/thumbNailer18.jpeg';
import image19 from '../images/thumbNailer19.jpeg';
import image20 from '../images/thumbNailer20.jpeg';
import image21 from '../images/thumbNailer21.jpeg';
import image22 from '../images/thumbNailer22.jpeg';
import image23 from '../images/thumbNailer23.jpeg';
import image24 from '../images/thumbNailer24.jpeg';
import image25 from '../images/thumbNailer25.jpeg';
import image26 from '../images/thumbNailer26.jpeg';
import image27 from '../images/thumbNailer27.jpeg';
import image28 from '../images/thumbNailer28.jpeg';
import image29 from '../images/thumbNailer29.jpeg';
import image30 from '../images/thumbNailer30.jpeg';
import './QuickLook.scss';
import Paper from "@material-ui/core/Paper/Paper";



const images = [image,image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,
    image11,image12,image13,image14,image15,image16,image17,image18,image19,image20,image21,
    image22,image23,image24,image25,image26,image27,image28,image29,image30];



const useStyles = makeStyles((theme) => ({
    photo: {
        height: '200px',
        width: '300px'
    }
}));

const QuickLook = () => {
    const classes = useStyles();


    // { images.map(({id, src, title, description}) =>
    //     <img key={id} src={src} title={title} alt={description} />)
    // }

    function FormRow(props) {

        return (
            <>
                {
                    props.images.map((e) =>
                            <Grid item xs={3} spacing={2}>
                                <Paper center>
                                    <img className={classes.photo} alt = {''} src={e}/>
                                </Paper>
                            </Grid>
                    )
                }

            </>
        );
    }




    return (
        <div className = "daddy">
            <br/>
            <br/>
        <div className="alignGrid">
            <div className="useless"/>
            <div className="right">
                <Paper>
                 <Grid container spacing={3}>
                     <Grid container item xs={12} spacing={4}>
                         <FormRow images={images.slice(0, 4)}/>
                     </Grid>
                     <Grid container item xs={12} spacing={4}>
                         <FormRow images={images.slice(4, 8)}/>
                     </Grid>
                     <Grid container item xs={12} spacing={4}>
                         <FormRow images={images.slice(8, 12)}/>
                     </Grid>
                     <Grid container item xs={12} spacing={4}>
                         <FormRow images={images.slice(12, 16)}/>
                     </Grid>
                     <Grid container item xs={12} spacing={4}>
                         <FormRow images={images.slice(16, 20)}/>
                     </Grid>
                     <Grid container item xs={12} spacing={4}>
                         <FormRow images={images.slice(20, 24)}/>
                     </Grid>
                     <Grid container item xs={12} spacing={4}>
                         <FormRow images={images.slice(24, 28)}/>
                     </Grid>
                     <Grid container item xs={12} spacing={4}>
                         <FormRow images={images.slice(28, 31)}/>
                     </Grid>
                 </Grid>
                </Paper>
            </div>
        </div>
        </div>

    );
}

export default QuickLook;