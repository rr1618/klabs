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
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${lat},${lng}&key=AIzaSyDrWa8gCLbJQ9vu4Uru29gy47YqKoEJD44`} alt=""/>
                :
                    <img src={`http://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=200x200&maptype=roadmap&markers=0.0000,0.0000&sensor=false`} alt=""/>}
            </div>
        );

}

export default Home

