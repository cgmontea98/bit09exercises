import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { EjerciciosD } from "./EjerciciosD";
import { EjerciciosU } from "./EjerciciosU";
import { HomeDir } from "./HomeDir";

export const Ejercicios = () => {
  return (
    <>
      <Container className="p-3">
        <Row>
          <Col className="py-2">
            <h2>Componente de Ejercicios</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3>Contador</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <EjerciciosU />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h3>Random Quack</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <EjerciciosD />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h3>Directorio Telefónico</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <HomeDir/>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};
