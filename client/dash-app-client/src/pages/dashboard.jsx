import React, {useState, useEffect} from "react";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import SideNavbar from "../components/SideNavbar.jsx";
import {httpGetUser} from '../hooks/requests';

function Dashboard() {

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
                    <ProfileCard 
                        username={username} 
                        avatar={avatar} 
                        userID={userID}
                        email={email}
                    />
                </div>
            </div>
           </div>
        </div>
    );
}

export default Dashboard;