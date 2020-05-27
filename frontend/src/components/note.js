import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import actions from "../services/index";
import {MDBBtn} from 'mdbreact'

class note extends Component {
  state = {
    notes: [],
  };
  componentDidMount() {
    this.createNotes();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    actions.inputNotes({ question: this.state.question }).then((res) => {
      console.log("is it working", res.data);
      const questions = [...this.state.notes];
      questions.push(res.data);
      this.setState({
        notes: questions,
      });
    });
  };
  createNotes = async () => {
    let res = await actions.showNotes();
    console.log(res);
    this.setState({
      notes: res.data,
    });
  };
  printNotes = () => {
    const notes = this.state.notes.map((eachNote) => {
      return <h3>{eachNote.question}</h3>;
    });
    console.log(notes);
    return notes;
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
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h4>Make your own notes</h4>
        <div className="md-form md-outline">
          <textarea
            name="question"
            onChange={(e) => this.handleChange(e)}
            id="form75"
            className="md-textarea form-control"
            rows="3"
          ></textarea>
          <label htmlFor="form75">Notes</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {this.printNotes()}
      </form>
      </div>
    );
  }
}

export default note;
