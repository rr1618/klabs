import { TextField } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import MediaCard from "./card";
import Paper from "@material-ui/core/Paper";
import conquerer from "../assets/conquerer.png";
import kalamcollage from '../assets/collage.png'
import Button from '@material-ui/core/Button';
import Carousel from 'react-material-ui-carousel'
import {useMediaQuery} from "react-responsive";
import React, {useEffect} from "react";
import Aos from "aos";
import hod from '../assets/hod.jpg'
import Slide from "./slider";
import "aos/dist/aos.css"
import faraz from "../assets/faraz.png";
import sasakt from "../assets/sasakt.jpg";
import harshit from '../assets/harshit.jpg'

var items = [
    {
        img: faraz,
        name:'Ahmad Faraaz',
        description: "Co-Founder",
        linkedin:'https://www.linkedin.com/in/ahmad-faraaz/'
    },
    {
        img: sasakt,
        name:'Sashakt Tripathi',
        description: "Co-Founder",
        linkedin:'https://www.linkedin.com/in/ahmad-faraaz/'
    },
    {
        img: harshit,
        name:'Harshit  Awasthi',
        description: "Co-Founder",
        linkedin:'https://www.linkedin.com/in/sashakt-tripathi/'
    }
]
const Frame5=()=>{
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    useEffect(() => {

        Aos.init({duration: 1000,
            // disable:'mobile'
        })
    }, [])
    return(<Grid container justify={'center'}  >
        <Grid item xs={12} >
            <div
                data-aos={'slide-up'}
            >
                <p style={{color:'#C160E5',textAlign:'center',fontWeight:'bolder',fontSize:20}}>PEOPLE</p>
            </div>

        </Grid>
        <Grid item lg={12}>
            <div
                data-aos={'fade-in'}
                data-aos-delay="100"
            >
                <p id={'coursesare'}>Courses are designed by renowned educators <br/> to help students bring practicality into the heart <br/> of learning.</p>
            </div>

        </Grid>
        <Grid item container lg={12}  justify={'center'} >
            <Grid item xs={12} lg={8} >
                <Paper elevation={5} id={'anuradha'}  >

                    <Grid container justify={'space-between'} >
                        <Grid item lg={6}>
                            <div
                                data-aos={'fade-in'}
                                data-aos-delay="100"
                            >
                            <p >Anuradha Mathur <br/> <span>HOD-Kalam Labs</span></p>
                            <p>Mrs Anuradha Madhur is one of the most celebrated <br/> Physisicts in India. She has been core authors of Physics <br/>NCERT Textbooks of Class 11th and 12th. She has <br/>previously taught at Harvard University, USA and ex- HOD<br/> Physics NCERT.<br/> <br/>At Kalam Labs, she guides students across Globe to Study<br/> Science Experimentally.</p>
                            </div>
                        </Grid>
                        <Grid item lg={5} >
                            {isPortrait? <img src={hod} height={200}  alt=""/>:<img src={hod} style={{height:300,width:'100%'}}  alt=""/>}

                        </Grid>
                    </Grid>

                </Paper>

            </Grid>
            {isPortrait?<Grid justify={'center'} container xs={12} style={{margin:10,marginBottom:30}}>
                <Grid item >
                    <Carousel>
                        {
                            items.map( (item, i) => <MediaCard key={i} name={item.name} img={item.img} descriptioin={item.description}/> )
                        }
                    </Carousel>
                </Grid>
            </Grid>:<Grid item container xs={12} justify={'space-evenly'} style={{margin:10,marginBottom:60}}>
                <Grid item>
                    <MediaCard name={'Harshit Awasthi'} img={harshit} description={'Co-founder'} linkedin={'https://www.linkedin.com/in/harshit016/'}/>
                </Grid>
                <Grid item>
                    <MediaCard name={'Ahmad Faraaz'} img={faraz} description={'Co-founder'} linkedin={'https://www.linkedin.com/in/ahmad-faraaz/'}/>
                </Grid><Grid item>
                <MediaCard name={'Sashakt Tripathi'} img={sasakt} description={'Co-founder'} linkedin={'https://www.linkedin.com/in/sashakt-tripathi/'}/>
            </Grid>


            </Grid>}


            <Grid item container justify={'center'} style={{padding:0}}>
                <Grid item >
                    <img src={kalamcollage} style={{width:'100%'}} alt=""/>
                </Grid>
            </Grid>
        </Grid>
    </Grid>)
}
export default Frame5