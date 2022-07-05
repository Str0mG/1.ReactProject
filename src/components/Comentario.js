import React from "react";

import './Comentario.css';


const Comentario = props => (
    <div className="Comentario">
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p>{props.body}</p>
        <p>{props.date.toString()}</p>
    </div>  
);

export default Comentario;
