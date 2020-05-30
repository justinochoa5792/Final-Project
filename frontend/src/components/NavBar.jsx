import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import actions from "../services/index";
import { MDBBtn } from "mdbreact"


class NavBar extends Component {
  render() {
    return (
     <div className="navbar">
       <nav>
         <NavLink to="/home" style= {{color:'#4285f4'}}> Home </NavLink>
         <NavLink to="/about" style= {{color:'#4285f4'}}>About </NavLink>
         <NavLink to="/">
        <MDBBtn style={{padding:'0.1rem'}} outline color="primary" onClick={actions.logOut} type="button">
             LogOut
       </MDBBtn>
       </NavLink>
       </nav>
     </div> 
    );
  }
}

export default NavBar;

  