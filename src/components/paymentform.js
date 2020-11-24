import React, {useContext, useEffect, useRef, useState} from "react";
import 'date-fns';
import {startBase} from "../App";
import "aos/dist/aos.css"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import razorlogo from '../assets/razorlogo.jpg'
import Paper from '@material-ui/core/Paper';
import OtpInput from 'react-otp-input';
import {FormSelectContext,  OtpContext, RegisterContext,SpinnerContext} from "../App";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Aos from "aos";
import MenuItem from '@material-ui/core/MenuItem';
import API from "../api-service";
import {
    useParams
} from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import {FormHelperText, TextField} from '@material-ui/core';
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";

const currencies = [
    {
        value: '+91',
        label: '+91',
    },
    {
        value: '+1',
        label: '+1',
    },
];
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
const Form1 = () => {
    const classes = useStyles();
    const {trial}  =useParams()
    const [currency, setCurrency] = React.useState('+91');
    const [text,setText] = useState('Buy now')
    const {form, setForm} = useContext(FormSelectContext)
    const {spin,setSpin} = useContext(SpinnerContext)
    const coupon =useRef(null)
    const {register, setRegister} = useContext(RegisterContext)
    const {otpContent, setOtpContent} = useContext(OtpContext)
    useEffect(() => {
        Aos.init({duration: 1000})
        if(trial=='trial')
            setText('Book A Free Trial')
    }, [register,spin,trial])

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const handleSubmit = () => {
        setSpin(true)
        if(trial=='buycourse')
        {
            API.getOrderId({name:register.name,amount:register.amount}).then(res=>{
                setRegister({...register,order_id:res.data['order_id']})
                API.sendOtp(register.mobile).then(res => {
                    setOtpContent(res.data['Details'])
                    setForm(1)
                    setSpin(false)
                }).catch(error => {
                    setSpin(false)
                    alert("Unable to send OTP")
            })
        }).catch(err=>alert("problem fetching order id")
        )

        }
        else{
            // setForm(2)
            API.sendOtp(register.mobile).then(res => {
                setOtpContent(res.data['Details'])
                setForm(1)
                setSpin(false)
            }).catch(error => {
                setSpin(false)
                alert("Unable to send OTP")
            })
        }


    }
    return (<React.Fragment>
        <div data-aos={'fade-zoom-in'}><Grid container>
            <Grid item container justify={'center'}>

                <Paper elevation={5} style={{ padding: 20, borderRadius: '4%'}}>
                    <Grid container item justify={'center'} >
                        <Grid item xs={10}>

                            <p>{text} <br/><span style={{color: 'gray', fontSize: 13}}>due to high demand only limited seats are available</span>
                            </p>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <ValidatorForm

                                onSubmit={handleSubmit}
                                onError={(errors) => console.log(errors)}
                            >
                                <Grid item container>
                                    <Grid item xs={10}>
                                        <FormHelperText className={'helper'} id={"my-helper-text"}>Name of The
                                            Student</FormHelperText>
                                        <TextValidator
                                            className={'input'}
                                            label="Full Name"
                                            size={'small'}
                                            onInput={e=>setRegister({
                                                ...register,
                                                name: e.target.value
                                            })}
                                            variant={'outlined'}
                                            name="name"
                                            value={register.name}
                                            validators={["required"]}
                                            errorMessages={["this field is required"]}
                                        />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <FormHelperText className={'helper'} id="my-helper-text">School in you are
                                            studying</FormHelperText>
                                        <TextValidator
                                            className={'input'}
                                            label="School"
                                            size={'small'}
                                            onInput={e=>setRegister({
                                                ...register,
                                                school: e.target.value
                                            })}
                                            variant={'outlined'}
                                            name="school"
                                            value={register.school}
                                            validators={["required"]}
                                            errorMessages={["this field is required"]}
                                        />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <FormHelperText className={'helper'} id="my-helper-text">Class in which you are studying</FormHelperText>
                                        <FormControl variant="filled" className={classes.formControl}>
                                            <InputLabel htmlFor="outlined-age-native-simple">Class</InputLabel>
                                            <Select
                                                native
                                                value={register.class}
                                                onInput={e=>setRegister({
                                                    ...register,
                                                    class: e.target.value
                                                })}
                                                label="Age"
                                                inputProps={{
                                                    name: 'Class',
                                                    id: 'outlined-age-native-simple',
                                                }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value={1}>1st</option>
                                                <option value={2}>2nd</option>
                                                <option value={3}>3rd</option>
                                                <option value={4}>4th</option>
                                                <option value={5}>5th</option>
                                                <option value={6}>6th</option>
                                                <option value={7}>7th</option>
                                                <option value={8}>8th</option>
                                                <option value={9}>9th</option>
                                                <option value={10}>10th</option>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <FormHelperText className={'helper'} id="my-helper-text">Actual Email address*</FormHelperText>
                                        <TextValidator
                                            className={'input'}
                                            label="Email"
                                            size={'small'}
                                            onInput={e=>setRegister({
                                                ...register,
                                                email: e.target.value
                                            })}
                                            variant={'outlined'}
                                            name="email"
                                            value={register.email}
                                            validators={["required", "isEmail"]}
                                            errorMessages={["this field is required", "email is not valid"]}
                                        />
                                    </Grid>
                                    <Grid item xs={12}></Grid>
                                    <Grid item xs={2} style={{marginTop:45}}>
                                        <TextField
                                            id="standard-select-currency"
                                            select
                                            value={currency}
                                            onChange={handleChange}
                                            // helperText="Please select your currency"
                                        >
                                            {currencies.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <FormHelperText className={'helper'} id="my-helper-text">Mobile Number</FormHelperText>
                                        <TextValidator
                                            className={'input'}
                                            label="Mobile"
                                            size={'small'}
                                            onInput={e=>setRegister({
                                                ...register,
                                                mobile: e.target.value
                                            })}
                                            variant={'outlined'}
                                            name="mobile"
                                            value={register.mobile}
                                            validators={["required"]}
                                            errorMessages={["this field is required"]}

                                        />
                                    </Grid>
                                    <Grid item container xs={10} justify={'space-between'}>
                                        <Grid item xs={6}>
                                            <input
                                                style={{padding:10,
                                                    marginTop:10,
                                                    marginBottom:10,
                                                    fontSize:20,
                                                    color:'white',
                                                    outline:'none',
                                                    borderStyle:'dashed',
                                                    borderRadius:20,
                                                    borderWidth:3,
                                                    backgroundColor:'white',
                                                    borderColor:'#8373A5'
                                                }}
                                                ref={coupon}
                                                placeholder={'Apply Coupon'}
                                                onChange={(e)=>{
                                                    e.persist()
                                                    API.couponVerification(e.target.value).then(res=>{
                                                        coupon.current.style.backgroundColor='#81FF01'
                                                        setRegister({...register,amount:res.data['price'],coupon:e.target.value})

                                                    }).catch(err=>{
                                                        coupon.current.style.backgroundColor= '#FF0401'
                                                        setRegister({...register,amount:79900})
                                                    })
                                                }}
                                                size="small"
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid item xs={12} style={{paddingTop: 10, paddingBottom: 30}}>
                                        <Button type="submit" variant={'contained'} style={{backgroundColor: '#19C8FF', color: 'white',}} endIcon={spin&&<CircularProgress color="secondary" />}>Proceed</Button>
                                    </Grid>
                                </Grid>

                            </ValidatorForm>

                        </Grid>



                    </Grid>

                </Paper>
            </Grid>

        </Grid></div>
    </React.Fragment>)
}
const Form2 = () => {
    const {trial} = useParams()
    const {form, setForm} = useContext(FormSelectContext)
    const {otpContent, setOtpContent} = useContext(OtpContext)
    const {register, setRegister} = useContext(RegisterContext)
    const [otp, setOtp] = useState("")
    const {spin,setSpin} = useContext(SpinnerContext)
    const handlesubmit = (ootp) => {
        setSpin(true)
        API.verifyOtp({sessionId: otpContent, otp: otp}).then(res => {
            if(trial=='buycourse') {
                setSpin(false)
                setForm(3)

            }
            else{
            setSpin(false)
            setForm(2)
        }

        }).catch(error => {
            setSpin(false)
            alert("wrong otp")

        })
    }
    useEffect(() => {

    }, [otp, otpContent,spin])
    const handleChange = (otp) => {
        setOtp(otp)
    };
    return (<React.Fragment>
        <div data-aos={'fade-zoom-in'}><Grid container>
            <Grid item>
                <Paper elevation={5} style={{paddingLeft: 50, paddingTop: 20, borderRadius: '4%', paddingRight: 50}}>
                    <Grid container direction={'column'}>
                        <Grid item>
                            <p>Verify Your Identity <br/><span style={{color: 'gray', fontSize: 13}}>You are trying to book a Kalam
                                labs AR course. Enter 6 digit verification code we sent you on your phone no {register.mobile}
                                <a >Change Phone No</a></span>
                            </p>
                        </Grid>
                        <Grid item>
                            <OtpInput
                                value={otp}
                                onChange={handleChange}
                                numInputs={6}
                                separator={<span>-</span>}
                                inputStyle={{
                                    backgroundColor: '#F2F2F2',
                                    borderStyle: 'none',
                                    height: 30,
                                    width: 30,
                                    borderRadius: 10
                                }}
                            />
                        </Grid>
                        <Grid item style={{paddingTop: 10, paddingBottom: 30}}>
                            <Button variant={'contained'} onClick={handlesubmit}
                                    style={{backgroundColor: '#19c8ff', color: 'white',}}
                                    endIcon={spin&&<CircularProgress color="secondary" />}
                            >Verify <br/>
                            </Button>
                            <p style={{color: 'gray'}}>Didn't get the verification code?
                                <button
                                style={{textDecoration: 'none', color: '#19C8FF', fontWeight: 'lighter'}}
                                onClick={()=>API.sendOtp(register.mobile).then(res => {
                                    setOtpContent(res.data['Details'])
                                    setForm(1)
                                }).catch(error => {
                                    alert("Unable to send OTP")
                                })}>
                                    Resend
                                </button>
                            </p>
                        </Grid>
                    </Grid>

                </Paper>
            </Grid>

        </Grid></div>
    </React.Fragment>)
}
const Form3 = () => {
    const {form, setForm} = useContext(FormSelectContext)
    const {register, setRegister} = useContext(RegisterContext)
    const {spin,setSpin} = useContext(SpinnerContext)
    const {trial} = useParams()
    useEffect(()=>{
        // console.log("order id",register.order_id)
    },[register,spin])

    const handleSubmit = () => {
        setSpin(true)
        if(register.date&&register.slot)
        {
                API.bookTrial({
                    email:register.email,
                    school:register.school,
                    name:register.name,
                    slot:register.slot,
                    date:register.date,
                    mobile:register.mobile
                }).then(
                    res=> {

                        setSpin(false)
                        alert('Response Saved')
                        window.location.href=startBase
                    }).catch(error=>{
                    setSpin(false)
                    alert("Response already exists")
                })


        }
        else {
            setSpin(false)
            alert("Please select date and slot")
        }

    }

    return (<React.Fragment>
        <div data-aos={'fade-zoom-in'}><Grid container>
            <Grid item>
                <Paper elevation={5} style={{paddingLeft: 50, paddingTop: 20, borderRadius: '4%', paddingRight: 50}}>
                    <Grid container direction={'column'}>
                        <Grid item>
                            <p>Book a slot<br/><span
                                style={{color: 'gray', fontSize: 13}}>Timezone (GMT+05:30) IST</span></p>
                            <button onClick={() => setForm(0)}>back</button>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="date"
                                label="Select date"
                                type="date"
                                defaultValue={`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={e => setRegister({
                                    ...register,
                                    date: e.target.value
                                })}
                            />
                        </Grid>
                        <Grid container item alignItems={'center'}>
                            <Grid item xs={12} style={{marginTop: 10}}>
                                <button
                                    className={'button'}
                                    onClick={e => setRegister({
                                        ...register,
                                        slot: "09:00"
                                    })}
                                >09:00 AM
                                </button>
                                <button
                                    className={'button'}
                                    onClick={e => setRegister({
                                        ...register,
                                        slot: "10:00"
                                    })}
                                >10:00 AM
                                </button>
                                <button
                                    className={'button'}
                                    onClick={e => setRegister({
                                        ...register,
                                        slot: "11:00"
                                    })}
                                >11:00 AM
                                </button>
                            </Grid>
                            <Grid item xs={12} style={{marginTop: 10}}>
                                <button
                                    className={'button'}
                                    onClick={e => setRegister({
                                        ...register,
                                        slot: "12:00"
                                    })}
                                >12:00 AM
                                </button>
                                <button
                                    className={'button'}
                                    onClick={e => setRegister({
                                        ...register,
                                        slot: '13:00'
                                    })}
                                >13:00 AM
                                </button>
                                <button
                                    className={'button'}
                                    onClick={e => setRegister({
                                        ...register,
                                        slot: '14:00'
                                    })}
                                >14:00 AM
                                </button>
                            </Grid>
                            <Grid item>
                                <p style={{color: '#8A808E', fontSize: '13px'}}>Due to high demand only few slots are
                                    left. <br/> Please pick your slot as available.</p>
                            </Grid>


                        </Grid>
                        <Grid item style={{paddingTop: 10, paddingBottom: 30}}>
                            <Button variant={'contained'}
                                    style={{backgroundColor: '#19c8ff', color: 'white', fontSize: 12}}
                                    onClick={handleSubmit} endIcon={spin&&<CircularProgress color="secondary" />}
                            >Confirm Slot</Button>

                        </Grid>
                    </Grid>

                </Paper>
            </Grid>

        </Grid></div>
    </React.Fragment>)
}
const Form4 = () => {
    const {register, setRegister} = useContext(RegisterContext)
    const {spin,setSpin} = useContext(SpinnerContext)
    useEffect(()=>{
       console.log("order id",register.order_id)
    },[])

    var options = {
        // "key": "rzp_test_2srLi3kSASWT0B",
        "key": "rzp_live_0RdkjhtdlQnks7",
        "amount": register.amount,
        "currency": "INR",
        "name": "Elixir Systems",
        "description": "Kalam Labs Registration",
        "image": {razorlogo},
        "order_id": register.order_id,
        "handler": function (response){
            setSpin(true)
            API.verifySignature({
                order_id:register.order_id,
                payment_id:response.razorpay_payment_id,
                signature:response.razorpay_signature
            }).then(
                res=>{
                    API.register({
                        name:register.name,
                        email:register.email,
                        school:register.school,
                        mobile:register.mobile,
                        amount:register.amount,
                        coupon:register.coupon,
                        class:register.class,
                        order_id:response.razorpay_order_id,
                        payment_id:response.razorpay_payment_id,
                        payment:true,
                        signature:response.razorpay_signature,}).then(res => {
                        window.location.href=`https://elixarsystems.com/kalam-labs/#/paymentstatus/${response.razorpay_order_id}`
                        // API.sendMail({name:register.name,
                        //     email:register.email,
                        //     amount:register.amount,
                        //     order_id:response.razorpay_order_id}).
                        // then(res=> {
                        //     setSpin(false)
                        //     alert('A confirmation mail has been sent on ' + register.email)
                        //     window.location.href=`https://elixarsystems.com/kalam-labs/#/paymentstatus/${response.razorpay_order_id}`
                        // }).
                        // catch(err=>{
                        //     setSpin(false)
                        //     alert('Problem sending mail, contact elixarsystems')
                        // })

                    }).catch(
                        error => {
                            setSpin(false)
                            alert("User Already Registered, Payment will be refunded if deducted within 2 weeks")
                        }
                    )
                }
            ).catch(err=>{
                alert("payment verification failed, your amount if deducted will be refunded within 2 weeks")
            })

        },
        // "callback_url": "http://127.0.0.1:8000/api/success/",
        "prefill": {
            "name": register.name,
            "email": register.email,
            "contact": register.mobile
        },
        "notes": {
            "address": "Elixir System Office"
        },
        "theme": {
            "color": "#2A2A2A"
        }
    };
    useEffect(()=>{
    },[register,register.order_id,options])

    var rzp1 = new window.Razorpay(options);

    return (
        <div data-aos={'fade-zoom-in'}>
            <Grid container justify={'center'}>
                <Grid item xs={12}>
                    <Paper elevation={5}
                           style={{ paddingTop: 20, borderRadius: '4%'}}>
                        <Grid container justify={'center'}>
                            <Grid item xs={10}>
                                <p style={{fontWeight:'bolder'}}>Pay now to book your slot<br/><span
                                    style={{color: 'gray', fontSize: 13}}>Timezone (GMT+05:30) IST</span></p>
                            </Grid>
                            <Grid item xs={10}>
                                <p style={{fontWeight: 'lighter', fontSize: '13px', color: '#8A808E'}}>Make a secure
                                    payment, we use bank level security <br/> to process your payment.
                                    Choose any of the <br/> method below.</p>
                            </Grid>
                            <Grid item xs={10}>
                                <p style={{fontWeight: 'lighter', fontSize: 12, color: '#8A808E'}}>Payment Details</p>
                            </Grid>
                            <Grid item xs={8}>
                                <p style={{fontWeight: 'bolder', fontSize: '13px'}}>Winter School Course <br/>
                                    <span
                                        style={{fontWeight: 'lighter', color: '#8A808E'}}>For class 1st to 10th</span>
                                </p>
                            </Grid>

                            <Grid item xs={2}>
                                <p>Rs 1,599</p>
                            </Grid>
                            <Grid item xs={8}>
                                <p style={{fontWeight: 'bolder', fontSize: '13px', color: '#C160E5'}}>Special Discount
                                    Applies
                                </p>
                            </Grid>
                            <Grid item xs={2}>
                                <p>Rs 1,100</p>
                            </Grid>
                            <Grid item container xs={10}>
                                <Grid item xs={5}>
                                    <p>Coupon Applied</p>
                                </Grid>
                                <Grid item xs={5}>
                                    <p>{register.coupon}</p>
                                </Grid>

                                <Grid item xs={2}>
                                    <p >Rs{(49900-parseInt(register.amount))/100}</p>
                                </Grid>

                            </Grid>

                            <Grid item container xs={10} style={{backgroundColor:'#F2F2F2',borderRadius:15,padding:'0 10px 0 10px',fontWeight:'bolder',margin:'0 0 10px 0'}} justify={'space-between'}>
                                <Grid item xs={7}>
                                    <p >Total Payable after discount</p>
                                </Grid>
                                <Grid item xs={2}>
                                    {register.coupon?<p>Rs {parseInt(register.amount)/100}</p>:<p>Rs {parseInt(register.amount)/100}</p>}

                                </Grid>
                            </Grid>

                            <Grid item xs={10}>
                                <Button
                                    endIcon={spin&&<CircularProgress color="secondary" />}

                                        variant={'contained'}
                                        fullWidth
                                        style={{backgroundColor: '#19c8ff', color: 'white', fontSize: 12,margin:'0 0 20px 0'}}
                                            onClick={(e) => {
                                                rzp1.open();
                                                e.preventDefault();


                                        }}>Pay
                                    Securely  <br/></Button>

                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>

            </Grid></div>

    )
}
export {Form1, Form2, Form3, Form4}
