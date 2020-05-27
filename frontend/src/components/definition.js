import React, { Component } from "react";
import actions from "../services/index";
import { NavLink } from "react-router-dom";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader, MDBBtn } from "mdbreact";


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
         <nav className='mdbtn'>
      <MDBBtn><NavLink to="/home" style={{color:'white'}}> Home </NavLink></MDBBtn>
        <MDBBtn><NavLink to="/about" style={{color:'white'}}>About </NavLink></MDBBtn>
        <NavLink  to="/">
          <MDBBtn onClick={actions.logOut} type="button">
                LogOut
          </MDBBtn>
      </NavLink>
        </nav>
        <h2 style={{textAlign:'center'}}>Definitions</h2>
        {this.showDefinitions()}
      </div>
    );
  }
}

export default definition;
