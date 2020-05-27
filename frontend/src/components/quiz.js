import React, { Component } from "react";
import { MDBCard, MDBBtn } from "mdbreact";
import { NavLink} from "react-router-dom"
import actions from "../services/index";

class quiz extends Component {
  state = {
    questions: [],
    answer: "",
    correct: 0,
    incorrect: 0,
  };

  async componentDidMount() {
    let res = await actions.getQuestions();
    console.log(res);
    this.setState({
      questions: res.data,
    });
  }
  answerQuestion = (choice, answer) => {
    console.log(choice, answer);
    if (choice !== answer) {
      alert("incorrect");
      this.setState({
        incorrect: this.state.incorrect + 1,
      });
    } else {
      alert("correct");
      this.setState({
        correct: this.state.correct + 1,
      });
    }
let questions= [...this.state.questions]
questions.shift()
this.setState({questions})
if(questions.length ==0 )
alert('gameover')
  };
  showQuestions = () => {
    return this.state.questions.map((eachQuestion) => {
      let buttons = eachQuestion.choices.map((choice) => {
        return (
          <button style={{height:'50px'}}
            onClick={() => this.answerQuestion(choice, eachQuestion.answer)}
          >
            {choice}
          </button>
        );
      });
      return (
        <MDBCard
          className="card"
          style={{ width: "40vw", height: "150px", margin:'15px', alignContent:'center'}}>
          <header
            style={{
              height: "47px",
              textAlign: "center",
              backgroundColor: "#007bff",
              color: "white",
            }}>
            {eachQuestion.question}
          </header>
         {buttons}
        </MDBCard>
      );
    });
  };

  render() {
    return (
      <div>
        <nav>
        <nav>
      <MDBBtn><NavLink to="/home" style={{color:'white'}}> Home </NavLink></MDBBtn>
        <MDBBtn><NavLink to="/about" style={{color:'white'}}>About </NavLink></MDBBtn>
        <NavLink  to="/">
          <MDBBtn onClick={actions.logOut} type="button">
                LogOut
          </MDBBtn>
      </NavLink>
        </nav>
        </nav>
      <div className="question" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h2>Choose the correct answer</h2>
        <h3>Correct:{this.state.correct}</h3>
        <h3>Incorrect:{this.state.incorrect}</h3>
        {this.showQuestions()}
      </div>
      </div>
    );
  }
}

export default quiz;
