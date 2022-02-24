import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import { login } from "../../actions/userActions";
import { getProjectDetails } from "../../actions/projectActions";
import GoogleMapComponent from "../../components/MapComponent";

const UpdateProject = ({ history }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [details, setDetails] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const params = useParams();

  const projectDetail = useSelector((state) => state.projectDetails);
  const { loading, error, project } = projectDetail;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(name, location, startDate, endDate, details));
  };

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
    if (!project.name) {
      dispatch(getProjectDetails(params.id))
    } else {
      setName(project.name)
      setLocation(project.location)
      setStartDate(project.startDate)
      setEndDate(project.endDate)
      setDetails(project.details)
    }
  }, [dispatch, project])

  return (
    <FormContainer>
      <h2 className="text-center my-3">Update Existing Project</h2>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Project Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Row className="my-3">
          <Col>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="startDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="startDate" className="my-3">
          <Form.Label>Enter Project Details</Form.Label>
          <Form.Control
            as="textarea" rows={5}
            type="text"
            placeholder="Enter Project Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="my-3">
          Update Project
        </Button>
      </Form>

      <GoogleMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </FormContainer>
  );
};

export default UpdateProject;
