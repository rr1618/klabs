import React, {useEffect} from 'react';
import Carousel from 'react-material-ui-carousel'
import {useMediaQuery} from "react-responsive";

import { makeStyles } from '@material-ui/core/styles';
import MediaCard from "./card";
import {Paper} from '@material-ui/core'
import Button from "@material-ui/core/Button";
import sasakt from '../assets/sasakt.jpg'
import Grid from "@material-ui/core/Grid";
import faraz from '../assets/faraz.png'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
const Slide=(props)=>

{
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const classes = useStyles();
    var items = [
        {
            img: faraz,
            name:'Faraz Ahmad',
            description: "Co-Founder"
        },
        {
            img: sasakt,
            name:'Shasakt Tripathi',
            description: "Co-Founder"
        }
    ]
    useEffect(()=>{
        console.log(items[0].img)
    },[])

    return (
        <div >
            <Grid container item xs={12}>
                <Grid item>
                    {isPortrait? <Carousel>
                        {
                            items.map( (item, i) => <MediaCard key={i} name={item.name} img={item.img} descriptioin={item.description}/> )
                        }
                    </Carousel>:
                        <Grid container item justify={'center'} >
                            <Grid item xs={3}>
                                <MediaCard key={1} name={'Faraz Ahmad'} img={faraz} descriptioin={'Co-founder'}/>
                            </Grid>
                            <Grid item xs={3}>
                                <MediaCard key={2} name={'Faraz Ahmad'} img={faraz} descriptioin={'Co-founder'}/>
                            </Grid>
                            <Grid item xs={3}>
                                <MediaCard key={3} name={'Faraz Ahmad'} img={faraz} descriptioin={'Co-founder'}/>
                            </Grid>

                        </Grid>}

                </Grid>
            </Grid>

        </div>

    )
}

function Item(props)
{
    return (
        <Paper>
            <img src={props.item.img} height={300}/>
            <p>{props.item.name}</p>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default Slide