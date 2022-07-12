import React, {useState, useEffect} from "react";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import {httpGetUser} from '../hooks/requests';

function Dashboard() {

    const [username, setUserName] = useState("");

    useEffect(() => {
        const getUser = () => {
          fetch("http://localhost:3000/auth/success", {
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
              setUserName(`${resObject.userData.username}`);
            })
            .catch((err) => {
              console.log(err);
            });
        };
        getUser();
      }, []);
    

    return(
        <div>
          <Navbar username={username} />
          <ProfileCard username={username} />
        </div>
    );
}

export default Dashboard;