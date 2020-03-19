import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggingIn: false,
            isSigningIn: false,
        }
    }

    updateIsLoggingIn = () => {
        this.setState({ isSigningIn: false });
        this.setState({ isLoggingIn: true });
    }

    updateIsSigningIn = () => {
        this.setState({ isLoggingIn: false });
        this.setState({ isSigningIn: true });
    }

    render() {
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