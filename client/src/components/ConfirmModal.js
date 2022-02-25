import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ConfirmModal = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center bg-dark text-white py-3'>Are you sure you want to perform this action ?</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default ConfirmModal
