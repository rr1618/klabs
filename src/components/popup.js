import React, {useContext, useEffect, useState} from "react";
import "aos/dist/aos.css"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Logo from "../assets/kalamLogo.png";
import capture from '../assets/capture.png'
import CloseIcon from '@material-ui/icons/Close';
import {useMediaQuery} from "react-responsive";
import teach from '../assets/popupteach.png'
import partner from '../assets/partner.png'
import partnermobile from '../assets/partnermobile.png'
import teachmobile from '../assets/popupteachmobile.png'
import capturemobile from '../assets/capturemobile.png'
import 'fontsource-roboto';
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import {PopupContext} from '../App'
const Popup =()=>{
    const {modalIsOpen,setIsOpen} =useContext(PopupContext);
    useEffect(()=>{

    },[modalIsOpen])
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })


    const handleClose = () => {
        console.log("clicked")
        setIsOpen(false);
    };
    return(
        <Grid container justify={'center'} className={'popup'}  >
            <Grid item container md={6} xs={12} justify={'flex-start'} >
                {isPortrait&&<Grid item container style={{textAlign:'right',cursor:'pointer'}}>
                    <Grid item xs={12}>
                        <HighlightOffIcon onClick={handleClose}/>
                    </Grid>
                </Grid>}
                <Grid item>
                    <Paper elevation={1} style={{padding:'0px 15px 0px 15px',borderRadius:10}}>
                        <p style={{fontWeight:'lighter',fontSize:'3em'}}> Scientific Explorer <br/><span style={{color:"#FFA800",fontSize:'.5em'}}><StarIcon /><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/> <span >4.8</span> <span style={{color:"black",marginLeft:10}}>471 Ratings</span></span></p>

                    </Paper>
                </Grid>

                <Grid item xs={12}></Grid>
                <Grid item>
                    <Paper elevation={5} style={{borderRadius:20,marginBottom:10}}>
                        <button style={{borderRadius:20,backgroundColor:'white',borderStyle:'none',padding:'15px 35px 15px 35px',fontSize:'1.2em',fontWeight:'lighter'}}><strong>Enroll Now</strong></button>
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <strong>Sponsored By <br/></strong>
                    <span>Elixar Systems, Happee Learning France, Ed Tech <br/> Council France</span>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}  >
                    <strong style={{fontFamily:'Roboto'}}>About The Course <br/></strong>
                    <span>An Augmented Reality Based Science Exploration  based Active learning programme, to enable
                    Scientific Learning Among Students. AR Based
                    module, has been declared top international education by Finnish Government.</span>
                </Grid>
                <Grid item>
                    {isPortrait? <img src={teachmobile} style={{width:'80vw'}} alt=""/>:
                        <img src={teach}  alt=""/>
                    }
                </Grid>
            </Grid>
            <Grid item container  xs={12} md={6} justify={'center'} style={{textAlign:'center'}}>
                {!isPortrait&&<Grid item container style={{textAlign:'right',cursor:'pointer'}}>
                    <Grid item xs={12}>
                        <HighlightOffIcon onClick={handleClose}/>
                    </Grid>
                </Grid>}
                <Grid item xs={12}>
                    <img src={Logo} height={150} width={200} style={{borderStyle:'solid',borderWidth:1,borderRadius:10,borderColor:'blue'}} alt=""/>
                </Grid>
                <Grid item  >

                    {isPortrait?<img src={capturemobile} alt=""/>: <img src={capture} alt=""/>}
                </Grid>
                <Grid container item md={7} xs={12} justify={'space-around'} >

                    {isPortrait?<img src={partnermobile} alt=""/>: <img src={partner} alt=""/>}

                </Grid>


                </Grid>
            </Grid>

    )
}
export default Popup