import React, { Component } from "react";
import NavBar from "../NavBar";
import { MDBBtn } from "mdbreact";

class About extends Component {
  render() {
    return (
      <div className="about">
        <NavBar/>
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>About Us</h1>
        <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
          {" "}
          Iron study guide is a solo project done by Justin Ochoa.
          <br /> It is tool used to help solidify the users knowledge of <br />
          web development through definitions and quizzes.
        </h3>
      </div>
    );
  }
}

export default About;
