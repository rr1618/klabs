import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import './about.css'
import API from "../api-service";
import {useMediaQuery} from "react-responsive";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import airbus from '../assets/airbus.png'
import ceri from '../assets/ceri.png'
import dst from '../assets/DST-logo.jpg'
import mhrd from '../assets/mhrd.png'
import iitb from '../assets/iitb.png'
import lm from '../assets/lm.png'
import nvdia from '../assets/nvdia.png'
import iisc from '../assets/iisc.jpg'
import ncert from '../assets/ncert.jpg'
import tata from '../assets/tata.png'
import payu from '../assets/s1.svg'
import paytm from '../assets/s2.svg'
import rupay from '../assets/s3.svg'
import Aos from "aos";
import "aos/dist/aos.css"
import logo from '../assets/logo.png'

const About = () => {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const [email,setEmail] = useState('')
    useEffect(() => {

        Aos.init({duration: 1000,
            // disable:'mobile'
        })
    }, [email])
    return (
        <Grid container className={'about'}>
            <Grid item container justify={'center'} style={{padding: 8}}>
                <Grid item md={8} className={'whoweare'} >
                    <div
                        data-aos={'slide-up'}
                    >
                        <h5 style={{color: '#8A808E', fontSize: 20}}>Our Beliefs</h5>
                    </div>
                    <div
                        data-aos={'fade-in'}
                        data-aos-delay="100"
                    >
                    <p style={{fontSize:20}}>
                       We Believe Science should be Learnt as Exploration, not as a Memorization.

                    </p>
                    </div>
                </Grid>
                <Grid item md={8}>
                    <Paper elevation={3} style={{padding: 20}}>
                        <Grid container>
                            <Grid item container md={12}>
                                <Grid item xs={4} md={2}><img src={airbus} alt=""/></Grid>
                                <Grid item xs={4} md={2}><img src={iisc} alt=""/></Grid>
                                <Grid item xs={4} md={2}><img src={ceri} alt=""/></Grid>
                                <Grid item xs={4} md={2}><img src={iitb} alt=""/></Grid>
                                <Grid item xs={4} md={2}><img src={mhrd} alt=""/></Grid>
                                <Grid item xs={4} md={2}><img src={ncert} alt=""/></Grid>
                                <Grid item xs={4} md={3}><img src={tata} alt=""/></Grid>
                                <Grid item xs={4} md={3}><img src={lm} alt=""/></Grid>
                                <Grid item xs={6} md={3}><img src={dst} alt=""/></Grid>
                                <Grid item xs={4} md={3}><img src={nvdia} alt=""/></Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item container md={5} style={{marginTop:50,marginBottom:50}}>
                    <Grid item>
                        <strong>Stay in touch <br/> </strong><small style={{color: '#8373A5'}}>Share your email with us to keep on top
                            of our new corses and <br/> updates. Don’t worry we are in to education business we
                            understand privacy.</small>
                    </Grid>

                    <Grid item>
                        <input style={{
                            borderStyle: 'none',
                            backgroundColor: '#F2F2F2',
                            borderRadius: 20,
                            height: 40,
                            width: 240,
                            paddingLeft: 30,
                            marginTop:10,
                            outline:'none'
                        }} placeholder={'Your Email address'}
                               onInput={(e)=>setEmail(e.target.value)}
                               value={email}
                        />

                    </Grid>
                    <Grid item>
                        <Button variant={'contained'} color={'primary'} style={{
                            marginTop:10,
                            marginLeft: 80,
                            paddingRight: 20,
                            paddingLeft: 20,
                            borderRadius: 20
                        }}
                        onClick={()=>API.getInTouch({email:email}).then(res=>alert('response saved')).catch(err=>alert('please enter a valid email'))}>Submit</Button>
                    </Grid>
                </Grid>

            </Grid>

            <Grid item container className={'footer'} style={{backgroundColor: '#15111F', padding: 10}} justify={'center'}>
                <Grid item container xs={12} md={3}   >
                    <Grid item>

                        {isPortrait?<img src={logo}  style={{height:40,marginTop:2}} alt=""/>:<img src={logo}  style={{height:40,marginTop:15}} alt=""/>}
                    </Grid>
                    <Grid item>
                        <p style={{color:'white',fontWeight:'bolder'}}>KALAM <br/>LABS</p>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <p >Contact us <br/><small style={{color:'#8373A5'}}>Email: kalam-labs@elixarsystems.com <br/>Phone:+91 9140658594 </small></p>
                </Grid>
                <Grid item xs={12} container md={3}>

                    <Grid item className={'paymethods'}>
                        <p style={{color:'#8373A5'}}>We offer you multiple payment methods. Payment gateway partners use secure encryption technology
                            to keep your transaction details confidential at all times. You may use Internet Banking, Wallet
                            and QR Support to make your purchase.</p>
                        <img src={rupay} style={{marginRight:15}} alt=""/>
                        <img src={paytm}  style={{marginRight:15}} alt=""/>
                        <img src={payu}  alt=""/>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>

    )
}
export default About
