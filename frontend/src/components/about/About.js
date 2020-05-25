import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
class About extends Component {
    render() {
        return (
            <div className='about'>
             <nav>
        <NavLink style={{color:'white'}} to="/home"> Home  |</NavLink>
        <NavLink style={{color:'white'}} to="/about"> About |</NavLink>
        <NavLink style={{color:'white'}} onClick={this.logOut} to="/">
        Log Out |
      </NavLink>
        </nav>
                <h1 style={{fontWeight:'bold', textAlign:'center'}}>About Us</h1>
                <h3 style={{fontWeight:'bold', textAlign:'center'}}> Iron study guide is a solo project done by Justin Ochoa.
                <br/> It is tool used to help solidify the users knowledge of <br/>
                web development through definitions and quizzes.</h3>
            </div>
        );
    }
}

export default About;