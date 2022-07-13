import React from "react";

function ProfileCard(props) {

    async function handleLogout(event){
        window.open('http://localhost:3001/home', "_blank") //to open new page
    }

    async function handleReconnect(event){
        window.open('https://discord.com/api/oauth2/authorize?client_id=995494000607899669&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fredirect&response_type=code&scope=identify%20email%20guilds', "_blank") //to open new page
    }

    return (
      <div>
        <div className="profileCard">
            <div>
                <div className="sidebysideContainer">
                    <div className="boxContainer">
                        <img className="profileCardImg" src={props.avatar}/>
                    </div>
                    <div className="boxContainer">
                        <h1 className="title">Welcome, {props.username}</h1>
                        <p className="profileDetailText">{`ID: ${props.userID}`}</p>
                        <p className="profileDetailText">{`EMAIL: ${props.email}`}</p>
                    </div>
                    <div className="profileItemDiv">
                        <div className="profileItemParDiv">
                            <div className="profileItemChildDiv">
                                <div className="payItemParDiv">
                                <button onClick={handleReconnect} className="conStripeBtn">
                                    <div className="payItemChildDiv">
                                            Reconnect Discord 
                                    </div>
                                    <div className="payItemChildDiv">
                                        <i class="gg-link"></i>
                                    </div>
                                </button>
                                </div>
                            </div>
                            <div className="payItemChildDivRight">
                                <div className="payItemParDiv">
                                <button onClick={handleLogout} className="monetizeServBtn">
                                    <div className="payItemChildDiv">
                                            Logout 
                                    </div>
                                    <div className="payItemChildDiv">
                                        <i class="gg-arrow-bottom-right-r"></i>
                                    </div>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default ProfileCard;