import React from "react";
import { Row, Col } from "react-bootstrap";
import Meta from "../components/Meta";

const HomeScreen = () => {
  return (
    <>
      <Meta />
      <Row>
        <h3>Project Locator</h3>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Row>
    </>
  );
};

export default HomeScreen;
