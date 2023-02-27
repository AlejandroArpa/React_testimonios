import React from "react";
import "../Stylessheets/Testimonio.css"
function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../images/${props.imagen}-testimonio.png`)} alt={(`Foto ${props.nombre} `)} />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
          </p>
        <p className="cargo-testimonio">{props.profesion} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  )
}
export default Testimonio