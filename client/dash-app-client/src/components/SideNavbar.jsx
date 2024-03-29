import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function SideNavbar(props) {
    return (
        <div class="col">
            <nav class ="navbar bg-dark sideNav">
            <h1 className="navTitle">Dash App</h1>
            <p className="profileDetailText">Logged in: {props.username}</p> <img className="navImg" src={props.avatar}/>
                <ul class ="nav navbar-nav">
                    <li class ="nav-item">
                        <div className="navItemParDiv">
                            <div className="navItemChildDiv">
                                <i class="gg-timer"></i>
                            </div>
                            <div className="navItemChildDiv">
                            <span>
                                <a class ="nav-link" href="/dashboard"> Dashboard </a>
                            </span>
                            </div>
                        </div>
                    </li>
                    <li class ="nav-item">
                        <div className="navItemParDiv">
                            <div className="navItemChildDiv">
                                <i class="gg-user"></i>
                            </div>
                            <div className="navItemChildDiv">
                            <span>
                                <a class ="nav-link" href="/profile"> Profile </a>
                            </span>
                            </div>
                        </div>
                    </li>
                    <li class ="nav-item">
                        <div className="navItemParDiv">
                            <div className="navItemChildDiv">
                                <i class="gg-credit-card"></i>
                            </div>
                            <div className="navItemChildDiv">
                            <span>
                                <a class ="nav-link" href="/payments"> Payments </a>
                            </span>
                            </div>
                        </div>
                    </li>
                    <li class ="nav-item">
                        <div className="navItemParDiv">
                            <div className="navItemChildDiv">
                                <i class="gg-tag"></i>
                            </div>
                            <div className="navItemChildDiv">
                            <span>
                                <a class ="nav-link" href="/products"> Products </a>
                            </span>
                            </div>
                        </div>
                    </li>
                    <li class ="nav-item">
                        <div className="navItemParDiv">
                            <div className="navItemChildDiv">
                                <i class="gg-server"></i>
                            </div>
                            <div className="navItemChildDiv">
                            <span>
                                <a class ="nav-link" href="/servers"> Servers </a>
                            </span>
                            </div>
                        </div>
                    </li>
                    <li class ="nav-item">
                        <div className="navItemParDiv">
                            <div className="navItemChildDiv">
                                <i class="gg-bot"></i>
                            </div>
                            <div className="navItemChildDiv">
                            <span>
                                <a class ="nav-link" href="/discordbot"> Discord Bot </a>
                            </span>
                            </div>
                        </div>
                    </li>
                    <li class ="nav-item">
                        <div className="navItemParDiv">
                            <div className="navItemChildDiv">
                                <i class="gg-toolbox"></i>
                            </div>
                            <div className="navItemChildDiv">
                            <span>
                                <a class ="nav-link" href="/settings"> Settings </a>
                            </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
  
  export default SideNavbar;