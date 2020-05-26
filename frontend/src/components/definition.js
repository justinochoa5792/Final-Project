import React, { Component } from "react";
import actions from "../services/index";
import { NavLink } from "react-router-dom";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader } from "mdbreact";


class definition extends Component {
  state = {
    definition: [],
    collapseID: "collapse3",
  };
  async componentDidMount() {
    let res = await actions.getDefinitions();
    this.setState({
      definition: res.data,
    });
  }
  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

    showDefinitions = () => {
      const { collapseID } = this.state;
      return this.state.definition.map((eachDefinition) => {
        return (
          <MDBContainer>
              <MDBContainer className="mt-5">
                <MDBCard className="mt-3">
                  <MDBCollapseHeader onClick={this.toggleCollapse("collapse1")}>
                  {eachDefinition.word}
                    <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
                  </MDBCollapseHeader>
                  <MDBCollapse id="collapse1" isOpen={collapseID}>
                    <MDBCardBody>
                    {eachDefinition.definition}
                    </MDBCardBody>
                  </MDBCollapse>
                </MDBCard>
              </MDBContainer>
            </MDBContainer> 
        );
      });
    };
  
  render() {
    return (
      <div>
        <NavLink to="/home"> Home|</NavLink>
        <NavLink to="/about">About |</NavLink>
        <NavLink onClick={this.logOut} to="/">
          Log Out |
        </NavLink>
        <h2 style={{textAlign:'center'}}>Definitions</h2>
        {this.showDefinitions()}
      </div>
    );
  }
}

export default definition;
