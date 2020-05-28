import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import NavBar from '../NavBar'

class Home extends Component {
  render() {
    return (
      <div>
      <NavBar/>

      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Iron Study Guide
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          A multifunctional study guide that lets you test your knowledge with a
          multiple choice quiz. <br /> Refresh your memory with the defintion
          section. As well as a section that allows you to write
         <br/>your own notes as needed.
        </p>

        <MDBContainer className="d-flex flex-wrap">
          <MDBCol md="12" className="mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage: "url(/images/computer.jpg)",
                alignItems: "center",
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h3 className="py-3 font-weight-bold">
                    <strong>JavaScript Quiz</strong>
                  </h3>
                  <p className="pb-3">Click below to start your quiz</p>
                  <Link to="/quiz">
                    <MDBBtn color="blue" rounded size="md">
                      <MDBIcon far icon="clone" className="left" /> Click Here
                    </MDBBtn>
                  </Link>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="md-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage: "url(/images/book.png)",
                backgroundSize: "cover",
                alignItems: "center",
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h3 className="py-3 font-weight-bold">
                    <strong>Definitions</strong>
                  </h3>
                  <p className="pb-3">
                    If you need a quick review before you start the quiz
                  </p>
                  <Link to="/definition">
                    <MDBBtn color="blue" rounded size="md">
                      <MDBIcon far icon="clone" className="left" /> Click Here
                    </MDBBtn>
                  </Link>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="md-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage: "url(/images/author.jpg)",
                alignItems: "center",
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h3 className="py-3 font-weight-bold">
                    <strong>Take Notes</strong>
                  </h3>
                  <p className="pb-3">
                    We know everyone's learning styles are different,
                    <br />
                    So if you prefer writing things down first <br />
                    click here
                  </p>
                  <Link to="note">
                    <MDBBtn color="blue" rounded size="md">
                      <MDBIcon far icon="clone" className="left" /> Click Here
                    </MDBBtn>
                  </Link>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBContainer>
      </section>
      </div>
    );
  }
}
export default Home;
