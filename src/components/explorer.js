import React, { useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"

import Popup from "./popup";
import explorer from '../assets/explorer.png'
import Paper from '@material-ui/core/Paper';
import {useMediaQuery} from "react-responsive";
import {PopupContext} from "../App";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import conquerer from "../assets/conquerer.png";
import conquererShort from '../assets/conquerershort.png'
import explorerShort from '../assets/explorershort.png'
import {Link} from 'react-router-dom'
import Modal from 'react-modal';


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')




const Explorer = (props) => {


    const {modalIsOpen,setIsOpen} = React.useContext(PopupContext);
    function openModal() {
        setIsOpen(true);
    }


    function closeModal(){
        setIsOpen(false);
    }
    useEffect(()=>{

    },[])
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })





    return (<div >

        {isPortrait?<div

        >
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={{width:'100%'}}
                contentLabel="Example Modal"
            >
                <Popup/>
            </Modal>
            <Paper elevation={5} className={'paper'} style={{backgroundColor: '#272330', marginRight: 10}}>
                <Grid container justify={'center'}>
                    <Grid item container>

                        <Grid item xs={12}>

                            <img src={explorer} alt=""/>

                        </Grid>
                    </Grid>
                    <Grid item xs={12}>

                        <ul>
                            <li>For class 1st to 10th</li>
                            <li>Winter School</li>
                            <li>World’s First AR-based Science Course
                            </li>
                            <li>1 Week Course</li>
                            <li onClick={openModal}>View Detailed Curriculum</li>
                            {/*<li>Book A Free AR Trial Now</li>*/}
                        </ul>
                    </Grid>
                    <Grid item container justify={'space-between'}>
                        <Grid item>
                            <h3 style={{color: 'white',paddingLeft:10}}>Rs. 499
                            {/*<span*/}
                            {/*    style={{color: 'white', fontSize: '.5em', marginLeft: 20}}>*/}
                            {/*                        Price per Class Rs. 100*/}
                            {/*                    </span>*/}
                            </h3>

                        </Grid>
                        <Grid item>
                            <h4 style={{color: 'white', paddingRight: 10}}>
                                <del>Rs. 1,599</del>
                            </h4>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to={'/checkout/buycourse'} style={{textDecoration: 'none'}}>
                            <Button variant={'contained'} style={{backgroundColor: '#19C8FF', width: '100%'}}>
                                <Grid container justify={'space-between'} style={{color: 'white', padding: 10}}>
                                    <Grid item style={{fontSize: '.9em'}}>
                                        BUY NOW
                                    </Grid>
                                    <Grid item style={{fontSize: '.7em'}}>
                                        SAVE 70%
                                    </Grid>
                                </Grid>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </div>:<div
            data-aos="slide-right"
            data-aos-offset={-100}
            // data-aos-easing="ease-in-sine"
            data-aos-delay="500"
        >
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={{width:'90vw'}}
                contentLabel="Example Modal"
            >
                <Popup/>
            </Modal>
            <Paper elevation={5} className={'paper'} style={{backgroundColor: '#272330', marginRight: 10}}>
                <Grid container justify={'center'} >
                    <Grid item container>
                        {/*<Grid item xs={3} >*/}
                        {/*    <p style={{color:'white',fontSize:12}}>Sponsered by Happee Learning</p>*/}
                        {/*</Grid>*/}
                        <Grid item lg={12}>

                            <img src={explorer} alt=""/>

                        </Grid>
                    </Grid>


                    <Grid item xs={12}>
                        <ul>

                            <li>For class 1st to 10th</li>
                            <li>Winter School</li>
                            <li>World's First AR-based Science Course</li>
                            <li>1 Week Course</li>
                            <li onClick={openModal} >View Detailed Curriculum</li>
                            {/*<li>Book A Free AR Trial Now</li>*/}
                        </ul>
                    </Grid>
                    <Grid item container justify={'space-between'}>
                        <Grid item>
                            <h3 style={{color: 'white',paddingLeft:10}}>Rs. 499
                            {/*<span*/}
                            {/*    style={{color: 'white', fontSize: '.5em', marginLeft: 20}}>*/}
                            {/*                        Price per Class Rs. 100*/}
                            {/*                    </span>*/}
                            </h3>

                        </Grid>
                        <Grid item>
                            <h4 style={{color: 'white', paddingRight: 10}}>
                                <del>Rs. 1,599</del>
                            </h4>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to={'/checkout/buycourse'} style={{textDecoration: 'none'}}>
                            <Button variant={'contained'} style={{backgroundColor: '#19C8FF', width: '100%'}}>
                                <Grid container justify={'space-between'} style={{color: 'white', padding: 10}}>
                                    <Grid item style={{fontSize: '.9em'}}>
                                        BUY NOW
                                    </Grid>
                                    <Grid item style={{fontSize: '.7em'}}>
                                        SAVE 70%
                                    </Grid>
                                </Grid>
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </div>}
        </div>

    )
}
const Conquerer = () => {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })


    useEffect(() => {
        Aos.init({duration: 1000})

    }, [])
    return (<div>{isPortrait?<div
            >

        <Paper elevation={5} className={'paper'} style={{backgroundColor: '#272330', marginLeft: 10}}>
            <Grid container justify={'center'}>
                <Grid item lg={12}>
                    <img src={conquerer} alt=""/>
                </Grid>
                <Grid item xs={12}>
                    <ul>
                        <li>Engineering Conquerer</li>
                        <li>For class 11th to 12th</li>
                        <li>Simplify JEE/NEET preparation through Practical Science Experience
                        </li>
                        <li>1 Week Course</li>
                        <li >View Detailed Curriculum</li>
                    </ul>
                </Grid>
                <Grid item>
                   <Link to={'/checkout/trial'}
                    style={{textDecoration:'none'}}
                   >
                       <Button variant={'contained'}

                               style={{
                                   backgroundColor: '#19C8FF',
                                   borderRadius: 20,
                                   color: 'white',
                                   marginBottom: 20,
                                   marginTop: 30

                               }}
                              > Book A free Trial</Button>
                   </Link>
                </Grid>

            </Grid>
        </Paper>
    </div>:<div
        data-aos="slide-left"
        data-aos-offset={-100}
        // data-aos-easing="ease-in-sine"
        data-aos-delay="500"
            >

        <Paper elevation={5} className={'paper'} style={{backgroundColor: '#272330', marginLeft: 10}}>
            <Grid container justify={'center'}>
                <Grid item lg={12}>
                    <img src={conquerer} alt=""/>
                </Grid>
                <Grid item xs={12}>
                    <ul>
                        <li>For class 11th to 12th</li>
                        <li>Engineering Conquerer</li>
                        <li>Simplify JEE/NEET preparation through Practical Science Experience
                        </li>
                        <li>Weeks Course</li>
                        <li >View Detailed Curriculum</li>
                    </ul>
                </Grid>
                <Grid item>
                   <Link to={'/checkout/trial'}
                    style={{textDecoration:'none'}}
                   >
                       <Button variant={'contained'}

                               style={{
                                   backgroundColor: '#19C8FF',
                                   borderRadius: 20,
                                   color: 'white',
                                   marginBottom: 20,
                                   marginTop: 30

                               }}
                              > Book A free Trial</Button>
                   </Link>
                </Grid>

            </Grid>
        </Paper>
    </div>}</div>)
}

