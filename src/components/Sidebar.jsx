import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          repellat placeat, animi voluptatibus suscipit tenetur provident
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Travel</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Style</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW</span>
        <div className="sidebarSocial">
          <i class="sidebarItem fa-brands fa-square-facebook"></i>
          <i class="sidebarItem fa-brands fa-square-instagram"></i>
          <i class="sidebarItem fa-brands fa-square-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
