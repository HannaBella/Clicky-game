import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4"><img src="./images/click-to-play.png" className="pb-3" id="banner_logo" alt="Clicky logo" /> Clicky Game</h1>
                <p className="lead">To earn points, click on an image only once. Enjoy!</p>
            </div>
        </div>
    )
};
export default Jumbotron;