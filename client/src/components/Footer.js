import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Row className="w-100 m-0">
        <Col className="text-center bg-dark text-white p-3">
          Copyright &copy; Project Locator
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
