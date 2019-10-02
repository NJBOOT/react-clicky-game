import React from "react";
import "./style.css"

function StickyHeader (props) {
    return (
        <nav className="navbar fixed-top">
            <div className="scores">
            <p>Score: <span id="score">{props.score}</span></p>
            </div>
            <div className="high">
            <p>High Score: <span id="high-score">{props.highScore}</span></p>
            </div>
        </nav>
    )
}

export default StickyHeader