import React from "react";

function ProfileCard(props) {
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
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default ProfileCard;