import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

export const EjerciciosD = () => {
  const [imag, setImag] = useState("");
  const [mensa, setMensa] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const handleBtn = () => {
    const api = "https://random-d.uk/api/v2/random";
    async function traerApi() {
      try {
        setLoad(true);
        const traer = await fetch(api);
        const data = await traer.json();
        setImag(data.url);
        setMensa(data.message);
      } catch (error) {
        setError("Problemas en el servidor, intenta más tarde");
      } finally {
        setLoad(false);
      }
    }
    traerApi();
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Card style={{ width: "18rem" }} className="p-2">
          <Card.Body>
            {
            error 
              ? (<p className="p-2 font-monospace fs-1 fw-bold bg-danger">{error}</p>) 
              :load 
                ? (<Spinner animation="grow" variant="info" />) 
                : imag 
                  ?(<Card.Img variant="top" src={imag} alt="imagen de patos" />)
                  : (<p className="p-2 font-monospace fs-1 fw-bold bg-danger">{error}</p>)
            }
            <Card.Text>{mensa}</Card.Text>
            <Button variant="info" onClick={() => handleBtn()}>
              Llamando api
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
