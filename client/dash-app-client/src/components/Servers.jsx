import React from "react";

function Servers(props) {

    async function handleLogout(event){
        window.open('http://localhost:3001/home', "_blank") //to open new page
    }

    async function handleReconnect(event){
        window.open('https://discord.com/api/oauth2/authorize?client_id=995494000607899669&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fredirect&response_type=code&scope=identify%20email%20guilds', "_blank") //to open new page
    }

    return (
      <div className="dashCard">
        <div className="discordCard">
            <h1 className="title">Servers</h1>
            <div className="payItemDiv">

            </div>
        </div>
      </div>
    );
  }
  
  export default Servers;