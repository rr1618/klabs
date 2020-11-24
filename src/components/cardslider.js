import React, {useEffect, useRef} from "react";


// import {Swiper,SwiperSlide} from "swiper/react";
// import SwiperCore from 'swiper'
// import 'swiper/swiper-bundle.css';
import './cardslider.css'
import explore from '../newassets/explore.svg'
const CardSlider=()=>{
    // const scroller = useRef()
    //
    //
    //     useEffect(()=>{
    //         document
    //             .getElementById("scroller")
    //             .addEventListener("scroll", function () {
    //                 var scrollerWrapper = document.getElementById("scroller");
    //                 var scrollPercent =
    //                     (scrollerWrapper.scrollLeft /
    //                         (scrollerWrapper.scrollWidth - scrollerWrapper.clientWidth)) *
    //                     100;
    //                 document.getElementById("scroll-progress").style.width =
    //                     scrollPercent + "%";
    //             });
    //     },[])



    return(
        <div>
            <div id="scroll-progress" ></div>
            <ul id="scroller" >
                <li ><div ><img style={{position:'relative',bottom:-250}} src={explore} alt=""/></div></li>
                <li ><div ><img style={{position:'relative',bottom:-250}} src={explore} alt=""/></div></li>
                <li ><div ><img style={{position:'relative',bottom:-250}} src={explore} alt=""/></div></li>
                <li ><div ><img style={{position:'relative',bottom:-250}} src={explore} alt=""/></div></li>
                <li ><div ><img style={{position:'relative',bottom:-250}} src={explore} alt=""/></div></li>

            </ul>
        </div>)
}

export default CardSlider
