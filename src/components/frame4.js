import hardware from "../assets/2.jpg";
import hardwaremobile from "../assets/2mobile.jpg";
import Grid from "@material-ui/core/Grid";
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import {useMediaQuery} from "react-responsive";
const Frame4=()=>{
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    useEffect(() => {

        Aos.init({duration: 1000,
            // disable:'mobile'
        })
    }, [])
    return(<Grid container className={'container'}
                 style={isPortrait?{textAlign:'center',backgroundImage: "url("+`${hardwaremobile}`+")"}:
        {textAlign:'center',backgroundSize:'cover',backgroundImage: "url("+`${hardware}`+")"}} >
        <Grid item container className={'overlay'} justify={'center'} alignItems={'center'}  style={{padding:10}}>

            <Grid item xs={12} style={{marginTop:150}}>
                <div
                    data-aos={'slide-up'}
                    data-aos-delay="100"

                >
                    <p id={'weteach'} style={{color:'white'}}>Make your kids a self learner
                    </p>
                </div>
                <div
                    data-aos={'slide-up'}
                    data-aos-delay="100"
                >

                    <p style={{color:'white'}}>Our Scientific Exploration Programmes are designed to make students explore and think on their own. <br/>
                        This freedom, enables your child to be an explorer of science instead of rote-learner.  <br/>  This increases their interest in science and provides a happy learning environment.
                    </p>
                </div>
            </Grid>

            <Grid item xs={12}>


            </Grid>
        </Grid>

    </Grid>)
}
export default Frame4