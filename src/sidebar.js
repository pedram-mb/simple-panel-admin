import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { showContext } from "./context/context";

const Sidebar = ()=>{

  const {showMenu , setshowMenu} = useContext(showContext);

  return(
    <div className="sidebar" style={showMenu ? {right : 0} : {}}>
      <ul className="list">
        <li className="menu menu-1 ">
          <NavLink to="/">
            <i className="bi bi-person-circle text-center"></i>
          </NavLink>
        </li>
        <li className="menu">
          <NavLink to="/todo">
            <i className="bi bi-list-check"></i>   
          </NavLink>
        </li>
        <li className="menu">
          <NavLink to="post">
          <i className="bi bi-justify-right"></i>  
          </NavLink>
        </li>
        <li className="menu">
          <NavLink to="/gallery">
            <i className="bi bi-image"></i>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar;