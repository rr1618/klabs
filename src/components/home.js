import React, {useEffect, useState} from 'react';


const mapStyles = {
    width: '100%',
    height: '60%'
};

 const Home=(props)=> {
    const [lat,setLat]=useState(null)
    const [lng,setLng]=useState(null)
    const getLocation=()=> {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates);
        }
    }
    const getCoordinates=(position)=>{
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
    }



        return (
            <div>
                <button onClick={getLocation}>get coordinates</button>
                <p>{lat}</p>
                <p>{lng}</p>
                {lat&&lng?
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=AIzaSyDrWa8gCLbJQ9vu4Uru29gy47YqKoEJD44`} alt=""/>
                :
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=AIzaSyDrWa8gCLbJQ9vu4Uru29gy47YqKoEJD44`} alt=""/>}
            </div>
        );

}

export default Home

