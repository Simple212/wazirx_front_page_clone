import React from "react";  
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import './navigation.css'

const Navigation = ({click2,first,second,third,fourth}) =>{
    return(
        <Navbar bg="light" expand="lg" id={'navbar1'}>
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://wazirx.com/static/media/wazirx-logo-blue.8f74de7a.png" className="d-inline-block align-top" width={'150px'} id={"img1"} onClick={click2}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  className='text-center' onClick={first} id={'btn1'}>EXCHANGE</Nav.Link>
              <Nav.Link  className='text-center' onClick={second} id={'btn2'}>P2P</Nav.Link>
              <Nav.Link  className='text-center' onClick={third} id={'btn3'}>LOG IN</Nav.Link>
              <Nav.Link  className='text-center'  onClick={fourth } id={'btn4'}>SIGN UP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation