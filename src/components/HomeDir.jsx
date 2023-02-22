import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const HomeDir = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  async function apiDir() {
    try {
      const traer = await fetch("https://jsonplaceholder.typicode.com/users");
      const datos = await traer.json();
      setData(datos);
      /*datos.map((dato) =>
         console.log(
          `NOMBRE: ${dato.name} // TELEFONO: ${dato.phone} //CORREO: ${dato.email}`
        )
      ); */
    } catch {
      setError("Problemas en el servidor, intenta más tarde");
    }
  }
  apiDir();

  return (
    <>
      <h2>Directorio</h2>
      {data.map((data) => (
        <Container key={data.id}>
          <Row>
            <Col className="p-2 d-flex justify-content-center align-items-center">
              <Card style={{ width: "18rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>{data.name}</ListGroup.Item>
                  <ListGroup.Item>{data.phone}</ListGroup.Item>
                  <ListGroup.Item>{data.email}</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
};
