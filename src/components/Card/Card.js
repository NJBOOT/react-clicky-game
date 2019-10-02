import React from "react";
import "./style.css";

function Card(props){
    return (
            <img className="memory-card" alt={props.id} src={props.image} onClick={() => props.clickCard(props.id)}/>
    )
}

export default Card 