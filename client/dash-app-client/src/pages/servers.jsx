import React, {useState, useEffect} from "react";
import * as ReactBootStrap from "react-bootstrap";
import SideNavbar from "../components/SideNavbar.jsx";
import ServerComp from "../components/Servers";
import {httpGetUser} from '../hooks/requests';
import Dash from "../components/Dash.jsx";

function Servers() {

    const [username, setUserName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [userID, setUserID] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const getUser = () => {
          fetch("http://localhost:3000/auth/getUserData", {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          })
            .then((response) => {
              if (response.status === 200) return response.json();
              throw new Error("authentication has been failed!");
            })
            .then((resObject) => {
              setUserName(`${resObject.username}`);
              setAvatar(`//cdn.discordapp.com/avatars/${resObject.discordID}/${resObject.avatar}.png`);
              setUserID(`${resObject.discordID}`);
              //setEmail(`${resObject.userData.email}`);  
            })
            .catch((err) => {
              console.log(err);
            });
        };
        getUser();
      }, []);
    

    return(
        <div>
          <div class="row">
            <SideNavbar username={username} avatar={avatar}/>
            <div class="col-9">
                <div class="container">
                    <ServerComp />
                </div>
            </div>
           </div>
        </div>
    );
}

export default Servers;