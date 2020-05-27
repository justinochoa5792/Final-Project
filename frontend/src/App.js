import React, { Component} from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import NotFound from "./components/404/NotFound.js";
import LogIn from "./components/auth/LogIn";
import Profile from "./components/profile/Profile";
import actions from "./services/index";
import Quiz from "./components/quiz";
import Definition from "./components/definition";
import Note from "./components/note";
import SignUp from "./components/auth/SignUp";


class App extends Component {
  state = {};

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
  }

  setUser = (user) => this.setState(user);

  logOut = async () => {
  await actions.logOut();
    this.setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
  };
  render() {
    return (
  <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <LogIn user={this.state} {...props} setUser={this.setUser}/>} />
          <Route exact path="/home" render={(props) => <Home {...props} setUser={this.setUser} />} />
          <Route exact path="/about" render={(props) => <About {...props} />} />
           <Route exact path="/sign-up" render={(props) => <SignUp user={this.state} {...props} setUser={this.setUser} />}/>
          <Route exact path="/profile" render={(props) => <Profile {...props} user={this.state} />} />
          <Route exact path="/quiz" render={(props) => <Quiz {...props} user={this.state} />}/>
          <Route exact path="/definition" render={(props) => <Definition {...props} user={this.state} />}/>
          <Route exact path="/note" render={(props) => <Note {...props} user={this.state} />}/>
          <Route component={NotFound} />
          </Switch>
          </BrowserRouter>
    );
  }
}
export default App;

{/* <BrowserRouter>
{this.state.email}
<nav>
  <NavLink to="/home"> Home|</NavLink>
  <NavLink to="/about">About |</NavLink>

  {this.state.email ? (
    <Fragment>
      <NavLink onClick={this.logOut} to="/">
        Log Out |
      </NavLink>
      <NavLink to="/profile">Profile|</NavLink>
    </Fragment>
  ) : (
    <Fragment>
      <NavLink to="/sign-up">Sign Up |</NavLink>
      <NavLink to="/log-in">Log In |</NavLink>
    </Fragment>
  )}
</nav> */}