import React from "react";
import "./style.css";

function Header(props){

        return (
            <nav className="navbar sticky-top text-white nav-justified">
                <div className="container">
                <div className="row">
                    <div className="col-md-4 pt-3">
                        <h3>Clicky Game</h3>
                    </div>
                    <div className="col-md-5 alert">
                        <h4>Click an image to begin!</h4>
                    </div>
                    <div className="col-md-2 pt-3"><h5>Score: {props.score}</h5></div>
                    <div className="col-md-1 "><h5>Top Score: {props.topScore}</h5></div>
                </div>
                </div>
            </nav>
             
        )
    
};

export default Header;

