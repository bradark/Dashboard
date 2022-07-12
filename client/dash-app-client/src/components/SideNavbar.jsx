import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function SideNavbar(props) {
    return (
        <div class="col">
            <nav class ="navbar bg-dark sideNav">
                <ul class ="nav navbar-nav">
                    <li class ="nav-item">
                    <a class ="nav-link" href="#"> Dashboard </a>
                    </li>
                    <li class ="nav-item">
                    <a class ="nav-link" href="#"> Users </a>
                    </li>
                    <li class ="nav-item">
                    <a class ="nav-link" href="#"> Payments </a>
                    </li>
                    <li class ="nav-item">
                    <a class ="nav-link" href="#"> About </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
  
  export default SideNavbar;