const ExplorerShort = () => {
    return (
        <Paper elevation={5} style={{borderRadius: '30px', width: '250px'}}>
            <Grid container style={{
                backgroundColor: '#19C8FF',
                color: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '65px'
            }}>
                <Grid item lg={2}>

                    <img src={explorerShort} style={{height: 70, width: 60}} alt=""/>


                </Grid>
                <Grid item lg={10}>
                    <Link to={'/checkout/buycourse'} style={{textDecoration: 'none', color: 'white'}}><p>Science Explorer <br/>
                        <span
                            style={{color: '#A3E9FF', fontSize: '.7em'}}>Course for class 1st to 10th</span></p></Link>
                </Grid>
            </Grid>

        </Paper>
    )
}
const ConquererShort = () => {
    return (
        <Paper elevation={5} style={{borderRadius: '30px', width: '250px'}}>
            <Grid container style={{
                backgroundColor: '#19C8FF',
                color: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '60px'
            }}>
                <Grid item lg={2}>
                    <img src={conquererShort} style={{height: 70, width: 60}} alt=""/>
                </Grid>
                <Grid item lg={10}>
                    <Link to={'/checkout/trial'} style={{textDecoration: 'none', color: 'white'}}><p>Engineering
                        Conquerer <br/> <span
                            style={{color: '#A3E9FF', fontSize: '.7em'}}>Course for class 11th to 12th</span></p></Link>
                </Grid>
            </Grid>

        </Paper>
    )
}

export {
    Explorer, Conquerer, ExplorerShort, ConquererShort
}