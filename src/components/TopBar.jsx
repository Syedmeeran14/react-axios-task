import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
function TopBar() {
  let navigate = useNavigate()
  return <>
     <Navbar expand="lg" className="bg-body-tertiary fw-bold fst-italic">
      <Container>
        <Navbar.Brand>Axios CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')}> <i className="fa-solid fa-house"></i> Home </Nav.Link>
            <Nav.Link onClick={()=>navigate('/add-user')}> <i className="fa-solid fa-plus"></i> Add New User </Nav.Link>
            <Nav.Link onClick={()=>navigate('/dashboard')}> <i className="fa-solid fa-chart-line"></i> Dashboard </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default TopBar