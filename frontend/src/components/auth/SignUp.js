import React, { Component, Fragment } from "react";
import actions from "../../services/index";


class SignUp extends Component {
  state = {};
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    actions
      .signUp(this.state)
      .then((user) => {
        console.log(user);
        this.props.setUser({ ...user.data });
      })
      .catch(({ response }) => console.error(response));
  };

  render() {
    if (this.props.user?._id) {
      this.props.history.push("/home");
    }
    return (
      <div className="background" style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center" }}>Sign Up</h1>
        <div>
          <Fragment>
            <form onSubmit={this.handleSubmit}>
              <input
                name="email"
                type="email"
                placeholder="john@gmail.com"
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
              <input type="submit" value="Sign Up" />
            </form>
          </Fragment>
        </div>
      </div>
    );
  }
}

export default SignUp;
