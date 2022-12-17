import React from 'react';
import '../hojas-de-estilo/BotonClear.css';

const BotonBack = (props) => (
  <div className="boton-clear" onClick={props.manejarBack}>
    {props.children}
  </div>
);

export default BotonBack;
