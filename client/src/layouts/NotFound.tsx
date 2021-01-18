import { Col, Container, Row } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 8, offset: 2 }}>
          <h1>Error 404</h1>
          <h2>Not Found</h2>
        </Col>
      </Row>
    </Container>
  );
}
