import React from "react";
import Header from "../components/layout/Header.js"
import Footer from "../components/layout/Footer.js"
import Banner from "../components/sections/Banner.js"
import KansasCity from "../assets/images/KansasCity.jpg"
import TopNav from "../components/sections/TopNav.js"


const Photography = () => {
    return(
        <>
            <TopNav/>
            <Banner>
            </Banner>
            <div className="pictures">
            <div className="photo" id="mainb"/>
            <div className="photo" id="soccer"/> 
            <div className="photo" id="ava"/>
            <div className="photo" id="alissa"/>
            <div className="photo" id="pole"/>
            <div className="photo" id="snow"/>
            </div>
            <div className="end">
                Many artist try and master one form of photography. This is great is you are great, but if you are not, I beleive it limits you. I like to say I am a jack of all trades looking to master all, not one. 
            </div>
    
        
            <Footer/>
        </>
    );
}

export default Photography;