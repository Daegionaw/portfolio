import React from "react";

const Banner= ({ children }) => {
    return (
        <>
        <div className="banner">
            Work of the Artist
            { children }
        </div>
        </>
    );
}

export default Banner;