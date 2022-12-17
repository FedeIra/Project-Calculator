import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props) {
  /* Definimos la función de operador para pasarle una clase adicional a los botones que no sean simples números sino operadores: */
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== '.';
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? 'operador' : ''
      }`.trimEnd()}
      /* Decimos: si el resulado o valor retornado es true entonces se reemplaza por operador que va a ser la segunda clase que le asignamos al botón, de lo contratio se retorna null y no se hace ningún cambio en las clases.
      El método trim es para que no quede espacios en `boton-contenedor ${esOperador... Hay un espacio entre contenedor y el $ . TrimEnd remueve espacios al final del string. Otra posibilidad es ponerle null en lugar de que devuelva string vacío "" */
      /* Le agrego ahora el event listener: */
      onClick={() =>
        props.manejarClick(props.children)
      } /* Queremos el valor del boton que es props.children y tenemos que llamar a la función. La llamamos de forma ánonima acá. Cuando ocurra un click se llama a esta función. */
    >
      {props.children}
    </div>
  );
}

export default Boton;
