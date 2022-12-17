import React from "react";
import "../hojas-de-estilo/Pantalla.css";

/* Otra forma de definir un componente es la arrow function:
Generalmente son para componentes más sencillos.*/

const Pantalla = ({ input }) => <div className="input">{input}</div>;

export default Pantalla;
