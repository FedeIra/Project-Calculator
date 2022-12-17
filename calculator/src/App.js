import './App.css';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import Pantalla2 from './componentes/Pantalla2.jsx';
import BotonClear from './componentes/Boton-clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import React from 'react';

function App() {
  const [inputPantalla, setInput] = useState('');
  const [inputPantalla2, setInput2] = useState('');

  // const toast = useToast();

  const agregarInput = (val) => {
    setInput(inputPantalla + val);
    setInput2(inputPantalla2 + val);
  };

  const calcularResultado = () => {
    if (inputPantalla) {
      setInput(evaluate(inputPantalla));
    } else {
      /* catch error: */
      alert('No se puede calcular');
    }
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla2 input={inputPantalla2} />
        <div>
          <Pantalla input={inputPantalla} />
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>%</Boton>
          <Boton manejarClick={agregarInput}>^</Boton>
          <Boton manejarClick={agregarInput}>(</Boton>
          <Boton manejarClick={agregarInput}>)</Boton>
        </div>
        <div className="fila">
          {/* button to go back: */}
          <Boton
            manejarClick={() => {
              setInput(inputPantalla.slice(0, -1));
              setInput2(inputPantalla2.slice(0, -1));
            }}
          >
            {'HOLA'}
          </Boton>

          <BotonClear
            manejarClear={() => {
              setInput('');
              setInput2('');
            }}
          >
            CC
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
