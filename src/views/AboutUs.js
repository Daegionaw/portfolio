import React from "react";
import Header from "../components/layout/Header.js"
import Banner from "../components/sections/Banner.js"
import TopNav from "../components/sections/TopNav.js"
import Footer from "../components/layout/Footer.js"


const AboutUs = () => {
    return (
        <>
            <TopNav/>
            <div className= "face">
                The Face Behind the Camera
            </div>
            <div className="pictures">
            <div className="photo" id="dae"/>
            <div className="photo" id="daedae"/>
            </div>
          


        

            <div className= "content">
                Orginally from the Wichita, KS, I grew up surrounded by the beauty of nature. Rather that be sunsets, biopolar weather, or the prairie, I always seemed to find the pureness in nature. This is what inspired me to see nature through a camera. There comes a time where you wish you had a camera to snap a beautiful moment. I decided not to wait for that moment anymore and just do it. 
                After finding happiness in landscape photography, I started to explore other forms of photography, now capturing porttraits, sports and still-life. I enjoy every apsect about photography which is way when I am capturing moments of others, I keep prices afforadable. The best moments captured come from the person behind the camera enjoying what they are doing, not someone who is doing it for what the outcome may be. Three words to describe me is engertic, humorious and genuine. This is exaclty what you will get with me, while we spend time bonding over the click of a camera. 
            </div>

            <Footer/>
    
        
        
        </>
    
    );
}

export default AboutUs;