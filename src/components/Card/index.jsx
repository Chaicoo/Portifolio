import React from "react";
import "../../styles/card.css";

const Card = (props) => {
    return (
        <div className="card">
        <div className="card-icon">
            <i className={props.icon}></i>
        </div>
        <div className="card-content">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
        </div>
    );
    };

export default Card;
