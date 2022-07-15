import React from "react";
import DashCard from "./DashCard";

function Dash(props) {

    async function handleLogout(event){
        window.open('http://localhost:3001/home', "_blank") //to open new page
    }

    async function handleReconnect(event){
        window.open('https://discord.com/api/oauth2/authorize?client_id=995494000607899669&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fredirect&response_type=code&scope=identify%20email%20guilds', "_blank") //to open new page
    }

    return (
      <div>
        <div className="dashboardCard">
            <h1 className="title">Dashboard</h1>
            <div className="payItemDiv">
                <div className="payItemParDiv">
                    <div className="payItemChildDiv">
                        <img className="payImg" src={props.avatar}/>
                    </div>
                    <div className="payItemChildDiv">
                        <h1 className="payInfo">Username: {props.username}</h1>
                        <h1 className="payInfo">ID: {props.userID}</h1>
                        <h1 className="payInfo">STRIPE: <span className="payItemStripeID">{props.stripeID}</span></h1>
                    </div>
                </div>
            </div>
            <div className="dashItemParDiv">
                <div className="dashItemChildDiv">
                    <DashCard title="Total Revenue"/>
                </div>
                <div className="dashItemChildDiv">
                    <DashCard title="Total Users"/>
                </div>
                <div className="dashItemChildDiv">
                    <DashCard title="User's Gained"/>
                </div>
                <div className="dashItemChildDiv">
                    <DashCard title="User's Lost"/>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Dash;