import React, { Component } from "react";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader,MDBIcon} from "mdbreact";

class cardDef extends Component {
state={
  collapseID: "collapse3"
}

toggleCollapse = collapseID => () =>
this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));
        accordionDef= (props) => {
            console.log(props)
            const { collapseID } = this.state;
            return(
            <MDBContainer>
              <MDBContainer className="mt-5">
                <MDBCard className="mt-3">
                  <MDBCollapseHeader onClick={this.toggleCollapse("collapse1")}>
                  {props.word}
                    <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
                  </MDBCollapseHeader>
                  <MDBCollapse id="collapse1" isOpen={collapseID}>
                    <MDBCardBody>
                    {props.defs}>
                    </MDBCardBody>
                  </MDBCollapse>
                </MDBCard>
              </MDBContainer>
            </MDBContainer>
            );
          }  
        }
export default cardDef;