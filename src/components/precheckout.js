import React, {useContext, useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import {useMediaQuery} from 'react-responsive'
import {FormSelectContext} from "../App";
import {
    useParams
} from "react-router-dom";
import Aos from "aos";
import Popup from "./popup";
import Popover from '@material-ui/core/Popover';
import conquerer from '../assets/conquerer.png'
import explorer from '../assets/explorer.png'
import {Form1, Form2, Form3,Form4} from "./paymentform";
import logo from "../assets/logo.png";

const Detail = (props) => {
    let { trial } = useParams();
    useEffect(() => {
        console.log(trial)
        Aos.init({duration: 1000,
            // disable:'mobile'
        })
    }, [])
    const isPortrait = useMediaQuery({query: '(orientation: portrait)'})
    if(trial=='buycourse')
    return (<React.Fragment>
        <Grid container item lg={6} justify={'center'} alignItems={'center'}>
            <Grid item xs={2} lg={1} style={{marginRight: 10}}>
                <img src={explorer} height={60} alt=""/>
            </Grid>
            <Grid item container direction={'column'} xs={8} lg={4}>
                <Grid item style={{color: 'white'}}>
                    <div
                        data-aos={'slide-up'}

                    >
                    <p>Winter School <br/><span style={{color: '#8A808E', fontSize: '13px'}}>


                    Course for class 1st to 10th</span>
                    </p></div>
                    {isPortrait ? <div></div> :
                       <div
                        data-aos={'slide-up'}
                        data-aos-delay="100"
                       > <p style={{fontSize: 13, fontFamily: "inherit"}}>World's First AR-based Science Course</p></div>}
                    <div
                        data-aos={'slide-up'}
                        data-aos-delay="200"
                    >
                    <span style={{color: '#8A808E', fontSize: '12px'}}>1 Week Course</span>
                    </div>
                    <div
                        data-aos={'slide-up'}
                        data-aos-delay="300"
                    >
                    <p>Rs. 499 <del style={{marginLeft: 80, textAlign: 'right'}}>Rs 1,599</del> <br/>
                    {/*<span*/}
                    {/*    style={{fontSize: 12, fontFamily: "sans-serif"}}>Price Per Class Rs 100</span>*/}
                    </p>
                    </div>
                </Grid>
            </Grid>
            <Grid item container direction={'column'} lg={12} justify={'center'} alignItems={'center'}>
                {isPortrait ? <div></div> : <hr style={{width: '60%'}}/>}
                <Grid item>

                </Grid>

                <Grid item style={{color: 'white'}}>
                    {!isPortrait && <p style={{fontSize: '15px'}}>How it works</p>}
                </Grid>
                {isPortrait ? <div></div> :
                    <Grid item container direciton={'column'} justify={'center'} alignItems={'center'} lg={12}
                          style={{color: 'white', fontSize: '13px'}} className={'howitworks'}>
                        <Grid item container lg={8}>
                            <Grid item lg={3}>
                                <p><span>1 </span></p>
                            </Grid>
                            <Grid item lg={8}>

                                <p>Fill the Registration Form</p>

                            </Grid>
                        </Grid><Grid item container lg={8}>
                        <Grid item lg={3}>
                            <p><span>2 </span></p>
                        </Grid>
                        <Grid item lg={8}>

                            <p>Pay the required amount</p>

                        </Grid>
                    </Grid><Grid item container lg={8}>
                        <Grid item lg={3}>
                            <p><span>3 </span></p>
                        </Grid>
                        <Grid item lg={8}>

                                <p>You will be getting a confirmation mail and order invoice</p>
                        </Grid>
                    </Grid>
                        <Grid item container lg={8}>
                        <Grid item lg={3}>
                            <p><span>4 </span></p>
                        </Grid>
                        <Grid item lg={8}>

                            <p><p>You will be contacted regarding the exact details of the Course after registration.</p></p>

                        </Grid>
                    </Grid>
                    </Grid>}
            </Grid>


        </Grid>

    </React.Fragment>)
    if(trial=='trial')
    return (<React.Fragment>
        <Grid container item lg={6} justify={'center'} alignItems={'center'}>
            <Grid item xs={2} lg={1} style={{marginRight: 10}}>
                <img src={conquerer} height={60} alt=""/>
            </Grid>
            <Grid item container direction={'column'} xs={8} lg={4}>
                <Grid item style={{color: 'white'}}>
                    <div
                        data-aos={'slide-up'}

                    >
                    <p>Engineering Conquerer <br/><span style={{color: '#8A808E', fontSize: '13px'}}>


                    Course for class 11th to 12th</span>
                    </p></div>
                    {isPortrait ? <div></div> :
                       <div
                        data-aos={'slide-up'}
                        data-aos-delay="100"
                       > <p style={{fontSize: 13, fontFamily: "inherit"}}>Simplify JEE/NEET preparation through Practical Science Experience</p></div>}
                    <div
                        data-aos={'slide-up'}
                        data-aos-delay="200"
                    >
                    <span style={{color: '#8A808E', fontSize: '12px'}}>2 Weeks Course</span>
                    </div>
                    <div
                        data-aos={'slide-up'}
                        data-aos-delay="300"
                    >
                    <p>Rs. 499 <del style={{marginLeft: 80, textAlign: 'right'}}>Rs 5,999</del> <br/> <span
                        style={{fontSize: 12, fontFamily: "sans-serif"}}>Price Per Class Rs 100</span></p>
                    </div>
                </Grid>
            </Grid>
            <Grid item container direction={'column'} lg={12} justify={'center'} alignItems={'center'}>
                {isPortrait ? <div></div> : <hr style={{width: '60%'}}/>}
                <Grid item>

                </Grid>

                <Grid item style={{color: 'white'}}>
                    {!isPortrait && <p style={{fontSize: '15px'}}>How it works</p>}
                </Grid>
                {isPortrait ? <div></div> :
                    <Grid item container direciton={'column'} justify={'center'} alignItems={'center'} lg={12}
                          style={{color: 'white', fontSize: '13px'}} className={'howitworks'}>
                        <Grid item container lg={8}>
                            <Grid item lg={3}>
                                <p><span>1 </span></p>
                            </Grid>
                            <Grid item lg={8}>

                                <p>Fill the Registration Form</p>

                            </Grid>
                        </Grid><Grid item container lg={8}>
                        <Grid item lg={3}>
                            <p><span>2 </span></p>
                        </Grid>
                        <Grid item lg={8}>

                            <p>Pay the required amount</p>

                        </Grid>
                    </Grid><Grid item container lg={8}>
                        <Grid item lg={3}>
                            <p><span>3 </span></p>
                        </Grid>
                        <Grid item lg={8}>

                                <p>You will be getting a confirmation mail and order invoice</p>
                        </Grid>
                    </Grid>
                        <Grid item container lg={8}>
                        <Grid item lg={3}>
                            <p><span>4 </span></p>
                        </Grid>
                        <Grid item lg={8}>

                            <p>You will be contacted regarding the exact details of the Course after registration.</p>

                        </Grid>
                    </Grid>
                    </Grid>}
            </Grid>


        </Grid>

    </React.Fragment>)
}
const FormOutPut = () => {

    const {form, setFrom} = useContext(FormSelectContext)

    if (form === 0) {
        return (<Form1/>)
    }
    if (form === 1) {
        return (<Form2/>)
    }
    if (form === 2) {
        return (<Form3/>)
    }
    if (form === 3) {
        return (<Form4/>)
    }
}
const PreCheckout = () => {

    const isPortrait = useMediaQuery({query: '(orientation: portrait)'})
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
useEffect(()=>{
    // setAnchorEl(true);
},[])
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (<React.Fragment>

        <Grid container className={'precheckout'} >
            <Grid item container md={12} justify={'center'} >
                <Grid item>
                    <img src={logo} height={40} style={{marginTop:16}} alt=""/>
                </Grid>
                <Grid item>
                    <p style={{color:'white',fontWeight:'bolder'}}>KALAM <br/>LABS</p>
                </Grid>


            </Grid>
            <Detail/>
            <Grid item xs={12} md={4} style={{paddingTop: 30}}>
                <FormOutPut/>
            </Grid>

                {isPortrait && <Grid item container xs={12}  style={{color: 'white'}}>
                <Grid item xs={12}>
                    <p style={{color:'#19C8FF',textAlign:'center'}}>How it works</p>
                </Grid>
                    <Grid item>
                    <p style={{color:'white',paddingLeft:10}}>For any assistance or enquiry please contact us.</p>
                </Grid>
                    <Grid item>
                    <p style={{color:'#8373A5',paddingLeft:10}}>Email: kalam-labs@elixarsystems.com</p>
                </Grid>
                    <Grid item>
                    <p style={{color:'#8373A5',paddingLeft:10}}>Phone: +91 9140658594</p>
                </Grid>
                </Grid>}

        </Grid>

    </React.Fragment>)
}

export default PreCheckout