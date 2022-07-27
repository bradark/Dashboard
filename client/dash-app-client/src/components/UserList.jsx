import React from "react";

function List(props){
    return(
        <div className="userList">
            <table className="userTable">
                {props.data.map((user) => {
                    return(
                    <div>
                        <tr className="tablerow"/>
                            <div className="userCard">
                                <div>
                                    <img className="userListAvatar" src={user.userAvatarLink}/>
                                </div>
                                <div className="saleImgDiv">
                                    <td className="listItem" key={user.user}>{user.user}</td>
                                </div>
                                <div className="saleDateDiv">
                                    <td className="verifiedStatus">Verified Status</td> 
                                </div>
                                    <div className="listItem">
                                        <button className="kickBtn">Kick</button>
                                    </div> 
                                    <div className="listItem">
                                        <button className="banBtn">Ban</button>
                                    </div>
                                    <div className="listItem">
                                        <button className="addRoleBtn">Add Roles</button>
                                    </div>
                            </div>
                        <tr/>
                    </div>
                    );
                })}
            </table>
        </div>
    );
}

export default List;
