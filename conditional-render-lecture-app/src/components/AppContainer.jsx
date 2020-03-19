import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            isLoggingIn: false, // flag for conditionally rendering log in component
            isSigningIn: false,// flag for conditionally rendering sign in component
        }
    }

    // event handler - tied to onClick to update state of conditional render flags to display log in component
    updateIsLoggingIn = () => {
        this.setState({ isSigningIn: false });
        this.setState({ isLoggingIn: true });
    }
    // event handler - tied to onClick to update state of conditional render flags to display sign in component
    updateIsSigningIn = () => {
        this.setState({ isLoggingIn: false });
        this.setState({ isSigningIn: true });
    }

    // display title, buttons, and sign in OR log in form
    render() {
        // declare variable as undefined
        let userForm;
        if (this.state.isLoggingIn) {
            // render the log in component
            userForm = <Login />
        } else if (this.state.isSigningIn) {
            // render the sign up component
            userForm = <SignUp />
        }
        return (
            <div>
                <h1>20-03-19 React Conditional Rendering Lecture</h1>
                <button onClick={this.updateIsLoggingIn}>Log In</button>
                <button onClick={this.updateIsSigningIn}>Sign Up</button>
                <div>
                    {userForm}
                </div>
            </div>
        )
    }
}

export default AppContainer;