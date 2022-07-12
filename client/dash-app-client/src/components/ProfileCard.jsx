import React from "react";

function ProfileCard(props) {
    return (
      <div>
        <div className="profileCard">
            <div>
                <h1 className="title">Welcome, {props.username}</h1>
            </div>
        </div>
      </div>
    );
  }
  
  export default ProfileCard;