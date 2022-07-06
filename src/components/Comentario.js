import React from "react";
import { formatRelative } from "date-fns";
import {ptBR} from 'date-fns/locale'

import './Comentario.css';
import imagemUsuario from './avatar.png';



const Comentario = props => (
    <div className="Comentario">
        <img className="avatar" src={imagemUsuario} alt={props.name}/>
        <div className="conteudo">
            <h2 className="name">{props.name}</h2>
            <p  className="email">{props.email}</p>
            <p  className="msg">{props.body}</p>
            <p  className="date">{formatRelative(props.date,new Date(), {locale: ptBR})}</p>
            <button onClick={props.onRemove} className="btn">&times;</button>
        </div>
    </div>  
);

export default Comentario;
