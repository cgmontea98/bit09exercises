import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export const EjerciciosU = () => {
  //Para resetear
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState("bg-secondary");
  //Para que controle el cambio de color y es un bloque de código
  useEffect(() => {
    if (contador > 0) {
      setColor("bg-success");
    } else if (contador < 0) {
      setColor("bg-danger");
    } else {
      setColor("bg-secondary");
    }
  }, [contador]);
  //Clicks
  const handleDec = () => {
    const arrD = contador - 1;
    setContador(arrD);
  };
  const handleInc = () => {
    const arrI = contador + 1;
    setContador(arrI);
  };

  return (
    <>
      <h1>Ejercicios Uno</h1>
      <h2>Contador</h2>
      <p className={color}>{contador}</p>
      <ButtonGroup aria-label="Basic example">
        <Button variant="danger" onClick={() => handleDec()}>
          Decrementar
        </Button>
        {/* Otra forma de usar el click es colocando la funcion del seteo directo en arrowfunction */}
        <Button variant="secondary" onClick={() => setContador(0)}>
          Resetear
        </Button>
        <Button variant="success" onClick={() => handleInc()}>
          Incrementar
        </Button>
      </ButtonGroup>
    </>
  );
};
