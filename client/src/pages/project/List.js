import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { listProjectAction } from "../../actions/projectActions";

const ListProject = () => {
  const dispatch = useDispatch();

  const listProject = useSelector((state) => state.projectList);
  const { loading, error, projects } = listProject;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      dispatch(listProjectAction());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <>
      <h2 className="text-center my-3">Projects</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>PROJECT NAME</th>
              <th>PROJECT DETAILS</th>
              <th>START DATE</th>
              <th>END DATE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id}>
                <td>{project._id}</td>
                <td>{project.name}</td>
                <td>{project.details}</td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>
                  <LinkContainer to={`/project/${project._id}`}>
                    <Button variant="light" className="btn-sm">
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ListProject;
