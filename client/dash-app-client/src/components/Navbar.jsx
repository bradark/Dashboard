import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function MainNavbar(props) {
    return (
        <Navbar bg="dark" variant="light">
        <Container>
          <Navbar.Brand className="navText" href="#home">Dash App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="navText">
              Welcome, {props.username} <img className="navImg" src={props.avatar}/>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default MainNavbar;