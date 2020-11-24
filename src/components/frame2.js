import Grid from "@material-ui/core/Grid";
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import {useMediaQuery} from "react-responsive";
import mountain from '../assets/mountain.png'
import anuradha from '../newassets/anuradha.png'
import learn from '../newassets/learn.svg'
import fiftypercent from '../newassets/50.svg'
import anuradhasvg from '../newassets/anuradhasvg.svg'
import mampic from '../newassets/mampic.svg'
const Frame2 = ()=>{
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    return(
        <Grid container style={isPortrait?{height:'min-content',overflow:'hidden',backgroundImage: "url("+`${anuradhasvg}`+")",backgroundPosition:'-30px 0px'}:
            {height:'350vh',overflow:'hidden',backgroundRepeat:'no-repeat',backgroundImage: "url("+`${anuradhasvg}`+")",backgroundPosition:'-20px 0px'}} justify={"space-around"}  >
            <Grid item xs={10} lg={5}>
                <img src={fiftypercent} height={200} alt=""/>
            </Grid>
            <Grid item xs={10} lg={4} style={isPortrait?{position:'static'}:{position:'relative',top:50}}>
                <h2>Increase in marks & conceptualization
                    by learning with the help of Augmented Reality</h2>
            </Grid>
            <Grid item xs={10} style={{textAlign:'left'}}>
                <img src={learn} height={50} alt=""/>
                <h3>Our courses are designed by renowned educators
                    to help students bring practicality into the heart
                    of learning.</h3>
            </Grid>

            <Grid item container style={isPortrait?{position:'static'}:{position:'relative',top:-100,left:200}}>
                <Grid item lg={5} xs={12}>
                    <img src={mampic} height={300} alt=""/>
                </Grid>
                <Grid item lg={6} xs={12} >
                    <div
                        data-aos={'fade-in'}
                        data-aos-delay="100"
                        style={{paddingLeft:10}}
                    >
                        <p >Anuradha Mathur <br/> <span>HOD-Kalam Labs</span></p>
                        <p>Mrs Anuradha Madhur is one of the most celebrated <br/> Physisicts in India. She has been core authors of Physics <br/>NCERT Textbooks of Class 11th and 12th. She has <br/>previously taught at Harvard University, USA and ex- HOD<br/> Physics NCERT.<br/> <br/>At Kalam Labs, she guides students across Globe to Study<br/> Science Experimentally.</p>
                    </div>
                </Grid>
            </Grid>

        </Grid>
        // <img src={anuradhasvg} style={{width:'100vw'}} alt=""/>
        // <anuradha height={'200px'} width={'300px'}/>
    )
}
export default Frame2
