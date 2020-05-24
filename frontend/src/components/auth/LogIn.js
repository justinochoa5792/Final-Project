import React, { Component, Fragment } from 'react';
import actions from '../../services/index'
import { Link } from 'react-router-dom'

class LogIn extends Component {

    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit = e => {
        e.preventDefault()
         actions.logIn(this.state).then(user => {
            this.props.setUser({...user.data})  
        }).catch(({ response }) => console.error(response.data));
    }
    render() {
        return (
            <Fragment>
            <h1>Welcome to Iron Study Guide</h1>
                <h2>Log In</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" placeholder='juan23@gmail.com' onChange={this.handleChange} />
                    <input name="password" type="password" placeholder= '1234' onChange={this.handleChange} />
                   <Link to ='/home'> <input type="submit" value="Log In"/></Link>
                </form>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" placeholder= 'john@gmail.com' onChange={this.handleChange} />
                    <input name="password" type="password" placeholder= "1234" onChange={this.handleChange} />
                   <Link to='/home'><input type="submit" value="Sign Up"/></Link>
                </form>
            </Fragment>
        );
    }
}

export default LogIn;