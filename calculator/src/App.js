import './App.css';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import Pantalla2 from './componentes/Pantalla2.jsx';
import BotonClear from './componentes/Boton-clear';
import BotonBack from './componentes/Boton-back';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import React from 'react';
import { useToast } from '@chakra-ui/react';

function App() {
  const [inputPantalla, setInput] = useState('');
  const [inputPantalla2, setInput2] = useState('');

  const toast = useToast();

  const agregarInput = (val) => {
    setInput(inputPantalla + val);
    setInput2(inputPantalla2 + val);
  };

  const calcularResultado = () => {
    if (inputPantalla) {
      setInput(evaluate(inputPantalla));
    } else {
      toast({
        title: 'No results.',
        description: 'Try inserting values and operator.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const backspace = () => {
    console.log(inputPantalla);
    setInput(inputPantalla.slice(0, -1));
    setInput2(inputPantalla2.slice(0, -1));
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
          <BotonBack
            manejarBack={() => {
              backspace();
            }}
          >
            Back
          </BotonBack>
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
