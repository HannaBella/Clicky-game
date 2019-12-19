import React from "react";
import "./style.css";

function Header(props){

    return (
        <nav>
            <div className="container">
            <ul className="navbar sticky-top text-white nav nav-fill"> 
                <li className="navBrand">Clicky Game</li>
                <li className="nav-item ml-5">{props.statusMessage}</li>
                <li className="nav-item">Score: {props.score}</li>
                <li className="nav-item">Top Score: {props.topScore}</li>
            </ul> 
            </div> 
        </nav>  
    )
};

export default Header;

