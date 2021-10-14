import React from "react";
import {Link} from "react-router-dom"

const TopNav = () => {
    return(
        <>
            <div className="top-nav">

            <Link to="/portfolio/">Home</Link>
            <Link to="/portfolio/Photography">Photography</Link>
            <Link to="/portfolio/AboutUs">Daegiona</Link>
            <Link to="/portfolio/Connect">Connect</Link>
            </div>


        </>
    );
};

export default TopNav;