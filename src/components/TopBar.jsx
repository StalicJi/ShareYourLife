import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">ShareYourLife</div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/ShareYourLife">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/ShareYourLife">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/ShareYourLife">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        ) : (
          <div className="topCenter">
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          </div>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
