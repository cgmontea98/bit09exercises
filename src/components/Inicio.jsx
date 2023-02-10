import React from "react";
import Card from "react-bootstrap/Card";

export const Inicio = () => {
  return (
    <>
      <div className="my-4 d-flex align-items-center justify-content-center">
        <Card style={{ width: "18rem" }} className="p-2">
          <Card.Img variant="top" src="/me.jpg" className="rounded" />
          <Card.Body>
            <Card.Title>Cristian Montealegre</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
