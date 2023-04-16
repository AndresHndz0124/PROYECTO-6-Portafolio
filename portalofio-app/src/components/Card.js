import React from "react";

function Card(props) {
    return (
        <div className="card">
<img src={props.image} alt="" className="card-img-top card-img" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <p><a href={props.url}>Project URL</a></p>
                <a href={props.buttonLink} className="btn btn-primary">Learn more on GitHub</a>
            </div>
        </div>
    );
}

export default Card;
