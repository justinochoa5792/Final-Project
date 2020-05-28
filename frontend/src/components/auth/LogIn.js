import React, { Component, Fragment} from "react";
import actions from "../../services/index";
import { Link } from "react-router-dom";


class LogIn extends Component {
  state = {};
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    actions
      .logIn(this.state)
      .then((user) => {
        console.log(user)
        this.props.setUser({ ...user.data });
      })
      .catch(({ response }) => console.error(response));
  };
  render() {
    if(this.props.user?._id){
        this.props.history.push('/home')
    }
    return (
      <div className="background" style={{textAlign:'center'}}>
      <h1>Welcome to Iron Study Guide</h1>
      <h2>Log In or Sign Up</h2>
      <Fragment>
          <form onSubmit={this.handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="juan23@gmail.com"
              onChange={this.handleChange}
              style={{margin:'10px', borderRadius:'5px'}} 
            />
            <input
              name="password"
              type="password"
              placeholder="1234"
              onChange={this.handleChange}
              style={{margin:'10px', borderRadius:'5px'}}
            />
            <input type="submit" value="Log In" />
            <p>Not a member?<Link to='/sign-up' style={{color:'white'}}>Sign Up</Link></p>
            </form>
        </Fragment>
      </div>
      )
    }
  }
  
  export default LogIn;