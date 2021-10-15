import React from "react";
import Footer from "../components/layout/Footer.js"
import Banner from "../components/sections/Banner.js"
import TopNav from "../components/sections/TopNav.js"



const Connect = () => {
    return (
        <>
            <TopNav/>
            
            <div className= "book">
            Book with Daegiona
            </div>
            <div className="pictures">
            <div className="photo" id="pink"/>
            <div className="photo" id="green"/>
            </div>
            <div className="info">
            For information regarding booking availability and pricing contact Daegiona.
            </div>
            <div className="email">
            Email: Daegiona.wilson@sckans.edu
            </div>
            <div className="phone">
            Phone: (316) 284-1210
            </div>
            <div className="social">
            All Social Handles: @Daegionaw
            </div>
            <div className="reason">
                Book with Daegiona for seasonal pictures, senior and graduation season, weddings, portraits, sports, and landscape photography. Pricing varies.
            </div>

            <Footer/>

        
        </>    
    );
}

export default Connect;