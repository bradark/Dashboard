import React, {useState, useEffect} from "react";
import DashCard from "./DashCard";
import UserList from "./UserList";

function Dash(props) {

    const [serverUsers, setServerUsers] = useState([]);

    async function handleLogout(event){
        window.open('http://localhost:3001/home', "_blank") //to open new page
    }

    async function handleReconnect(event){
        window.open('https://discord.com/api/oauth2/authorize?client_id=995494000607899669&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fredirect&response_type=code&scope=identify%20email%20guilds', "_blank") //to open new page
    }

    async function handleDiscordConnect(event){
        window.open('https://discord.com/oauth2/authorize?client_id=995494000607899669&permissions=8&scope=bot', "_blank") //to open new page
    }

    useEffect(() => {
        const getUser = () => {
          fetch("http://localhost:3003/discord/getAllUsers", {
            method: "GET",
          })
            .then((response) => {
              if (response.status === 200) return response.json();
              throw new Error("authentication has been failed!");
            })
            .then((resObject) => {
             console.log(resObject);
              setServerUsers(resObject);  
            })
            .catch((err) => {
              //console.log(err);
            });
        };
        getUser();
      }, []);

    return (
      <div>
        <div className="discordCard">
            <h1 className="title">Discord Bot Panel</h1>
            <div className="payItemDiv">
                <div className="payItemParDiv">
                    <div className="payItemChildDiv">
                        <img className="payImg" src={props.avatar}/>
                    </div>
                    <div className="payItemChildDiv">
                        <h1 className="payInfo">User Account: {props.username}</h1>
                        <h1 className="payInfo">Connected Server: {props.userID}</h1>
                    </div>
                    <div className="payItemChildDivRight">
                        <button onClick={handleDiscordConnect} className="conDisServerBtn">
                            <div className="payItemChildDiv">
                                Connect Server 
                            </div>
                            <div className="payItemChildDiv">
                                <i class="gg-link"></i>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="payItemDiv">
                <div class="container">
                    <UserList data={serverUsers}/>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Dash;