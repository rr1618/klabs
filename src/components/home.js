import React, {useContext, useEffect} from "react";
import {FormSelectContext,RegisterContext} from "../App";
import {
    Link,
    Element,
} from "react-scroll";
import Frame1 from "./frame1";
import Frame2 from "./frame2";
import Frame3 from "./frame3";
import Frame4 from "./frame4";
import Frame5 from "./frame5";
import About from "./about";
import CardSlider from "./cardslider";
const Home = () =>
{
    const {form,setForm} =useContext(FormSelectContext)
    const {register,setRegister} = useContext(RegisterContext)
    useEffect(()=>{
        setRegister({...register,
            name:'',
            mobile:'',
            school:'',
            email:'',
            date:'',
            slot:'',
            order_id:'',
            payment:false
        })
        setForm(0)
    },[])
    return(
        <React.Fragment>

                <Element
                    name="home" className="element">
                    <Frame1/>

                    <Frame2/>


                    {/*<Frame3/>*/}
                </Element>

                {/*<Element name="whykalam" className="element">*/}
                {/*    <Frame4/>*/}
                {/*</Element>*/}
                {/*<Element name="people" className="element">*/}
                {/*    <Frame5/>*/}
                {/*</Element>*/}
                {/*<Element name="about" className="element">*/}
                {/*    <About/>*/}
                {/*</Element>*/}




        </React.Fragment>
    )
}
export default Home
