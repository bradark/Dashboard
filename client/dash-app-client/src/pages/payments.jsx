import React, {useState, useEffect} from "react";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import SideNavbar from "../components/SideNavbar.jsx";
import {httpGetUser} from '../hooks/requests';

function Payments() {

    const [username, setUserName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [userID, setUserID] = useState("");
    const [email, setEmail] = useState("");

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
              setAvatar(`//cdn.discordapp.com/avatars/${resObject.userData.id}/${resObject.userData.avatar}.png`);
              setUserID(`${resObject.userData.id}`);
              setEmail(`${resObject.userData.email}`);  
            })
            .catch((err) => {
              console.log(err);
            });
        };
        getUser();
      }, []);
    

    return(
        <div>
          <Navbar username={username} avatar={avatar} />
          <div class="row">
            <SideNavbar />
            <div class="col-9">
                <div class="container">
                    <div className="paymentCard">
                    <h4 className="title">Stripe Payments</h4>
                    <div className="payItemDiv">
                        <div className="payItemParDiv">
                            <div className="payItemChildDiv">
                                <img className="navImg" src={avatar}/>
                            </div>
                            <div className="payItemChildDiv">
                                <h1 className="payInfo">Username: {username}</h1>
                                <h1 className="payInfo">ID: {userID}</h1>
                            </div>
                            <div className="payItemChildDivRight">
                                <div className="payItemParDiv">
                                <button className="conStripeBtn">
                                    <div className="payItemChildDiv">
                                            Connect Stripe 
                                    </div>
                                    <div className="payItemChildDiv">
                                        <i class="gg-link"></i>
                                    </div>
                                </button>
                                </div>
                            </div>
                            <div className="payItemChildDivRight">
                                <div className="payItemParDiv">
                                <button className="monetizeServBtn">
                                    <div className="payItemChildDiv">
                                            Monetize Server 
                                    </div>
                                    <div className="payItemChildDiv">
                                        <i class="gg-credit-card"></i>
                                    </div>
                                </button>
                                </div>
                            </div>
                            <div className="payItemChildDivRight">
                                <div className="payItemParDiv">
                                <button className="gotoStripeBtn">
                                    <div className="payItemChildDiv">
                                            Goto Stripe 
                                    </div>
                                    <div className="payItemChildDiv">
                                        <i class="gg-arrow-top-right"></i>
                                    </div>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="payItemCardParDiv">
                            <div className="payItemChildDiv  payGrossSalesCard">
                                <h1 className="payInfo">Gross Sales</h1>
                            </div>
                            <div className="payItemChildDiv  payVolumeCard">
                                <h1 className="payInfo">User Volume</h1>
                            </div>
                            <div className="payItemChildDiv  payNewUsersCard">
                                <h1 className="payInfo">New Users</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Payments;