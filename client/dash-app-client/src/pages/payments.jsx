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
    const [stripeID, setStripeID] = useState("");
    const [email, setEmail] = useState("");

    async function handleStripeConnect(event){
        window.open('https://connect.stripe.com/oauth/v2/authorize?response_type=code&client_id=ca_LKCwIu14HeaPZ1oBK4nuo0H3Pe3MGOPc&scope=read_write&redirect_uri=https://localhost:3002/stripe/redirect', "_blank") //to open new page
    }

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
              setStripeID(`${resObject.stripeUserID}`);
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
                    <div className="paymentCard">
                    <h4 className="title">Stripe Payments</h4>
                    <div className="payItemDiv">
                        <div className="payItemParDiv">
                            <div className="payItemChildDiv">
                                <img className="payImg" src={avatar}/>
                            </div>
                            <div className="payItemChildDiv">
                                <h1 className="payInfo">Username: {username}</h1>
                                <h1 className="payInfo">ID: {userID}</h1>
                                <h1 className="payInfo">STRIPE: <span className="payItemStripeID">{stripeID}</span></h1>
                            </div>
                            <div className="payItemChildDivRight">
                                <div className="payItemParDiv">
                                <button onClick={handleStripeConnect} className="conStripeBtn">
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
                        <div className="payItemChildDiv  payRecentPaymentsCard">
                            <h1 className="payInfo">Recent Payments</h1>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Payments;