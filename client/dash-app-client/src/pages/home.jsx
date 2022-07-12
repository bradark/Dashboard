import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";

function Home() {

    async function handleSubmit(event){
        window.open('https://discord.com/api/oauth2/authorize?client_id=995494000607899669&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fredirect&response_type=code&scope=identify%20email%20guilds', "_blank") //to open new page
    }

    return(
        <div>
            <Navbar />
          <div className="card">
            <h1 className="title">Login</h1>
            <div className="loginInput">
                <input placeholder="Username..."></input>
            </div>
            <div className="loginInput">
                <input placeholder="Password..."></input>
            </div>
            <div className="loginBtnDiv">
                <button className="loginBtn">Login</button>
            </div>
            <div className="discordLoginBtnDiv">
                <button onClick={handleSubmit} className="discordLoginBtn">Login With Discord</button>
            </div>
          </div>
        </div>
    );
}

export default Home;