import React from "react";

import './Comentario.css';

import imagemUsuario from './avatar.png';



const Comentario = props => (
    <div className="Comentario">
        <img className="avatar" src={imagemUsuario} alt={props.name}/>
        <div className="conteudo">
            <h2 className="name">{props.name}</h2>
            <p  className="email">{props.email}</p>
            <p  className="msg">{props.body}</p>
            <p  className="date">{props.date.toString()}</p>
            <button onClick={props.onRemove} className="btn">&times;</button>
        </div>
    </div>  
);

export default Comentario;
