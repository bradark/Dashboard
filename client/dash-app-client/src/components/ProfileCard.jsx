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
                    <div className="profileItemDiv">
                        <div className="profileItemParDiv">
                            <div className="profileItemChildDiv">
                                <div className="payItemParDiv">
                                <button className="conStripeBtn">
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
                                <button className="monetizeServBtn">
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