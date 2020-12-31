import React, {useEffect, useState} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import API from "../api-service";
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { useMediaQuery } from 'react-responsive'
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



export const Home =(props)=>{

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const [lat,setLat]=useState(0)
    const [lng,setLng]=useState(0)
    const [show,setShow]=useState(false)
    const [currWeather,setCurrWeather]=useState({temp:'',icon:''})
    const [address,setAddress] = useState({country:'',state:'',city:'',country_code:'',currency_code:''})
    const [price,setPrice] = useState(0)
    const [curr_code,setCurr_code] = useState('')
    const rows = [
        createData('EUR'+curr_code, price),

    ];

    const [forecast,setForecast]=useState([])
    const convert=(time)=>{
        let date = new Date(time*1000);
        let da = date.toDateString();

        return da.slice(0,10)
    }
    useEffect(()=>{
        let data
        let currency

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setLat(position.coords.latitude)
                setLng(position.coords.longitude)
                API.reverseGeocode(position.coords.latitude,position.coords.longitude).then(res=>{
                    console.log(res.data)

                    data = res.data.results[0].components
                    currency = res.data.results[0].annotations.currency.iso_code
                    setAddress({country: data.country,
                        state:data.state,
                        city:data.city,
                        country_code: data.country_code,
                         })
                    API.weathers(position.coords.latitude,position.coords.longitude).then(res=> {

                            setCurrWeather({icon:`http://openweathermap.org/img/wn/${res.data.current.weather[0].icon}@2x.png`,
                            temp:res.data.current.temp})

                        setForecast(res.data.daily.slice(0,3))

                        })
                        API.currency_code(data.country_code).then(res=>{

                            setCurr_code(res.data.currencies[0].code)

                        API.exchange_rate(currency).then(res=>
                        {

                            let keys
                            for(keys in res.data.rates)
                            {

                                setPrice(res.data.rates[keys])
                            }


                        }


                        )})

                }).catch(error=>console.log(error))

            });
        }

    },[])

        return (
            <Grid container justify={'center'}>
                <Grid item container justify={"center"} xs={12} lg={6}>
                    <Grid item xs={12}>
                        <h2>{address.city},{address.state}</h2>
                    </Grid>
                    <Grid item xs={10} lg={2}>
                        <img src={currWeather.icon}  alt=""/>
                    </Grid>
                    <Grid item xs={10} lg={2}>
                        <h2>{currWeather.temp-273.15} °C</h2>
                    </Grid>
                    <Grid item xs={11}>
                        <Paper elevation={4} onClick={()=>setShow(!show)} style={{padding:5,marginBottom:10,cursor:'pointer'}}><h3>Next Three days forecast</h3></Paper>
                    </Grid>
                    {show&& <Grid item xs={11}>

                        {forecast.map(item => <Paper elevation={3} key={item.dt} style={{
                            marginBottom: 10,
                            backgroundColor: "#787878",
                            padding: 10,
                            color: 'white'
                        }}>
                            <Grid item container>
                                <Grid item>
                                    <p>{convert(item.dt)}</p>

                                </Grid>
                                <Grid item xs={2}>
                                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                         height={60} alt=""/>
                                </Grid>
                                <Grid item xs={4}>
                                    <p>{item.temp.min}/{item.temp.max} °C</p>
                                </Grid>
                                <Grid item xs={3}>
                                    <p>{item.weather[0].description}</p>

                                </Grid>

                            </Grid>
                        </Paper>)}
                    </Grid>}





                </Grid>
                <Grid item container xs={12} lg={6} justify={"center"}>
                    <Grid item xs={12}>
                        <Map google={props.google} zoom={14} style={isPortrait?{width:'95vw',height: 300}:{width:500,height:300}}
                             center={{
                                 lat: lat,
                                 lng: lng
                             }}>

                            <Marker
                                title={'The marker`s title will appear as a tooltip.'}
                                name={'SOMA'}
                                position={{lat: lat, lng: lng}} />

                            <InfoWindow >
                                <div>

                                </div>
                            </InfoWindow>
                        </Map>
                    </Grid>
                    <Grid item xs={12}>
                        <TableContainer component={Paper} style={isPortrait?{marginTop:350,width:'95vw'}:{marginTop:350,width:500}}>
                            <Table  aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Currency</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">%Change</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>


                </Grid>
            </Grid>

        );

}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDrWa8gCLbJQ9vu4Uru29gy47YqKoEJD44')
})(Home)
