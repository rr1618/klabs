import Grid from "@material-ui/core/Grid";
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import logo from '../assets/logo.png'

const Frame3 = ()=>{
    useEffect(() => {

        Aos.init({duration: 1000,
            // disable:'mobile'
        })
    }, [])
    return(<div style={{backgroundColor:'#272330',color:'white',paddingTop:100,paddingBottom:100}}>

        <Grid container   justify="center"
               className={'kalamfooter'}>
            <Grid item container xs={12} style={{marginLeft:60}}  >
                <Grid item>
                    <img src={logo} height={50} style={{marginTop:19}} alt=""/>
                </Grid>
                <Grid item>
                    <p style={{color:'white',fontWeight:'bolder'}}>KALAM <br/>LABS</p>
                </Grid>
            </Grid>

                <Grid item xs={11} md={3}>
                    <p>'Innovation of The Year: 2019' <br/></p>
                    <div
                        data-aos={'slide-up'}
                    >
                        <span>-IISc Banglore</span>
                    </div>
                </Grid>
                <Grid item xs={11} md={3}>
                    <p>'‘Top Ten UnderGraduate<br/> Innovation Start-Up’' </p>
                    <div
                        data-aos={'slide-up'}
                    ><span>- Department of Science and Technology GOI & Tata Trust</span></div>
                </Grid>
                <Grid item xs={11} md={3}>
                    <p>'‘International Top 10 Higher Education Innovation’' <br/> </p>
                    <div
                        data-aos={'slide-up'}
                    ><span>- Government of Finland</span></div>
                </Grid>

        </Grid>
    </div>)
}
export default Frame3