import "bootstrap/dist/css/bootstrap.min.css";
import { Navegación } from "./components/Navegacion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Container fluid className="bg-success p-2 bg-opacity-25 text-center">
        <Row>
          <Col>
            <h1>Bienvenido a esta App</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Navegación />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
